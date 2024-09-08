import express from "express";
import db from "@repo/db/client";
import { z } from "zod";

const app = express();
app.use(express.json());

const paymentInfoSchema = z.object({
    token: z.string(),
    userId: z.string(),// Assuming userId is received as a string
    amount: z.string() // Assuming amount is a numeric string
});

app.post("/hdfcWebhook", async (req, res) => {
   
    const parseResult = paymentInfoSchema.safeParse(req.body);

    if (!parseResult.success) {
        return res.status(400).json({
            message: "Invalid request data",
            errors: parseResult.error.errors
        });
    }

    const paymentInformation = {
        token: parseResult.data.token,
        userId: parseResult.data.userId,
        amount: parseResult.data.amount
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);

        res.json({
            message: "Captured"
        });
    } catch(e) {
        console.error("Error during transaction:", e);
        res.status(500).json({
            message: "Error while processing webhook"
        });
    }
});

app.listen(3003, () => {
    console.log("Server running on port 3003");
});

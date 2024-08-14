import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function updateBalance(amountToAdd:number) {
    const session = await getServerSession(authOptions);
    const userId = session.user.id;
    if(!userId){
        return {
            message : "user not logged in!"
        }
    }

    await prisma.balance.update({
        where:{userId:userId},
        data : {
            amount : amountToAdd
        },
    })
}
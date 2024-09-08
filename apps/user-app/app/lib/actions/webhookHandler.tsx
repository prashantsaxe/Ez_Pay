"use server"
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { Button } from "@repo/ui/button";
import axios from "axios";

async function fetchTransaction() {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;

  try {
    const transaction = await prisma.onRampTransaction.findFirst({
      where: {
        userId: Number(userId),
      },
      select: {
        token: true,
        userId: true,
        amount: true,
      },
    });
    
    if (transaction) {
      return transaction;
    } else {
      throw new Error("Transaction not found");
    }
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    throw new Error("Internal server error");
  }
}

export default async function updation() {
  try {
    const transaction = await fetchTransaction();
    
   

    const response = await axios.post('http://localhost:3003/hdfcWebhook', {
      token: transaction.token,
      userId: transaction.userId.toString(),
      amount: transaction.amount.toString(),
    });

    if (response.status === 200) {
      console.log('Transaction created:', response.data);
      // Handle success, e.g., show a success message or redirect
    } else {
      console.error('Failed to create transaction');
      // Handle failure, e.g., show an error message
    }
  } catch (error) {
    console.error('An error occurred:', error);
    // Handle error, e.g., show an error message
  }
}
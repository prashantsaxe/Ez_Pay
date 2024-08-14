import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        status: string,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between items-center pt-3 ">
                <div className="w-1/3">
                    <div className="text-sm">
                        Received INR ₹
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className=" text-sm text-center w-1/3">
                    {t.status}
                </div>
                <div className="text-sm text-right w-1/3">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}
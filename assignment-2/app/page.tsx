import { transactions } from "../Mockdata/data";

function formatTHB(n: number) {
  return n.toLocaleString("th-TH") + " ฿";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("th-TH");
}

export default function Page() {

  let totalIncome = 0;
  let totalExpense = 0;

  for(const t of transactions)
  {
    if(t.type === "income")
    {
      totalIncome += t.amount;
    }
    else
    {
      totalExpense += t.amount;
    }
  }

  const balance = totalIncome - totalExpense;

  const sorted = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-4xl p-4">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Transaction Dashboard
        </h1>

        {/* Sum */}
        <section className="grid grid-cols-3 divide-x rounded-md border bg-white">
          <div className="p-4 text-center">
            <div className="text-gray-500">Total Income</div>
            <div className="text-green-500">{formatTHB(totalIncome)}</div>
          </div>

          <div className="p-4 text-center">
            <div className="text-gray-500">Total Expenses</div>
            <div className="text-red-500">{formatTHB(totalExpense)}</div>
          </div>

          <div className="p-4 text-center">
            <div className="text-gray-500">Balance</div>
            <div className="text-gray-900">{formatTHB(balance)}</div>
          </div>
        </section>

        {/* list */}
        <section className="mt-5 rounded-md bg-white">
          {sorted.map((t) => {
            const isIncome = t.type === "income";
            return (
              <div
                key={t.id}
                className="flex flex-col gap-1 p-3 border-b"
              >
                <div>
                  <div className="text-gray-500">{t.description}</div>
                  <div className="text-gray-500">{formatDate(t.date)}</div>
                </div>

                <div className={"text-right text-base font-bold " + (isIncome ? "text-green-500" : "text-red-500")}>
                  {isIncome ? "+" : "-"}{formatTHB(t.amount)}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

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
    <main>
      <div>
        <h1>
          Transaction Dashboard
        </h1>

        {/* Sum */}
        <section>
          <div>
            <div>Total Income</div>
            <div>{formatTHB(totalIncome)}</div>
          </div>

          <div>
            <div>Total Expenses</div>
            <div>{formatTHB(totalExpense)}</div>
          </div>

          <div>
            <div>Balance</div>
            <div>{formatTHB(balance)}</div>
          </div>
        </section>

        {/* list */}
        <section>
          {sorted.map((t) => {
            const isIncome = t.type === "income";
            return (
              <div
                key={t.id}
              >
                <div>
                  <div >{t.description}</div>
                  <div >{formatDate(t.date)}</div>
                </div>

                <div>
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

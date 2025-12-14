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

  const sorted = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>

    </main>
  );
}

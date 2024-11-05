import KpiCard from "@/components/ui/kpi-card";

const kpiList = [
  {
    id: "current-balance",
    title: "Current Balance",
    value: "$45,231.89",
    description: "+20.1% from last month",
  },
  {
    id: "total-income",
    title: "Total Income",
    value: "+2350",
    description: "+180.1% from last month",
  },
  {
    id: "total-expenses",
    title: "Total Expenses",
    value: "+12,234",
    description: "+19% from last month",
  },
  {
    id: "savings-progress",
    title: "Savings Progress",
    value: "+2350",
    description: "+50.1% from last month",
  },
];

export default function KpiList() {
  return (
    <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mb-4 md:mb-8">
      {kpiList.map((kpi) => (
        <KpiCard key={kpi.id} {...kpi} />
      ))}
    </section>
  );
}

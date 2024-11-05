import KpiList from "@/components/dashboard/kpi-list";
import AreaChartComponent from "@/components/ui/charts/area-chart";
import LineChartComponent from "@/components/ui/charts/line-chart";

export default function Home() {
  return (
    <>
      <KpiList />

      <section className="grid gap-4 lg:grid-cols-2 md:gap-8 mb-4 md:mb-8">
        <AreaChartComponent />
        <LineChartComponent />
      </section>
    </>
  );
}

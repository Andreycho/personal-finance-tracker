import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartColumnIncreasing,
  DollarSign,
  HandCoins,
  PiggyBank,
} from "lucide-react";

type KpiCardProps = {
  id: string;
  title: string;
  value: string;
  description: string;
};

export default function KpiCard(props: KpiCardProps) {
  const { id, title, value, description } = props;

  const icon = (id: string) => {
    switch (id) {
      case "current-balance":
        return (
          <DollarSign className="h-4 w-4 text-slate-500 dark:text-slate-400" />
        );
      case "total-income":
        return (
          <ChartColumnIncreasing className="h-4 w-4 text-slate-500 dark:text-slate-400" />
        );
      case "total-expenses":
        return (
          <HandCoins className="h-4 w-4 text-slate-500 dark:text-slate-400" />
        );
      case "savings-progress":
        return (
          <PiggyBank className="h-4 w-4 text-slate-500 dark:text-slate-400" />
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon(id)}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

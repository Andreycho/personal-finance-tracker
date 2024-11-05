"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", groceries: 186, electronics: 80 },
  { month: "February", groceries: 305, electronics: 200 },
  { month: "March", groceries: 237, electronics: 120 },
  { month: "April", groceries: 73, electronics: 190 },
  { month: "May", groceries: 209, electronics: 130 },
  { month: "June", groceries: 214, electronics: 140 },
];

const chartConfig = {
  groceries: {
    label: "Groceries",
    color: "hsl(173 58% 39%)",
  },
  electronics: {
    label: "Electronics",
    color: "hsl(12 76% 61%)",
  },
} satisfies ChartConfig;

export default function AreaChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Trends</CardTitle>
        <CardDescription>
          Showing spending trends for different categories for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="groceries"
              type="natural"
              fill="var(--color-groceries)"
              fillOpacity={0.4}
              stroke="var(--color-groceries)"
              stackId="a"
            />
            <Area
              dataKey="electronics"
              type="natural"
              fill="var(--color-electronics)"
              fillOpacity={0.4}
              stroke="var(--color-electronics)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-slate-500 dark:text-slate-400">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

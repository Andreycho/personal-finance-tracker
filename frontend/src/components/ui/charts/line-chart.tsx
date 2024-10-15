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
import { useTheme } from "next-themes";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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

export default function LineChartComponent() {
  const { theme } = useTheme();

  const groceriesColor = "hsl(173 58% 39%)";
  const electronicsColor = "hsl(12 76% 61%)";

  const foregroundColor =
    theme === "dark" ? "hsl(0 0% 98%)" : "hsl(240 10% 3.9%)";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Trends</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
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
            <Line
              dataKey="groceries"
              type="natural"
              stroke={groceriesColor}
              strokeWidth={2}
              dot={{
                fill: groceriesColor,
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                style={{ fill: foregroundColor }}
                fontSize={12}
              />
            </Line>

            <Line
              dataKey="electronics"
              type="natural"
              stroke={electronicsColor}
              strokeWidth={2}
              dot={{
                fill: electronicsColor,
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                style={{ fill: foregroundColor }}
                fontSize={12}
              />
            </Line>

            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-slate-500 dark:text-slate-400">
          Showing spendind trends for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

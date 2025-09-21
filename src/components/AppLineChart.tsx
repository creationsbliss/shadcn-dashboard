"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A multiple line chart";
const chartData = [
  { month: "January", logins: 320, signups: 120 },
  { month: "February", logins: 410, signups: 150 },
  { month: "March", logins: 380, signups: 200 },
  { month: "April", logins: 290, signups: 170 },
  { month: "May", logins: 450, signups: 220 },
  { month: "June", logins: 500, signups: 260 },
];

const chartConfig = {
  logins: {
    label: "Logins",
    color: "var(--chart-1)",
  },
  signups: {
    label: "Signups",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const AppLineChart = () => {
  return (
    <Card className="border-0">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
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
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="logins"
              type="monotone"
              stroke="var(--color-logins)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="signups"
              type="monotone"
              stroke="var(--color-signups)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AppLineChart;

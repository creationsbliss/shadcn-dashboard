"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const chartData = [
  { name: "Home", chrome: 187, firefox: 200 },
  { name: "About", chrome: 121, firefox: 45 },
  { name: "Contact", chrome: 35, firefox: 311 },
  { name: "Portfolio", chrome: 98, firefox: 150 },
  { name: "Products", chrome: 220, firefox: 120 },
  { name: "Support", chrome: 175, firefox: 260 },
];

const AppBarChart = () => {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Website Visitors by Page
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="chrome" fill="var(--color-chrome)" radius={4} />
            <Bar dataKey="firefox" fill="var(--color-firefox)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AppBarChart;

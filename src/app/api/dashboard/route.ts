import { NextResponse } from "next/server";

import type { DashboardResponse } from "@/lib/types";

const dashboardData: DashboardResponse = {
  kpis: [
    {
      id: "users",
      label: "Total users",
      value: "12,640",
      change: "+8.2%",
      note: "Last 30 days",
    },
    {
      id: "subscriptions",
      label: "Active subscriptions",
      value: "3,412",
      change: "+3.1%",
      note: "Renewals steady",
    },
    {
      id: "revenue",
      label: "Monthly revenue",
      value: "$128,940",
      change: "+11.4%",
      note: "Net new ARR",
    },
    {
      id: "invoices",
      label: "Pending invoices",
      value: "47",
      change: "-2.5%",
      note: "Collections",
    },
  ],
  activity: [
    {
      id: "activity-1",
      event: "New workspace created",
      actor: "Ava Chen",
      detail: "Growth plan",
      time: "2h ago",
    },
    {
      id: "activity-2",
      event: "Invoice paid",
      actor: "Horizon Labs",
      detail: "$8,200",
      time: "4h ago",
    },
    {
      id: "activity-3",
      event: "Role updated",
      actor: "Marcus Tran",
      detail: "Promoted to Admin",
      time: "6h ago",
    },
    {
      id: "activity-4",
      event: "SSO enabled",
      actor: "Northwind",
      detail: "Okta connected",
      time: "Yesterday",
    },
  ],
  revenue: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    data: [68, 72, 75, 70, 82, 88, 96, 104],
  },
};

export function GET() {
  return NextResponse.json(dashboardData);
}

import { NextResponse } from "next/server";

import type { BillingResponse } from "@/lib/types";

export const runtime = "edge";

const billingData: BillingResponse = {
  plan: {
    name: "Growth",
    price: "$8,200",
    cadence: "month",
    status: "Active",
    description: "Growth plan billed monthly.",
  },
  usage: [
    {
      label: "API usage",
      detail: "68% of 1M calls",
      percent: 68,
    },
    {
      label: "Storage",
      detail: "420 GB of 1 TB",
      percent: 42,
    },
  ],
  summary: [
    {
      title: "Active seats",
      value: "128",
      note: "+12 seats this cycle",
    },
    {
      title: "Invoices due",
      value: "$8,200",
      note: "Next bill: Sep 30",
    },
  ],
  invoices: [
    {
      id: "INV-0098",
      amount: "$8,200",
      status: "Paid",
      date: "Aug 30, 2024",
    },
    {
      id: "INV-0097",
      amount: "$8,200",
      status: "Paid",
      date: "Jul 30, 2024",
    },
    {
      id: "INV-0096",
      amount: "$8,200",
      status: "Pending",
      date: "Jun 30, 2024",
    },
    {
      id: "INV-0095",
      amount: "$8,200",
      status: "Paid",
      date: "May 30, 2024",
    },
  ],
};

export function GET() {
  return NextResponse.json(billingData);
}

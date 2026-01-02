export type Kpi = {
  id: string;
  label: string;
  value: string;
  change: string;
  note: string;
};

export type Activity = {
  id: string;
  event: string;
  actor: string;
  detail: string;
  time: string;
};

export type ChartSeries = {
  labels: string[];
  data: number[];
};

export type DashboardResponse = {
  kpis: Kpi[];
  activity: Activity[];
  revenue: ChartSeries;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Member";
  status: "Active" | "Invited" | "Suspended";
  lastActive: string;
};

export type UsersResponse = {
  users: User[];
};

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  status: "Active" | "Trial" | "Paused";
  description: string;
};

export type UsageMetric = {
  label: string;
  detail: string;
  percent: number;
};

export type SummaryCard = {
  title: string;
  value: string;
  note: string;
};

export type Invoice = {
  id: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
};

export type BillingResponse = {
  plan: Plan;
  usage: UsageMetric[];
  summary: SummaryCard[];
  invoices: Invoice[];
};

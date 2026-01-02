import LineChart from "@/components/charts/line-chart";
import { IconPlus } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDashboardData } from "@/lib/api";

export default async function DashboardPage() {
  const { kpis, activity, revenue } = await getDashboardData();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-[var(--text-muted)]">Welcome back</p>
          <h1 className="text-2xl font-semibold">Dashboard overview</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary">Export</Button>
          <Button>
            <IconPlus className="h-4 w-4" />
            New report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.id}>
            <CardHeader>
              <CardDescription>{kpi.label}</CardDescription>
              <CardTitle className="text-2xl">{kpi.value}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <Badge variant={kpi.change.startsWith("-") ? "warning" : "success"}>
                {kpi.change}
              </Badge>
              <span className="text-xs text-[var(--text-muted)]">{kpi.note}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Monthly revenue</CardTitle>
            <CardDescription>ARR performance across the last 8 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart data={revenue.data} />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
              {revenue.labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick insights</CardTitle>
            <CardDescription>Key health signals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <p className="text-sm font-semibold">Churn risk</p>
              <p className="text-xs text-[var(--text-muted)]">3 accounts flagged this week.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <p className="text-sm font-semibold">Usage growth</p>
              <p className="text-xs text-[var(--text-muted)]">API calls up 14% MoM.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <p className="text-sm font-semibold">Security posture</p>
              <p className="text-xs text-[var(--text-muted)]">MFA adoption at 92%.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription>Latest events across your tenants.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Actor</TableHead>
                <TableHead>Detail</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activity.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.event}</TableCell>
                  <TableCell>{item.actor}</TableCell>
                  <TableCell>{item.detail}</TableCell>
                  <TableCell className="text-[var(--text-muted)]">{item.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

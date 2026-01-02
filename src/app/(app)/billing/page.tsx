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
import { getBillingData } from "@/lib/api";

export default async function BillingPage() {
  const { plan, usage, summary, invoices } = await getBillingData();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Billing</h1>
        <p className="text-sm text-[var(--text-muted)]">
          Monitor plan usage, invoices, and upgrades.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Current plan</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div>
                <p className="text-sm font-semibold">{plan.name}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  {plan.price} / {plan.cadence}
                </p>
              </div>
              <Badge variant={plan.status === "Active" ? "success" : "warning"}>
                {plan.status}
              </Badge>
            </div>
            {usage.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{metric.label}</span>
                  <span>{metric.detail}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-2)]">
                  <div
                    className="h-full rounded-full bg-[var(--brand)]"
                    style={{ width: `${metric.percent}%` }}
                  />
                </div>
              </div>
            ))}
            <Button>Upgrade plan</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage summary</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {summary.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4"
              >
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-xs text-[var(--text-muted)]">{item.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Invoice history</CardTitle>
          <CardDescription>Download or review previous invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>
                    <Badge variant={invoice.status === "Paid" ? "success" : "warning"}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {invoice.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

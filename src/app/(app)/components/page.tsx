import { IconPlus, IconSearch } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const swatches = [
  { name: "Brand", value: "#1F5EFF" },
  { name: "Background", value: "#F6F8FC" },
  { name: "Surface", value: "#FFFFFF" },
  { name: "Border", value: "#E2E8F0" },
  { name: "Text", value: "#0F172A" },
  { name: "Muted", value: "#475569" },
  { name: "Success", value: "#22C55E" },
  { name: "Warning", value: "#F59E0B" },
  { name: "Danger", value: "#EF4444" },
];

const exportFrames = [
  { title: "Cover", detail: "Overview" },
  { title: "Login", detail: "Secure access" },
  { title: "Dashboard", detail: "KPIs + chart" },
  { title: "Users", detail: "RBAC table" },
  { title: "Billing", detail: "Plan + invoices" },
  { title: "Components", detail: "Library" },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f5eff] via-[#3b82f6] to-[#0ea5e9]" />
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-12 h-32 w-32 rounded-full bg-white/15 blur-3xl" />
        <div className="relative grid gap-6 p-8 text-white lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Components library
            </span>
            <div>
              <h1 className="text-3xl font-semibold">FlowAdmin UI system</h1>
              <p className="mt-2 text-sm text-white/80">
                Reusable, auto-layout-ready building blocks for login, dashboard,
                users, and billing screens.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-white/15 px-3 py-1">Buttons</span>
              <span className="rounded-full bg-white/15 px-3 py-1">Inputs</span>
              <span className="rounded-full bg-white/15 px-3 py-1">Badges</span>
              <span className="rounded-full bg-white/15 px-3 py-1">Tables</span>
              <span className="rounded-full bg-white/15 px-3 py-1">Modals</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            <p className="text-xs font-semibold uppercase text-white/70">
              Proof of system thinking
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-white/10 p-3">
                <p className="text-sm font-semibold">Auto layout ready</p>
                <p className="text-xs text-white/70">
                  Consistent spacing, typography scale, and tokens.
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-3">
                <p className="text-sm font-semibold">Enterprise patterns</p>
                <p className="text-xs text-white/70">
                  RBAC-friendly tables, status badges, and modals.
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-3">
                <p className="text-sm font-semibold">Fiverr ready</p>
                <p className="text-xs text-white/70">
                  Export layouts built for portfolio screenshots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Primary, secondary, ghost, outline.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">
                <IconPlus className="h-4 w-4" />
                With icon
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Text, email, and search states.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Company name" />
            <Input placeholder="you@company.com" type="email" />
            <div className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2">
              <IconSearch className="h-4 w-4 text-[var(--text-muted)]" />
              <input
                aria-label="Search example"
                className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
                placeholder="Search component library"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status and role indicators.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Table row</CardTitle>
            <CardDescription>Enterprise-ready table styling.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ava Chen</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell>
                    <Badge variant="success">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Noah Patel</TableCell>
                  <TableCell>Member</TableCell>
                  <TableCell>
                    <Badge variant="info">Invited</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sidebar item</CardTitle>
            <CardDescription>Active and default navigation states.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-lg bg-[var(--sidebar-active)] px-3 py-2 text-sm font-medium text-[var(--text-primary)]">
              Dashboard
            </div>
            <div className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--surface-2)]">
              Users
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modal dialog</CardTitle>
            <CardDescription>Confirmation flow example.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-6">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative mx-auto w-full max-w-sm rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg">
                <p className="text-sm font-semibold">Deactivate user?</p>
                <p className="mt-2 text-xs text-[var(--text-muted)]">
                  This user will lose access immediately. You can undo this later.
                </p>
                <div className="mt-4 flex justify-end gap-2">
                  <Button variant="secondary" size="sm">
                    Cancel
                  </Button>
                  <Button size="sm">Confirm</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Portfolio export layout</CardTitle>
          <CardDescription>
            Ready-to-screenshot arrangement for Fiverr and case studies.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-4">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <p className="text-xs font-semibold uppercase text-[var(--text-muted)]">
                  Recommended frame size
                </p>
                <p className="mt-2 text-2xl font-semibold">1440 x 1024</p>
                <p className="mt-2 text-xs text-[var(--text-muted)]">
                  Matches the dashboard layout for consistent exports.
                </p>
              </div>
              <div className="space-y-2 text-sm text-[var(--text-muted)]">
                <p>Suggested order: cover, login, dashboard, users, billing.</p>
                <p>Include components page to prove system design.</p>
                <p>Use light theme for clean SaaS positioning.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {exportFrames.map((frame) => (
                <div
                  key={frame.title}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3"
                >
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span>{frame.title}</span>
                    <span className="text-[var(--text-muted)]">
                      {frame.detail}
                    </span>
                  </div>
                  <div className="mt-3 space-y-2 rounded-md border border-dashed border-[var(--border)] bg-[var(--surface)] p-2">
                    <div className="h-2 w-1/2 rounded-full bg-[var(--surface-2)]" />
                    <div className="h-2 w-3/4 rounded-full bg-[var(--surface-2)]" />
                    <div className="h-14 rounded-md border border-[var(--border)] bg-[var(--surface-2)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Color tokens</CardTitle>
          <CardDescription>Core palette for UI consistency.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {swatches.map((swatch) => (
              <div
                key={swatch.name}
                className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3"
              >
                <div
                  className="h-12 w-12 rounded-lg border border-[var(--border)]"
                  style={{ backgroundColor: swatch.value }}
                />
                <div>
                  <p className="text-sm font-semibold">{swatch.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{swatch.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

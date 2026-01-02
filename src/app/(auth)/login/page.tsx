import ThemeToggle from "@/components/app-shell/theme-toggle";
import { IconShield } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-[var(--background)]">
      <div className="absolute right-6 top-6 z-10">
        <ThemeToggle />
      </div>
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-[#1f5eff] via-[#3b82f6] to-[#0ea5e9] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-lg font-bold">
              FA
            </div>
            <h1 className="mt-6 text-3xl font-semibold leading-tight">
              Sign in to manage your organization
            </h1>
            <p className="mt-4 max-w-sm text-sm text-white/80">
              FlowAdmin gives your team instant visibility into usage, revenue,
              and role-based access across the entire workspace.
            </p>
          </div>

          <div className="relative z-10 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <IconShield className="h-4 w-4" />
              Enterprise-grade security and audit trails
            </div>
            <div className="flex items-center gap-2">
              <IconShield className="h-4 w-4" />
              Built for RBAC, SSO, and multi-tenant teams
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center p-8">
          <Card className="w-full max-w-md shadow-lg">
            <CardHeader className="gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand)] text-sm font-bold text-white">
                  FA
                </div>
                <div>
                  <p className="text-sm font-semibold">FlowAdmin</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    Admin Console
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Welcome back</h2>
                <p className="text-sm text-[var(--text-muted)]">
                  Use your work email to access the dashboard.
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-[var(--text-muted)]">
                  Email
                </label>
                <Input placeholder="you@company.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-[var(--text-muted)]">
                  Password
                </label>
                <Input placeholder="Enter your password" type="password" />
              </div>
              <Button className="w-full">Sign in</Button>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>Forgot password?</span>
                <span>Need an account? Contact admin</span>
              </div>
              <div className="rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-xs text-[var(--text-muted)]">
                Protected by MFA and IP allowlisting.
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

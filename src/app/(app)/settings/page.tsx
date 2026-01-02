import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-[var(--text-muted)]">
          Configure workspace preferences and security policies.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workspace settings</CardTitle>
          <CardDescription>Fine-tune access and compliance.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-[var(--text-muted)]">
          Settings panels are ready for SSO, audit logs, and API keys.
        </CardContent>
      </Card>
    </div>
  );
}

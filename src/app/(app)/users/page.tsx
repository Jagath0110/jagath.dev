import { IconDots, IconPlus } from "@/components/icons";
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
import { getUsersData } from "@/lib/api";
import type { User } from "@/lib/types";

const statusVariant = (status: User["status"]) => {
  if (status === "Active") return "success" as const;
  if (status === "Invited") return "info" as const;
  return "warning" as const;
};

export default async function UsersPage() {
  const { users } = await getUsersData();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">User management</h1>
          <p className="text-sm text-[var(--text-muted)]">
            Manage access, roles, and security status across teams.
          </p>
        </div>
        <Button>
          <IconPlus className="h-4 w-4" />
          Add user
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Directory</CardTitle>
          <CardDescription>Search and manage workspace members.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full max-w-sm">
              <Input placeholder="Search by name or email" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary">Filter</Button>
              <Button variant="outline">Export</Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === "Admin" ? "info" : "default"}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(user.status)}>{user.status}</Badge>
                  </TableCell>
                  <TableCell className="text-[var(--text-muted)]">
                    {user.lastActive}
                  </TableCell>
                  <TableCell className="text-right">
                    <details className="relative inline-block">
                      <summary className="flex list-none items-center justify-end">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
                          <IconDots className="h-4 w-4 text-[var(--text-muted)]" />
                        </span>
                      </summary>
                      <div className="absolute right-0 z-10 mt-2 w-36 rounded-md border border-[var(--border)] bg-[var(--surface)] p-1 shadow-lg">
                        <button className="w-full rounded-md px-3 py-2 text-left text-xs hover:bg-[var(--surface-2)]">
                          Edit user
                        </button>
                        <button className="w-full rounded-md px-3 py-2 text-left text-xs hover:bg-[var(--surface-2)]">
                          Change role
                        </button>
                        <button className="w-full rounded-md px-3 py-2 text-left text-xs text-[#b91c1c] hover:bg-[var(--surface-2)]">
                          Deactivate
                        </button>
                      </div>
                    </details>
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

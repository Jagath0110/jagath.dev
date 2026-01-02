import { NextResponse } from "next/server";

import type { UsersResponse } from "@/lib/types";

export const runtime = "edge";

const usersData: UsersResponse = {
  users: [
    {
      id: "user-1",
      name: "Ava Chen",
      email: "ava.chen@flowadmin.com",
      role: "Admin",
      status: "Active",
      lastActive: "2h ago",
    },
    {
      id: "user-2",
      name: "Noah Patel",
      email: "noah.patel@flowadmin.com",
      role: "Member",
      status: "Active",
      lastActive: "Yesterday",
    },
    {
      id: "user-3",
      name: "Elena Rossi",
      email: "elena.rossi@flowadmin.com",
      role: "Admin",
      status: "Invited",
      lastActive: "Pending",
    },
    {
      id: "user-4",
      name: "Marcus Tran",
      email: "marcus.tran@flowadmin.com",
      role: "Member",
      status: "Suspended",
      lastActive: "Aug 12",
    },
  ],
};

export function GET() {
  return NextResponse.json(usersData);
}

import "server-only";

import { headers } from "next/headers";

import type {
  BillingResponse,
  DashboardResponse,
  UsersResponse,
} from "@/lib/types";

async function getBaseUrl() {
  const headerList = await headers();
  const host = headerList.get("host") ?? "localhost:3000";
  const isLocalhost = host.includes("localhost") || host.startsWith("127.0.0.1");
  const protocol = isLocalhost ? "http" : "https";
  return `${protocol}://${host}`;
}

async function fetchJson<T>(path: string): Promise<T> {
  const baseUrl = await getBaseUrl();
  const response = await fetch(`${baseUrl}${path}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status}`);
  }

  return response.json();
}

export async function getDashboardData() {
  return fetchJson<DashboardResponse>("/api/dashboard");
}

export async function getUsersData() {
  return fetchJson<UsersResponse>("/api/users");
}

export async function getBillingData() {
  return fetchJson<BillingResponse>("/api/billing");
}

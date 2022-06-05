export interface Maintenances {
    scheduled_maintenances: Incident[],
}
export interface Incidents {
    incidents: Incident[],
}
export interface Incident {
    id: string,
    name: string,
    impact: "none" | "maintenance" | "minor" | "major" | "critical",
    status: "investigating" | "identified" | "monitoring" | "resolved" | "scheduled" | "in_progress" | "verifying" | "completed",
    shortlink: string,
    started_at: string,
    resolved_at: string | null,
}

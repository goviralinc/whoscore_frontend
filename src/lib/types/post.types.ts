import { Platform } from ".";

// TICKET ID ===============
export type TicketInfo = {
  ticketId: string;
  betPlatform: Platform;
};

export type GetBooked = TicketInfo;

// TICKET ID ===============
export type TicketInfo = {
  ticketId: string;
  betPlatform: "sportybet" | "1xbet" | (string & {});
};

export type GetBooked = TicketInfo;

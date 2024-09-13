import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ITicket, UseTicketInfo } from "../types";

type TicketState = { item?: ITicket; ticketInfo?: UseTicketInfo };

type TicketActions = {
  updateItem: (item: ITicket) => void;
  updateTicketInfo: (ticketInfo: UseTicketInfo) => void;
};

type TicketType = TicketState & TicketActions;

const useTicket = create<TicketType>((set) => ({
  updateItem: (item: ITicket) => set((state) => ({ ...state, item })),
  updateTicketInfo: (ticketInfo) => set((state) => ({ ...state, ticketInfo })),
}));

// === RECENT TICKETS ===

type Ticket = { ticketID: string; date: Date | string };

export type RecentTicketsItem = ITicket & Ticket & UseTicketInfo;

type RecentTicketsState = { items: RecentTicketsItem[]; isRecent: boolean };

type RecentTicketsActions = {
  addTicket: (ticket: RecentTicketsItem) => void;
  removeTicket: (ticket: RecentTicketsItem) => void;
  updateIsRecent: (isRecent: boolean) => void;
  clearTickets: () => void;
};

type RecentTickets = RecentTicketsState & RecentTicketsActions;

export const useRecentTickets = create<RecentTickets>()(
  persist(
    (set, get) => ({
      items: [],
      isRecent: false,
      addTicket: (ticket) =>
        set((state) => {
          const items = get().items;

          if (items.find((item) => item.ticketID === ticket.ticketID)) {
            const filteredItems = items.filter((item) => item.ticketID !== ticket.ticketID);
            return { ...state, items: [...filteredItems, ticket] };
          }

          if (items.length >= 5) {
            const newItems = items.slice(0, 4);
            return { ...state, items: [...newItems, ticket] };
          }

          return { ...state, items: [...state.items, ticket] };
        }),
      removeTicket: (ticket) => set((state) => ({ items: state.items.filter((item) => item !== ticket) })),
      updateIsRecent: (isRecent) => set((state) => ({ ...state, isRecent })),
      clearTickets: () => set((state) => ({ items: [] })),
    }),
    { name: "recent-tickets" }
  )
);

export default useTicket;

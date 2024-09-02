import { create } from "zustand";
import { ITicket, Platform } from "../types";

type TicketState = { item?: ITicket; ticketInfo?: { platform: any; ticketID: string } };
type TicketActions = {
  updateItem: (item: ITicket) => void;
  updateTicketInfo: (ticketInfo: { platform: any; ticketID: string }) => void;
};

type TicketType = TicketState & TicketActions;

const useTicket = create<TicketType>((set) => ({
  updateItem: (item: ITicket) => set((state) => ({ ...state, item })),
  updateTicketInfo: (ticketInfo) => set((state) => ({ ...state, ticketInfo })),
}));

export default useTicket;

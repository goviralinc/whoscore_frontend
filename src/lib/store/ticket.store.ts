import { create } from "zustand";
import { ITicket } from "../types";

export type UseTicketInfo = { platform: { value: string; name: string }; ticketID: string };

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

export default useTicket;

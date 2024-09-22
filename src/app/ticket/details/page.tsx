import TicketDetails from "@/components/UI/Ticket/Details";
import { Platform } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ticket Details",
};

type Props = {
  searchParams: { "ticket-id": string; platform: Platform };
};

const Page = (props: Props) => {
  return <TicketDetails {...props} />;
};
export default Page;

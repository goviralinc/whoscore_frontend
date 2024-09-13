import TicketDetails from "@/components/UI/Ticket/Details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ticket Details",
};

type Props = {
  searchParams: { "ticket-id": string; platform: string };
};

const Page = (props: Props) => {
  return <TicketDetails {...props} />;
};
export default Page;

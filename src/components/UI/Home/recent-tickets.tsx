"use client";

import Ticket from "@/components/Common/Ticket";
import { useRecentTickets } from "@/lib/store/ticket.store";

const RecentTickets = () => {
  const { items } = useRecentTickets();

  return (
    <section className="bg-dark rounded-lg text-white text-sm px-3 pt-4 pb-8 mt-12">
      <h2 className="text-dark-200 mb-5">Recent Tickets</h2>

      <div className="divide-y divide-gray-500/50">
        {items?.length > 0 ? (
          <>
            {items
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .map((ticket, id) => (
                <Ticket key={id} {...ticket} />
              ))}
          </>
        ) : (
          <p className="text-grey text-sm">No tickets found.</p>
        )}
      </div>
    </section>
  );
};

export default RecentTickets;

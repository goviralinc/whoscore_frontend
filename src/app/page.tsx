import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import SelectOptions from "@/components/shared/Select";
import Ticket from "@/components/shared/Ticket";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-7 pb-28">
        <section className="border-2 rounded-2xl px-5 py-7">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="WhoScore logo"
              width={118}
              height={100}
              className="block mx-auto"
            />
          </div>

          <form aria-label="ticket ID">
            <label
              htmlFor="ticketID"
              className="text-xs text-dark-200 block mt-4"
            >
              Enter TicketID
              <input
                type="text"
                id="ticketID"
                className="w-full bg-transparent border border-dark-200 rounded-2xl p-4 mt-1 text-white"
              />
            </label>

            <label
              htmlFor="platform"
              className="text-xs text-dark-200 block mt-4"
            >
              Select Platform
              <SelectOptions />
            </label>

            <button className="rounded-2xl bg-primary hover:bg-opacity-90 w-full mt-7 py-4 text-dark font-semibold">
              Load Games
            </button>
          </form>
        </section>

        <section className="bg-dark rounded-lg text-white text-sm px-3 pt-4 pb-8 mt-12">
          <h2 className="text-dark-200 mb-5">Recent Tickets</h2>

          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </section>
      </div>
      <Footer />
    </>
  );
}

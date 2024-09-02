import Image from "next/image";
import Ads from "@/components/Common/Ads";
import Ticket from "@/components/Common/Ticket";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import TicketIdForm from "./ticked-id-form";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-7 pb-28 w-full">
        <section className="border-2 rounded-2xl px-5 py-7">
          <div className="mb-8">
            <Image src="/logo.png" alt="WhoScore logo" width={118} height={100} className="block mx-auto" />
          </div>

          <TicketIdForm />
        </section>

        <section className="bg-dark rounded-lg text-white text-sm px-3 pt-4 pb-8 mt-12">
          <h2 className="text-dark-200 mb-5">Recent Tickets</h2>

          {Array.from({ length: 5 }).map((_, id) => (
            <Ticket key={id} />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;

import Image from "next/image";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import TicketIdForm from "./ticked-id-form";
import RecentTickets from "./recent-tickets";

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

        <RecentTickets />
      </div>
      <Footer />
    </>
  );
};

export default Home;

import Home from "@/components/UI/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whoscore",
  description: "Whoscore is a platform that provides you with the latest football scores, fixtures, and statistics.",
};

const Page = () => <Home />;

export default Page;

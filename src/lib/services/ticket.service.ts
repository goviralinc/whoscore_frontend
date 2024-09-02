import axios from "axios";
import { publicApi } from "../config/axios-instance";
import { TicketInfo } from "../types/post.types";

export const getTicketInfo = async (body: TicketInfo) => {
  try {
    const { data } = await publicApi.post("/ticket-id", body);

    console.log({ data });
  } catch (e: any) {
    // if (axios.isAxiosError(e)) {
    // handle axios error
    //   throw new Error(e);
    // }
    throw new Error(e);
  }
};

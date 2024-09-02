import axios from "axios";
import { publicApi } from "../config/axios-instance";
import { TicketInfo } from "../types/post.types";
import { ApiResponse, ITicket } from "../types";

export const getTicketInfo = async (body: TicketInfo) => {
  try {
    const {
      data: { data },
    } = await publicApi.post<ApiResponse<ITicket>>("/ticket-id/get-info", body);

    return data;
  } catch (e: any) {
    // if (axios.isAxiosError(e)) {
    // handle axios error
    //   throw new Error(e);
    // }
    throw new Error(e);
  }
};

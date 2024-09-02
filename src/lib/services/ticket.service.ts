import axios from "axios";
import { publicApi } from "../config/axios-instance";
import { TicketInfo } from "../types/post.types";
import { ApiResponse, ITicket } from "../types";

export const getTicketInfo = async (body: TicketInfo) => {
  try {
    const {
      data: { data },
    } = await publicApi.post<ApiResponse<ITicket>>("/ticket-id/get-info", body);

    // console.log({ axiosData: data });

    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};

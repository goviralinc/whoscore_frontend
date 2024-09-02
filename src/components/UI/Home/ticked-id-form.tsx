"use client";

import { Button } from "@/components/Common/Shad/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/Common/Shad/form";
import { Input } from "@/components/Common/Shad/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Common/Shad/select";
import { betPlatforms } from "@/lib/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { getTicketInfo } from "@/lib/services/ticket.service";
import { useState } from "react";
import Ads from "@/components/Common/Ads";
import { toastError } from "@/lib/utils/toast";
import { useModal } from "@/lib/providers/modal";
import useTicket, { useRecentTickets } from "@/lib/store/ticket.store";
import { useRouter } from "next/navigation";
import { ITicket } from "@/lib/types";

const formSchema = z.object({
  ticketId: z.string().min(2, {
    message: "Ticket ID is required",
  }),
  betPlatform: z.enum(["sportybet", "bet9ja", "betking"]),
});

const TicketIdForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketId: "",
    },
  });

  const { hideModal, showModal } = useModal();

  const { updateItem, updateTicketInfo } = useTicket();
  const { addTicket } = useRecentTickets();

  const router = useRouter();

  // const { mutate, isPending, data } = useMutation({ mutationFn: getTicketInfo });
  const [loading, setLoading] = useState(false);
  const [ticketData, setTicketData] = useState<ITicket | null>(null);

  const getPlatformName = (name: string) => {
    if (name.toLowerCase() === "sportybet") {
      return "SportyBet";
    } else if (form.getValues("betPlatform") === "bet9ja") {
      return "Bet9ja";
    } else {
      return "BetKing";
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const data = await getTicketInfo(values);

    console.log(data);

    setLoading(false);

    if (!data) {
      toastError("No ticket found with the provided ID");
      return;
    }

    const platform = { value: values.betPlatform, name: getPlatformName(values.betPlatform) };
    console.log({ date: new Date(), ticketID: values.ticketId, platform, ...data });

    updateItem(data as ITicket);
    updateTicketInfo({
      platform,
      ticketID: values.ticketId,
    });
    addTicket({ date: new Date(), ticketID: values.ticketId, platform, ...data });
    showModal(<Ads proceedAction={() => (hideModal(), router.push(`/ticket/details`))} />);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="ticketId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#8b8b8b] text-sm">Enter TicketID</FormLabel>
              <FormControl>
                <Input placeholder="e.g KZY-..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="betPlatform"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#8b8b8b] text-sm">Select Platform</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={loading}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {betPlatforms.map(({ value, name }, id) => (
                    <SelectItem key={id} value={value}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full font-bold rounded-xl" loading={loading}>
          Load Games
        </Button>
        {/* <AlertDialog>
          <AlertDialogTrigger asChild>
          </AlertDialogTrigger>
          {valid && (
            <AlertDialogContent>
             
            </AlertDialogContent>
          )}
        </AlertDialog> */}
      </form>
    </Form>
  );
};

export default TicketIdForm;

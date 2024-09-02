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

  const { mutate, isPending } = useMutation({ mutationFn: getTicketInfo, mutationKey: ["getTicketInfo"] });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values, {
      onSuccess: () => {
        showModal(<Ads proceedAction={hideModal} />);
      },
      onError: () => {
        toastError("An error occurred. Please try again");
      },
    });
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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

        <Button type="submit" className="w-full font-bold rounded-xl" loading={isPending}>
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

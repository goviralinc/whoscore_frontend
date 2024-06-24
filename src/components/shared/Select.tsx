"use client";

import React from "react";
import * as Select from "@radix-ui/react-select";
import { FaCaretDown } from "react-icons/fa6";

const SelectOptions = () => {
  return (
    <Select.Root>
      <Select.Trigger
        className="w-full bg-transparent border border-dark-200 rounded-2xl p-4 mt-1 text-white leading-none shadow-[0_2px_10px] shadow-black/10 hover:bg-dark focus:shadow-[0_0_0_2px] focus:shadow-black outline-none flex justify-between items-center"
        aria-label="Betting platforms"
      >
        <Select.Value placeholder="Sporty" />
        <Select.Icon className="text-[#8B8B8B] text-2xl">
          <FaCaretDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden text-sm bg-dark rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item
              value="sporty"
              className="leading-none text-white rounded-[3px] relative select-none data-[disabled]:text-dark-200 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-dark-200 py-3 w-full px-4"
            >
              <Select.ItemText>Sporty</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="Bet9ja"
              className="leading-none text-white rounded-[3px] relative select-none data-[disabled]:text-dark-200 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-dark-200 py-3 w-full px-4"
            >
              <Select.ItemText>Bet9ja</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="Betway"
              className="leading-none text-white rounded-[3px] relative select-none data-[disabled]:text-dark-200 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-dark-200 py-3 w-full px-4"
            >
              <Select.ItemText>Betway</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="Bet365"
              className="leading-none text-white rounded-[3px] relative select-none data-[disabled]:text-dark-200 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-dark-200 py-3 w-full px-4"
            >
              <Select.ItemText>Bet365</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="1xBet"
              className="leading-none text-white rounded-[3px] relative select-none data-[disabled]:text-dark-200 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-dark-200 py-3 w-full px-4"
            >
              <Select.ItemText>1xBet</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="Bet"
              className="leading-none text-white rounded-[3px] relative select-none data-[disabled]:text-dark-200 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-dark-200 py-3 w-full px-4"
            >
              <Select.ItemText>Bet</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectOptions;

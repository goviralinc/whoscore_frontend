"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Info from "./Info";
import Lineup from "./Lineup";
import LeagueTable from "./Table";
import Stats from "./Stats";
import H2H from "./H2H";

const DetailTabs = () => {
  const DETAILS_TAB: string[] = ["Info", "Lineup", "Stats", "Table", "H2H"];

  return (
    <Tabs.Root className="flex flex-col" defaultValue="info">
      <Tabs.List
        className="shrink-0 flex border-t border-b border-gray-800 py-3 font-semibold"
        aria-label="Game details"
      >
        {DETAILS_TAB.map((title, i) => (
          <Tabs.Trigger
            key={i}
            className="flex-1 flex items-center justify-center leading-none text-dark-200 select-none hover:text-green-20 data-[state=active]:text-green-20  outline-none cursor-default"
            value={title.toLowerCase()}
          >
            {title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <Tabs.Content
        className="grow p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="info"
      >
        <Info />
      </Tabs.Content>
      <Tabs.Content
        className="grow p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="lineup"
      >
        <Lineup />
      </Tabs.Content>

      <Tabs.Content
        className="grow p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="stats"
      >
        <Stats />
      </Tabs.Content>

      <Tabs.Content
        className="grow p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="table"
      >
        <LeagueTable />
      </Tabs.Content>

      <Tabs.Content
        className="grow p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="h2h"
      >
        <H2H />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default DetailTabs;

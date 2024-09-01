import { ICalender } from "../types";

export const calender: ICalender = [
  {
    name: "Premier League",
    logo: "/premier-league.png",
    matches: Array.from({ length: 6 }).map(() => ({
      team1: {
        name: "Man City",
        logo: "/clubs/manCity.png",
        score: 4,
      },
      team2: {
        name: "Chelsea",
        logo: "/clubs/chelsea.png",
        score: 0,
      },
    })),
  },
  {
    name: "Seria A",
    logo: "/seria-a.png",
    matches: Array.from({ length: 6 }).map(() => ({
      team1: {
        name: "Ac Milan",
        logo: "/clubs/ac-milan.png",
        score: 4,
      },
      team2: {
        name: "As Roma",
        logo: "/clubs/as-roma.png",
        score: 0,
      },
    })),
  },
  {
    name: "Premier League",
    logo: "/premier-league.png",
    matches: Array.from({ length: 6 }).map(() => ({
      team1: {
        name: "Ac Milan",
        logo: "/clubs/ac-milan.png",
        score: 4,
      },
      team2: {
        name: "As Roma",
        logo: "/clubs/as-roma.png",
        score: 0,
      },
    })),
  },
];

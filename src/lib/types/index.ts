export type Team = {
  name: string;
  logo: string;
  score: number;
};

export type IMatch = {
  team1: Team;
  team2: Team;
};

export type ISeries = {
  name: string;
  logo: string;
  matches: IMatch[];
};

export type ICalender = ISeries[];

export type ApiResponse<T = null> = {
  status: string;
  data: T;
};

export type Bet = {
  oddType: string;
  hometeam: string;
  awayteam: string;
  time: string;
  odds: string;
  bet_status: "Lost" | "Won";
};

export type Platform = "sportybet" | "bet9ja" | "betking";

export type UseTicketInfo = { platform: { value: string; name: string }; ticketID: string };

export type TicketInfo = {
  date: string;
  type: "Multiple" | "Single";
  grossWinnings: string;
  totalStake: string;
  totalOdds: string;
  potentialWin: string;
};

export type ITicket = {
  bets: Bet[];
  info: TicketInfo;
};

export type LiveScore = {
  competition_id: string;
  country_id: number;
  fixture_id: number;
  lang: string;
  team_id: number;
};

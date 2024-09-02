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
  addType: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  odds: string;
};

export type Platform = "sportybet" | "bet9ja" | "betking";

export type ITicket = {
  bets: Bet[];
  info: {
    date: string;
    type: "Multiple" | "Single";
    grossWinnings: string;
    totalStake: string;
    totalOdds: string;
    potentialWin: string;
  };
};

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

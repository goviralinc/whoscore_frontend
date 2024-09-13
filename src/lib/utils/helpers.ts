export const getPlatformName = (name: string) => {
  if (name.toLowerCase() === "sportybet") {
    return "SportyBet";
  } else if (name === "bet9ja") {
    return "Bet9ja";
  } else {
    return "BetKing";
  }
};

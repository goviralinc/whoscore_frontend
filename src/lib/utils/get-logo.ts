import { Platform } from "../types";

export const getPlatformLogo = (platform: Platform) => {
  switch (platform) {
    case "betking":
      return "/platforms/betking.png";
    case "bet9ja":
      return "/platforms/bet9ja.jpg";
    case "sportybet":
      return "/platforms/SportyBet.png";
    default:
      return "";
  }
};

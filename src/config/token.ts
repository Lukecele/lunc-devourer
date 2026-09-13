export const TOKEN_CONFIG = {
  name: "LUNC Devourer",
  symbol: "DEVOUR",
  ticker: "$DEVOUR",
  description:
    "🔥 LUNC Devourer ($DEVOUR) - The ultimate burning beast on Terra Classic! $DEVOUR feeds on trading volume to permanently incinerate $LUNC supply.",
  swapFeePercent: 3.0, // 3% Swap Fee
  burnSharePercent: 50.0, // 50% of Swap Fees to LUNC Burn (1.5% volume)
  devSharePercent: 50.0, // 50% of Swap Fees to Development (1.5% volume)
  mechanic:
    "A 3% Creator Swap Fee is generated on LaunchPump trades: 50% is automatically used to buy & burn $LUNC every 24 hours, and 50% is allocated to project development.",
  launchpumpUrl: "https://terraport.finance/launchpump",
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
  logoPath: "/ca.jpeg",
  burnAddress: "terra1sk06e308967wka9ww2c295x2r48705tyxmm272rszw",
};

"use client";

import { WagmiConfig, createConfig } from "wagmi";
import { base, baseGoerli, foundry, Chain } from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const supportedChains = [base, baseGoerli, foundry];
const chains = supportedChains.filter((chain) => chain.id == process.env.NEXT_PUBLIC_CHAIN_ID);

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Harber",

    // Optional
    // appDescription: "Your App Description",
    // appUrl: "https://family.co", // your app's url
    // appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)

    chains,
  })
);

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};

export default Providers;

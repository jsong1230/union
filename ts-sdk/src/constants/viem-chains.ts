import { defineChain } from "viem"
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  berachainTestnetbArtio,
  bob,
  bobSepolia,
  bsc,
  bscTestnet,
  corn,
  cornTestnet,
  holesky,
  mainnet,
  scrollSepolia,
  sei,
  seiTestnet,
  sepolia,
} from "viem/chains"

export const metadium = defineChain({
  id: 11,
  name: "Metadium",
  nativeCurrency: {
    name: "META",
    symbol: "META",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://api.metadium.com/prod"],
    },
  },
  blockExplorers: {
    default: {
      name: "Metadium Explorer",
      url: "https://explorer.metadium.com",
    },
  },
})

export const metadiumTestnet = defineChain({
  id: 12,
  name: "Metadium Testnet Kalmia",
  nativeCurrency: {
    name: "META",
    symbol: "META",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://api.metadium.com/dev"],
    },
  },
  blockExplorers: {
    default: {
      name: "Metadium Testnet Explorer",
      url: "https://testnetexplorer.metadium.com",
    },
  },
  testnet: true,
})

export const VIEM_CHAINS = [
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  berachainTestnetbArtio,
  bob,
  bobSepolia,
  bsc,
  bscTestnet,
  corn,
  cornTestnet,
  holesky,
  mainnet,
  metadium,
  metadiumTestnet,
  scrollSepolia,
  sei,
  seiTestnet,
  sepolia,
] as const

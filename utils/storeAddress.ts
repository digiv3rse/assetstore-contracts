import { network } from "hardhat";

import { addresses as addresses_localhost} from "../cache/addresses_localhost";
import { addresses as addresses_sepolia} from "../cache/addresses_sepolia";
import { addresses as addresses_mainnet} from "../cache/addresses_mainnet";
import { addresses as addresses_goerli} from "../cache/addresses_goerli";

type AddressForChain = {
  [network: string]: string;
};

const addresses: AddressForChain = {
  mainnet: addresses_mainnet.storeAddress,
  sepolia: addresses_sepolia.storeAddress,
  localhost: addresses_localhost.storeAddress,
  goerli: addresses_goerli.storeAddress,
};

export const storeAddress = addresses[network.name];
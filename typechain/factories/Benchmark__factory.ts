/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Benchmark, BenchmarkInterface } from "../Benchmark";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAssetStore",
        name: "_assetStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
    ],
    name: "measure",
    outputs: [
      {
        internalType: "string",
        name: "ret",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161038a38038061038a83398101604081905261002f91610069565b600080546001600160a01b0319166001600160a01b038316178155600180549091829161005d908390610099565b909155506100bf915050565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b600082198211156100ba57634e487b7160e01b600052601160045260246000fd5b500190565b6102bc806100ce6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631abe4f5a14610030575b600080fd5b61004361003e3660046101c7565b61005a565b6040516100519291906101e0565b60405180910390f35b606060005a6000546040517f6dcee4ca0000000000000000000000000000000000000000000000000000000081526004810186905291925073ffffffffffffffffffffffffffffffffffffffff1690636dcee4ca9060240160006040518083038186803b1580156100ca57600080fd5b505afa1580156100de573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610106919081019061011a565b91505a610113908261021b565b9050915091565b60006020828403121561012c57600080fd5b815167ffffffffffffffff8082111561014457600080fd5b818401915084601f83011261015857600080fd5b81518181111561016a5761016a610270565b604051601f8201601f19908116603f0116810190838211818310171561019257610192610270565b816040528281528760208487010111156101ab57600080fd5b6101bc836020830160208801610240565b979650505050505050565b6000602082840312156101d957600080fd5b5035919050565b60408152600083518060408401526101ff816060850160208801610240565b602083019390935250601f91909101601f191601606001919050565b60008282101561023b57634e487b7160e01b600052601160045260246000fd5b500390565b60005b8381101561025b578181015183820152602001610243565b8381111561026a576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212209c7549decaf721e0386f5508149dae3f1d9fce902ef740f3f193535c59d6860d64736f6c63430008060033";

export class Benchmark__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _assetStore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Benchmark> {
    return super.deploy(_assetStore, overrides || {}) as Promise<Benchmark>;
  }
  getDeployTransaction(
    _assetStore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_assetStore, overrides || {});
  }
  attach(address: string): Benchmark {
    return super.attach(address) as Benchmark;
  }
  connect(signer: Signer): Benchmark__factory {
    return super.connect(signer) as Benchmark__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BenchmarkInterface {
    return new utils.Interface(_abi) as BenchmarkInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Benchmark {
    return new Contract(address, _abi, signerOrProvider) as Benchmark;
  }
}

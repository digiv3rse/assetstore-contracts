/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SVGPathDecoder,
  SVGPathDecoderInterface,
} from "../SVGPathDecoder";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "body",
        type: "bytes",
      },
    ],
    name: "decodePath",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506107ef806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c25ddce014610030575b600080fd5b61004361003e366004610447565b610059565b60405161005091906105e3565b60405180910390f35b60608060008060038551600261006f919061067f565b610079919061063c565b9050600091505b8061ffff168261ffff1610156102b157600061009d60028461063c565b6100a890600361067f565b90506000806100b860028661071e565b61ffff1661011b57878361ffff16815181106100d6576100d661078d565b016020015160f81c91506010886100ee856001610616565b61ffff16815181106101025761010261078d565b0160200151610114919060f81c61073f565b905061017c565b87610127846002610616565b61ffff168151811061013b5761013b61078d565b016020015160f81c9150601088610153856001610616565b61ffff16815181106101675761016761078d565b0160200151610179919060f81c61065d565b90505b60ff81166101e95760418260ff161015801561019c5750605a8260ff1611155b806101ba575060618260ff16101580156101ba5750607a8260ff1611155b156101e45785826040516020016101d2929190610599565b60405160208183030381529060405295505b61029b565b60006101008360ff168360ff16610100610203919061067f565b61020d9190610616565b61021791906106a9565b90506104008161ffff1610610266578661023f610236610400846106a9565b61ffff166102ba565b6040516020016102509291906104f8565b6040516020818303038152906040529650610299565b86610276610236836104006106a9565b604051602001610287929190610533565b60405160208183030381529060405296505b505b50505081806102a9906106fc565b925050610080565b50909392505050565b606060006102c783610364565b600101905060008167ffffffffffffffff8111156102e7576102e76107a3565b6040519080825280601f01601f191660200182016040528015610311576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846103575761035c565b61031b565b509392505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106103ad577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106103d9576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106103f757662386f26fc10000830492506010015b6305f5e100831061040f576305f5e100830492506008015b612710831061042357612710830492506004015b60648310610435576064830492506002015b600a8310610441576001015b92915050565b60006020828403121561045957600080fd5b813567ffffffffffffffff8082111561047157600080fd5b818401915084601f83011261048557600080fd5b813581811115610497576104976107a3565b604051601f8201601f19908116603f011681019083821181831017156104bf576104bf6107a3565b816040528281528760208487010111156104d857600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000835161050a8184602088016106cc565b83519083019061051e8183602088016106cc565b600160fd1b9101908152600101949350505050565b600083516105458184602088016106cc565b7f2d00000000000000000000000000000000000000000000000000000000000000908301908152835161057f8160018401602088016106cc565b600160fd1b60019290910191820152600201949350505050565b600083516105ab8184602088016106cc565b60f89390931b7fff00000000000000000000000000000000000000000000000000000000000000169190920190815260010192915050565b60208152600082518060208401526106028160408501602087016106cc565b601f01601f19169190910160400192915050565b600061ffff80831681851680830382111561063357610633610761565b01949350505050565b600061ffff8084168061065157610651610777565b92169190910492915050565b600060ff83168061067057610670610777565b8060ff84160491505092915050565b600061ffff808316818516818304811182151516156106a0576106a0610761565b02949350505050565b600061ffff838116908316818110156106c4576106c4610761565b039392505050565b60005b838110156106e75781810151838201526020016106cf565b838111156106f6576000848401525b50505050565b600061ffff8083168181141561071457610714610761565b6001019392505050565b600061ffff8084168061073357610733610777565b92169190910692915050565b600060ff83168061075257610752610777565b8060ff84160691505092915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122095c303d53dde18921d9dca849620fd69293521b08e2ec84524dd3d6735dd8f4c64736f6c63430008060033";

export class SVGPathDecoder__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SVGPathDecoder> {
    return super.deploy(overrides || {}) as Promise<SVGPathDecoder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SVGPathDecoder {
    return super.attach(address) as SVGPathDecoder;
  }
  connect(signer: Signer): SVGPathDecoder__factory {
    return super.connect(signer) as SVGPathDecoder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SVGPathDecoderInterface {
    return new utils.Interface(_abi) as SVGPathDecoderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SVGPathDecoder {
    return new Contract(address, _abi, signerOrProvider) as SVGPathDecoder;
  }
}

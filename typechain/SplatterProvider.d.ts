/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SplatterProviderInterface extends ethers.utils.Interface {
  functions: {
    "generatePath((uint256,uint256),(uint256,uint256,uint256))": FunctionFragment;
    "generateProps((uint256,uint256))": FunctionFragment;
    "generateSVGPart(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getProviderInfo()": FunctionFragment;
    "owner()": FunctionFragment;
    "processPayout(uint256)": FunctionFragment;
    "receiver()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setHelper(address)": FunctionFragment;
    "setReceiver(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "generatePath",
    values: [
      { seed: BigNumberish; value: BigNumberish },
      { count: BigNumberish; length: BigNumberish; dot: BigNumberish }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "generateProps",
    values: [{ seed: BigNumberish; value: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "generateSVGPart",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getProviderInfo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processPayout",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setHelper", values: [string]): string;
  encodeFunctionData(functionFragment: "setReceiver", values: [string]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "generatePath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateProps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateSVGPart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProviderInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processPayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setHelper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Payout(string,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Payout"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PayoutEvent = TypedEvent<
  [string, BigNumber, string, BigNumber] & {
    providerKey: string;
    assetId: BigNumber;
    to: string;
    amount: BigNumber;
  }
>;

export class SplatterProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SplatterProviderInterface;

  functions: {
    generatePath(
      _seed: { seed: BigNumberish; value: BigNumberish },
      _props: { count: BigNumberish; length: BigNumberish; dot: BigNumberish },
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber },
        string
      ] & {
        seed: [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber };
        svgPart: string;
      }
    >;

    generateProps(
      _seed: { seed: BigNumberish; value: BigNumberish },
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber },
        [BigNumber, BigNumber, BigNumber] & {
          count: BigNumber;
          length: BigNumber;
          dot: BigNumber;
        }
      ] & {
        seed: [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber };
        props: [BigNumber, BigNumber, BigNumber] & {
          count: BigNumber;
          length: BigNumber;
          dot: BigNumber;
        };
      }
    >;

    generateSVGPart(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { svgPart: string; tag: string }>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getProviderInfo(
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string] & {
          key: string;
          name: string;
          provider: string;
        }
      ]
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    processPayout(
      _assetId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    receiver(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHelper(
      _svgHelper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReceiver(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  generatePath(
    _seed: { seed: BigNumberish; value: BigNumberish },
    _props: { count: BigNumberish; length: BigNumberish; dot: BigNumberish },
    overrides?: CallOverrides
  ): Promise<
    [[BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber }, string] & {
      seed: [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber };
      svgPart: string;
    }
  >;

  generateProps(
    _seed: { seed: BigNumberish; value: BigNumberish },
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber },
      [BigNumber, BigNumber, BigNumber] & {
        count: BigNumber;
        length: BigNumber;
        dot: BigNumber;
      }
    ] & {
      seed: [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber };
      props: [BigNumber, BigNumber, BigNumber] & {
        count: BigNumber;
        length: BigNumber;
        dot: BigNumber;
      };
    }
  >;

  generateSVGPart(
    _assetId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { svgPart: string; tag: string }>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getProviderInfo(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & { key: string; name: string; provider: string }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  processPayout(
    _assetId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  receiver(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHelper(
    _svgHelper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReceiver(
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    generatePath(
      _seed: { seed: BigNumberish; value: BigNumberish },
      _props: { count: BigNumberish; length: BigNumberish; dot: BigNumberish },
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber },
        string
      ] & {
        seed: [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber };
        svgPart: string;
      }
    >;

    generateProps(
      _seed: { seed: BigNumberish; value: BigNumberish },
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber },
        [BigNumber, BigNumber, BigNumber] & {
          count: BigNumber;
          length: BigNumber;
          dot: BigNumber;
        }
      ] & {
        seed: [BigNumber, BigNumber] & { seed: BigNumber; value: BigNumber };
        props: [BigNumber, BigNumber, BigNumber] & {
          count: BigNumber;
          length: BigNumber;
          dot: BigNumber;
        };
      }
    >;

    generateSVGPart(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { svgPart: string; tag: string }>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getProviderInfo(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & { key: string; name: string; provider: string }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    processPayout(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    receiver(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setHelper(_svgHelper: string, overrides?: CallOverrides): Promise<void>;

    setReceiver(_receiver: string, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Payout(string,uint256,address,uint256)"(
      providerKey?: null,
      assetId?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber],
      { providerKey: string; assetId: BigNumber; to: string; amount: BigNumber }
    >;

    Payout(
      providerKey?: null,
      assetId?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber],
      { providerKey: string; assetId: BigNumber; to: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    generatePath(
      _seed: { seed: BigNumberish; value: BigNumberish },
      _props: { count: BigNumberish; length: BigNumberish; dot: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateProps(
      _seed: { seed: BigNumberish; value: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateSVGPart(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getProviderInfo(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processPayout(
      _assetId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    receiver(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHelper(
      _svgHelper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReceiver(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    generatePath(
      _seed: { seed: BigNumberish; value: BigNumberish },
      _props: { count: BigNumberish; length: BigNumberish; dot: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateProps(
      _seed: { seed: BigNumberish; value: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateSVGPart(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProviderInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processPayout(
      _assetId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHelper(
      _svgHelper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReceiver(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IAssetStoreInterface extends ethers.utils.Interface {
  functions: {
    "generateSVG(uint256)": FunctionFragment;
    "generateSVGPart(uint256,string)": FunctionFragment;
    "getAssetCountInCategory(string,string)": FunctionFragment;
    "getAssetIdInCategory(string,string,uint32)": FunctionFragment;
    "getAssetIdWithName(string,string,string)": FunctionFragment;
    "getAttributes(uint256)": FunctionFragment;
    "getCategoryCount(string)": FunctionFragment;
    "getCategoryNameAtIndex(string,uint32)": FunctionFragment;
    "getGroupCount()": FunctionFragment;
    "getGroupNameAtIndex(uint32)": FunctionFragment;
    "getStringValidator()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "generateSVG",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generateSVGPart",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetCountInCategory",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetIdInCategory",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetIdWithName",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAttributes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCategoryCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCategoryNameAtIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGroupCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGroupNameAtIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStringValidator",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "generateSVG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateSVGPart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetCountInCategory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetIdInCategory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetIdWithName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAttributes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCategoryCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCategoryNameAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGroupCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGroupNameAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStringValidator",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAssetStore extends BaseContract {
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

  interface: IAssetStoreInterface;

  functions: {
    generateSVG(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    generateSVGPart(
      _assetId: BigNumberish,
      _tag: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAssetCountInCategory(
      _group: string,
      _category: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getAssetIdInCategory(
      _group: string,
      _category: string,
      _assetIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAssetIdWithName(
      _group: string,
      _category: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAttributes(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          number,
          number
        ] & {
          group: string;
          category: string;
          name: string;
          tag: string;
          minter: string;
          soulbound: string;
          metadata: string;
          width: number;
          height: number;
        }
      ]
    >;

    getCategoryCount(
      _group: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getCategoryNameAtIndex(
      _group: string,
      _categoryIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGroupCount(overrides?: CallOverrides): Promise<[number]>;

    getGroupNameAtIndex(
      _groupIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getStringValidator(overrides?: CallOverrides): Promise<[string]>;
  };

  generateSVG(
    _assetId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  generateSVGPart(
    _assetId: BigNumberish,
    _tag: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getAssetCountInCategory(
    _group: string,
    _category: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getAssetIdInCategory(
    _group: string,
    _category: string,
    _assetIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAssetIdWithName(
    _group: string,
    _category: string,
    _name: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAttributes(
    _assetId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, string, number, number] & {
      group: string;
      category: string;
      name: string;
      tag: string;
      minter: string;
      soulbound: string;
      metadata: string;
      width: number;
      height: number;
    }
  >;

  getCategoryCount(_group: string, overrides?: CallOverrides): Promise<number>;

  getCategoryNameAtIndex(
    _group: string,
    _categoryIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getGroupCount(overrides?: CallOverrides): Promise<number>;

  getGroupNameAtIndex(
    _groupIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getStringValidator(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    generateSVG(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    generateSVGPart(
      _assetId: BigNumberish,
      _tag: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getAssetCountInCategory(
      _group: string,
      _category: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getAssetIdInCategory(
      _group: string,
      _category: string,
      _assetIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetIdWithName(
      _group: string,
      _category: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAttributes(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        number,
        number
      ] & {
        group: string;
        category: string;
        name: string;
        tag: string;
        minter: string;
        soulbound: string;
        metadata: string;
        width: number;
        height: number;
      }
    >;

    getCategoryCount(
      _group: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getCategoryNameAtIndex(
      _group: string,
      _categoryIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getGroupCount(overrides?: CallOverrides): Promise<number>;

    getGroupNameAtIndex(
      _groupIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getStringValidator(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    generateSVG(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateSVGPart(
      _assetId: BigNumberish,
      _tag: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetCountInCategory(
      _group: string,
      _category: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetIdInCategory(
      _group: string,
      _category: string,
      _assetIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetIdWithName(
      _group: string,
      _category: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAttributes(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCategoryCount(
      _group: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCategoryNameAtIndex(
      _group: string,
      _categoryIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGroupCount(overrides?: CallOverrides): Promise<BigNumber>;

    getGroupNameAtIndex(
      _groupIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStringValidator(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    generateSVG(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateSVGPart(
      _assetId: BigNumberish,
      _tag: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetCountInCategory(
      _group: string,
      _category: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetIdInCategory(
      _group: string,
      _category: string,
      _assetIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetIdWithName(
      _group: string,
      _category: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAttributes(
      _assetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCategoryCount(
      _group: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCategoryNameAtIndex(
      _group: string,
      _categoryIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGroupCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGroupNameAtIndex(
      _groupIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStringValidator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

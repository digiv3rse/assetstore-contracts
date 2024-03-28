/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SVGPathDecoder4,
  SVGPathDecoder4Interface,
} from "../SVGPathDecoder4";

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
  "0x608060405234801561001057600080fd5b50610ae4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c25ddce014610030575b600080fd5b61004361003e366004610712565b610059565b6040516100509190610867565b60405180910390f35b606060008060038451600261006e9190610926565b61007891906108cf565b905060008161ffff1667ffffffffffffffff81111561009957610099610a98565b6040519080825280602002602001820160405280156100cc57816020015b60608152602001906001900390816100b75790505b509050600092505b8161ffff168361ffff16101561037d5760006100f16002856108cf565b6100fc906003610926565b905060008061010c6002876109ff565b61ffff1661016f57878361ffff168151811061012a5761012a610a82565b016020015160f81c915060108861014285600161089a565b61ffff168151811061015657610156610a82565b0160200151610168919060f81c610a34565b90506101d0565b8761017b84600261089a565b61ffff168151811061018f5761018f610a82565b016020015160f81c91506010886101a785600161089a565b61ffff16815181106101bb576101bb610a82565b01602001516101cd919060f81c610904565b90505b60ff811661027b5760418260ff16101580156101f05750605a8260ff1611155b8061020e575060618260ff161015801561020e5750607a8260ff1611155b15610276576040517fff0000000000000000000000000000000000000000000000000000000000000060f884901b166020820152602101604051602081830303815290604052848761ffff168151811061026a5761026a610a82565b60200260200101819052505b610367565b60006101008360ff168360ff166101006102959190610926565b61029f919061089a565b6102a9919061096f565b90506104008161ffff1610610315576102d06102c76104008361096f565b61ffff166103bc565b6040516020016102e091906107f2565b604051602081830303815290604052858861ffff168151811061030557610305610a82565b6020026020010181905250610365565b6103246102c78261040061096f565b6040516020016103349190610817565b604051602081830303815290604052858861ffff168151811061035957610359610a82565b60200260200101819052505b505b5050508280610375906109c2565b9350506100d4565b6001815111156103975761039081610466565b905061037d565b806000815181106103aa576103aa610a82565b60200260200101519350505050919050565b606060006103c98361062f565b600101905060008167ffffffffffffffff8111156103e9576103e9610a98565b6040519080825280601f01601f191660200182016040528015610413576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846104595761045e565b61041d565b509392505050565b606060006002835161047891906108f0565b905060006002845161048a9190610a20565b6001149050606081156104f5576104a28360016108b7565b67ffffffffffffffff8111156104ba576104ba610a98565b6040519080825280602002602001820160405280156104ed57816020015b60608152602001906001900390816104d85790505b509050610545565b8267ffffffffffffffff81111561050e5761050e610a98565b60405190808252806020026020018201604052801561054157816020015b606081526020019060019003908161052c5790505b5090505b60005b838110156105de578561055c826002610950565b8151811061056c5761056c610a82565b602002602001015186828151811061058657610586610a82565b602002602001015160405160200161059f9291906107c3565b6040516020818303038152906040528282815181106105c0576105c0610a82565b602002602001018190525080806105d6906109e4565b915050610548565b821561062657856105f0856002610950565b8151811061060057610600610a82565b602002602001015182858151811061061a5761061a610a82565b60200260200101819052505b50949350505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610678577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106106a4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106106c257662386f26fc10000830492506010015b6305f5e10083106106da576305f5e100830492506008015b61271083106106ee57612710830492506004015b60648310610700576064830492506002015b600a831061070c576001015b92915050565b60006020828403121561072457600080fd5b813567ffffffffffffffff8082111561073c57600080fd5b818401915084601f83011261075057600080fd5b81358181111561076257610762610a98565b604051601f8201601f19908116603f0116810190838211818310171561078a5761078a610a98565b816040528281528760208487010111156107a357600080fd5b826020860160208301376000928101602001929092525095945050505050565b600083516107d5818460208801610992565b8351908301906107e9818360208801610992565b01949350505050565b60008251610804818460208701610992565b600160fd1b920191825250600101919050565b7f2d0000000000000000000000000000000000000000000000000000000000000081526000825161084f816001850160208701610992565b600160fd1b6001939091019283015250600201919050565b6020815260008251806020840152610886816040850160208701610992565b601f01601f19169190910160400192915050565b600061ffff8083168185168083038211156107e9576107e9610a56565b600082198211156108ca576108ca610a56565b500190565b600061ffff808416806108e4576108e4610a6c565b92169190910492915050565b6000826108ff576108ff610a6c565b500490565b600060ff83168061091757610917610a6c565b8060ff84160491505092915050565b600061ffff8083168185168183048111821515161561094757610947610a56565b02949350505050565b600081600019048311821515161561096a5761096a610a56565b500290565b600061ffff8381169083168181101561098a5761098a610a56565b039392505050565b60005b838110156109ad578181015183820152602001610995565b838111156109bc576000848401525b50505050565b600061ffff808316818114156109da576109da610a56565b6001019392505050565b60006000198214156109f8576109f8610a56565b5060010190565b600061ffff80841680610a1457610a14610a6c565b92169190910692915050565b600082610a2f57610a2f610a6c565b500690565b600060ff831680610a4757610a47610a6c565b8060ff84160691505092915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220bfb10dfffd7697d8e87f7aca899e694d193785b8c0a4985b6b2e351893ca850b64736f6c63430008060033";

export class SVGPathDecoder4__factory extends ContractFactory {
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
  ): Promise<SVGPathDecoder4> {
    return super.deploy(overrides || {}) as Promise<SVGPathDecoder4>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SVGPathDecoder4 {
    return super.attach(address) as SVGPathDecoder4;
  }
  connect(signer: Signer): SVGPathDecoder4__factory {
    return super.connect(signer) as SVGPathDecoder4__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SVGPathDecoder4Interface {
    return new utils.Interface(_abi) as SVGPathDecoder4Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SVGPathDecoder4 {
    return new Contract(address, _abi, signerOrProvider) as SVGPathDecoder4;
  }
}
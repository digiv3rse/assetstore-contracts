/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SplatterArtProvider,
  SplatterArtProviderInterface,
} from "../SplatterArtProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SplatterProvider",
        name: "_splatter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "providerKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Payout",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
    ],
    name: "generateSVGPart",
    outputs: [
      {
        internalType: "string",
        name: "svgPart",
        type: "string",
      },
      {
        internalType: "string",
        name: "tag",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProviderInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "key",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "contract IAssetProvider",
            name: "provider",
            type: "address",
          },
        ],
        internalType: "struct IAssetProvider.ProviderInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
    ],
    name: "processPayout",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "splatter",
    outputs: [
      {
        internalType: "contract SplatterProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620020a1380380620020a18339810160408190526200003491620000b5565b6200003f3362000065565b600180546001600160a01b0319166001600160a01b0392909216919091179055620000e7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000c857600080fd5b81516001600160a01b0381168114620000e057600080fd5b9392505050565b611faa80620000f76000396000f3fe6080604052600436106100b15760003560e01c80638c40188e11610069578063ce98d4f51161004e578063ce98d4f514610223578063e3f24f0214610243578063f2fde38b1461027157600080fd5b80638c40188e146101635780638da5cb5b1461020557600080fd5b8063715018a61161009a578063715018a614610107578063893d20e81461011e57806389ee68bf1461015057600080fd5b806301ffc9a7146100b657806318160ddd146100eb575b600080fd5b3480156100c257600080fd5b506100d66100d13660046118e9565b610291565b60405190151581526020015b60405180910390f35b3480156100f757600080fd5b50604051600081526020016100e2565b34801561011357600080fd5b5061011c61032a565b005b34801561012a57600080fd5b506000546001600160a01b03165b6040516001600160a01b0390911681526020016100e2565b61011c61015e366004611a6d565b61033e565b34801561016f57600080fd5b506101f860408051606080820183528082526020820152600091810191909152506040805160a081018252600760608201908152661cdc1b1d185c9d60ca1b6080830152815281518083018352600c81527f53706c6174746572204172740000000000000000000000000000000000000000602082810191909152820152309181019190915290565b6040516100e29190611deb565b34801561021157600080fd5b506000546001600160a01b0316610138565b34801561022f57600080fd5b50600154610138906001600160a01b031681565b34801561024f57600080fd5b5061026361025e366004611a6d565b6103b8565b6040516100e2929190611dbd565b34801561027d57600080fd5b5061011c61028c3660046118b9565b61082c565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7777120600000000000000000000000000000000000000000000000000000000148061032457507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b6103326108c1565b61033c600061091b565b565b6001546040517f89ee68bf000000000000000000000000000000000000000000000000000000008152600481018390526001600160a01b03909116906389ee68bf90602401600060405180830381600087803b15801561039d57600080fd5b505af11580156103b1573d6000803e3d6000fd5b5050505050565b606080600060405180604001604052806004866103d59190611e73565b81526020016000815250905061040560405180606001604052806000815260200160008152602001600081525090565b6001546040517f094499f60000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063094499f69061044e908590600401611e44565b60a06040518083038186803b15801561046657600080fd5b505afa15801561047a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049e91906119ec565b909250905060606104ae83610983565b90935090506060806104c1600489611f08565b6105b45760015460408051633ff1870760e01b81528751600482015260208089015160248301528751604483015287015160648201529086015160848201526001600160a01b0390911690633ff187079060a40160006040518083038186803b15801561052d57600080fd5b505afa158015610541573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610569919081019061192b565b8093508196505050818360008151811061058557610585611f48565b602002602001015160405160200161059e929190611d3a565b60405160208183030381529060405290506107b3565b60405180604001604052808981526020016000815250945060005b83516105dc90600a611e87565b8110156107b15760015460408051633ff1870760e01b8152885160048201526020808a015160248301528851604483015288015160648201529087015160848201526001600160a01b0390911690633ff187079060a40160006040518083038186803b15801561064b57600080fd5b505afa15801561065f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610687919081019061192b565b909650925081838561069a600a85611e73565b815181106106aa576106aa611f48565b60200260200101516040516020016106c493929190611bf1565b60408051601f19818403018152919052915060006106e4876101906115e5565b90975090506106f4606482611e5b565b9050600060026103e861070984610400611e87565b6107139190611e73565b61071f90610400611ea6565b6107299190611e73565b905060008061073a8a846064611673565b909a50915061074b8a846064611673565b909a5090508561075a836116de565b610763836116de565b61076c876116de565b610775886116de565b604051602001610789959493929190611ab2565b60405160208183030381529060405295505050505080806107a990611eed565b9150506105cf565b505b604051806040016040528060078152602001661cdc1b1d185c9d60ca1b8152506107dc896116de565b6040516020016107ed929190611c60565b60405160208183030381529060405295508581604051602001610811929190611c8f565b60405160208183030381529060405296505050505050915091565b6108346108c1565b6001600160a01b0381166108b55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6108be8161091b565b50565b6000546001600160a01b0316331461033c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ac565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201825260008082526020808301829052835161024081018552600661020082018181527f45394234444200000000000000000000000000000000000000000000000000006102208401526101608301908152865180880188528281527f363136304230000000000000000000000000000000000000000000000000000081860152610180840152865180880188528281527f4542373741360000000000000000000000000000000000000000000000000000818601526101a0840152865180880188528281527f3345333438360000000000000000000000000000000000000000000000000000818601526101c0840152865180880188528281527f4532334438300000000000000000000000000000000000000000000000000000818601526101e08401528252855160e0808201885260a08281018481527f464644453931000000000000000000000000000000000000000000000000000060c0858101919091529084528951808b018b528581527f464639443735000000000000000000000000000000000000000000000000000081890152848801528951808b018b528581527f444536383638000000000000000000000000000000000000000000000000000081890152848b01528951808b018b528581527f3439343538300000000000000000000000000000000000000000000000000000818901526060808601919091528a51808c018c528681527f4244413846460000000000000000000000000000000000000000000000000000818a0152608080870191909152878901959095528a518085018c528084018781527f45444339414600000000000000000000000000000000000000000000000000008285015281528b51808d018d528781527f4130453242440000000000000000000000000000000000000000000000000000818b0152818a01528b51808d018d528781527f3533434243460000000000000000000000000000000000000000000000000000818b0152818d01528b51808d018d528781527f3044413342410000000000000000000000000000000000000000000000000000818b0152818301528b51808d018d528781527f3034364539340000000000000000000000000000000000000000000000000000818b015281870152878c01528a518085018c528084018781527f46464538383900000000000000000000000000000000000000000000000000008285015281528b51808d018d528781527f3838453743350000000000000000000000000000000000000000000000000000818b0152818a01528b51808d018d528781527f3533424439390000000000000000000000000000000000000000000000000000818b0152818d01528b51808d018d528781527f3031373637440000000000000000000000000000000000000000000000000000818b0152818301528b51808d018d528781527f3033344634440000000000000000000000000000000000000000000000000000818b015281870152818801528a518085018c528084018781527f44374639463800000000000000000000000000000000000000000000000000008285015281528b51808d018d528781527f4646464645410000000000000000000000000000000000000000000000000000818b0152818a01528b51808d018d528781527f4646463044350000000000000000000000000000000000000000000000000000818b0152818d01528b51808d018d528781527f4642453045300000000000000000000000000000000000000000000000000000818b0152818301528b51808d018d528781527f4535443445460000000000000000000000000000000000000000000000000000818b015281870152858801528a518085018c528084018781527f38303138313800000000000000000000000000000000000000000000000000008285015281528b51808d018d528781527f3344304330320000000000000000000000000000000000000000000000000000818b0152818a01528b51808d018d528781527f3633313933340000000000000000000000000000000000000000000000000000818b0152818d01528b51808d018d528781527f3739323234440000000000000000000000000000000000000000000000000000818b0152818301528b51808d018d528781527f3638323836300000000000000000000000000000000000000000000000000000818b015281870152838801528a518085018c528084018781527f42333631374200000000000000000000000000000000000000000000000000008285015281528b51808d018d528781527f3439344337440000000000000000000000000000000000000000000000000000818b0152818a01528b51808d018d528781527f4430434541430000000000000000000000000000000000000000000000000000818b0152818d01528b51808d018d528781527f3942423739370000000000000000000000000000000000000000000000000000818b0152818301528b51808d018d528781527f3543394139350000000000000000000000000000000000000000000000000000818b015281870152828801528a518085018c528084018781527f31353946363700000000000000000000000000000000000000000000000000008285015281528b51808d018d528781527f3636434139360000000000000000000000000000000000000000000000000000818b0152818a01528b51808d018d528781527f4542464646340000000000000000000000000000000000000000000000000000818b0152818d01528b51808d018d528781527f4639424442330000000000000000000000000000000000000000000000000000818b0152818301528b51808d018d528781527f4633393338350000000000000000000000000000000000000000000000000000818b015281870152848801528a518085018c528084018781527f46394343364300000000000000000000000000000000000000000000000000008285015281528b51808d018d528781527f4644394139430000000000000000000000000000000000000000000000000000818b0152818a01528b51808d018d528781527f4645453443360000000000000000000000000000000000000000000000000000818b0152818d01528b51808d018d528781527f3944443036370000000000000000000000000000000000000000000000000000818b0152818301528b51808d018d528781527f3344374639370000000000000000000000000000000000000000000000000000818b0152818701526101008801528a518085018c528084018781527f36323741413300000000000000000000000000000000000000000000000000008285015281528b51808d018d528781527f4438443043350000000000000000000000000000000000000000000000000000818b0152818a01528b51808d018d528781527f4441414534360000000000000000000000000000000000000000000000000000818b0152818d01528b51808d018d528781527f3741414239430000000000000000000000000000000000000000000000000000818b0152818301528b51808d018d528781527f3946344634430000000000000000000000000000000000000000000000000000818b0152818701526101208801528a519384018b529183018581527f35413236314200000000000000000000000000000000000000000000000000009184019190915282528851808a018a528481527f433831313235000000000000000000000000000000000000000000000000000081880152828701528851808a018a528481527f463135423441000000000000000000000000000000000000000000000000000081880152828a01528851808a018a528481527f464641423633000000000000000000000000000000000000000000000000000081880152828201528851808a019099529288527f4641444236410000000000000000000000000000000000000000000000000000948801949094528301959095526101408101919091529192919061151185600b6115e5565b60408051600580825260c08201909252929650909250816020015b606081526020019060019003908161152c57905050925060006115598451866115e590919063ffffffff16565b909550905060005b60058110156115dc578383600b811061157c5761157c611f48565b6020020151600561158d8484611e5b565b6115979190611f08565b600581106115a7576115a7611f48565b60200201518582815181106115be576115be611f48565b602002602001018190525080806115d490611eed565b915050611561565b50505050915091565b60408051808201909152600080825260208201525081600061160983610100611e87565b826020015110156116435781516040805160208101929092520160408051601f198184030181529190528051602091820120808452908301525b8282602001516116539190611f08565b905082826020018181516116679190611e73565b90525090939092509050565b604080518082019091526000808252602082015260008060646116968587611e87565b6116a09190611e73565b905060006116b8876116b3846002611e87565b6115e5565b9094509050806116c88388611ea6565b6116d29190611e5b565b92505050935093915050565b606060006116eb83611788565b600101905060008167ffffffffffffffff81111561170b5761170b611f5e565b6040519080825280601f01601f191660200182016040528015611735576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461177b57611780565b61173f565b509392505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106117d1577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106117fd576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061181b57662386f26fc10000830492506010015b6305f5e1008310611833576305f5e100830492506008015b612710831061184757612710830492506004015b60648310611859576064830492506002015b600a83106103245760010192915050565b60006040828403121561187c57600080fd5b6040516040810181811067ffffffffffffffff8211171561189f5761189f611f5e565b604052825181526020928301519281019290925250919050565b6000602082840312156118cb57600080fd5b81356001600160a01b03811681146118e257600080fd5b9392505050565b6000602082840312156118fb57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146118e257600080fd5b6000806060838503121561193e57600080fd5b611948848461186a565b9150604083015167ffffffffffffffff8082111561196557600080fd5b818501915085601f83011261197957600080fd5b81518181111561198b5761198b611f5e565b604051601f8201601f19908116603f011681019083821181831017156119b3576119b3611f5e565b816040528281528860208487010111156119cc57600080fd5b6119dd836020830160208801611ebd565b80955050505050509250929050565b60008082840360a0811215611a0057600080fd5b611a0a858561186a565b92506060603f1982011215611a1e57600080fd5b506040516060810181811067ffffffffffffffff82111715611a4257611a42611f5e565b8060405250604084015181526060840151602082015260808401516040820152809150509250929050565b600060208284031215611a7f57600080fd5b5035919050565b60008151808452611a9e816020860160208601611ebd565b601f01601f19169290920160200192915050565b60008651611ac4818460208b01611ebd565b7f22207472616e73666f726d3d227472616e736c617465280000000000000000009083019081528651611afe816017840160208b01611ebd565b7f2c00000000000000000000000000000000000000000000000000000000000000601792909101918201528551611b3c816018840160208a01611ebd565b7f29207363616c6528302e00000000000000000000000000000000000000000000601892909101918201528451611b7a816022840160208901611ebd565b7f2c20302e00000000000000000000000000000000000000000000000000000000602292909101918201528351611bb8816026840160208801611ebd565b7f2922202f3e0a000000000000000000000000000000000000000000000000000060269290910191820152602c01979650505050505050565b60008451611c03818460208901611ebd565b681e3830ba3410321e9160b91b9083019081528451611c29816009840160208901611ebd565b68222066696c6c3d222360b81b600992909101918201528351611c53816012840160208801611ebd565b0160120195945050505050565b60008351611c72818460208801611ebd565b835190830190611c86818360208801611ebd565b01949350505050565b7f3c672069643d2200000000000000000000000000000000000000000000000000815260008351611cc7816007850160208801611ebd565b7f223e0a00000000000000000000000000000000000000000000000000000000006007918401918201528351611d0481600a840160208801611ebd565b7f3c2f673e0a000000000000000000000000000000000000000000000000000000600a9290910191820152600f01949350505050565b681e3830ba3410321e9160b91b815260008351611d5e816009850160208801611ebd565b68222066696c6c3d222360b81b6009918401918201528351611d87816012840160208801611ebd565b7f22202f3e0a00000000000000000000000000000000000000000000000000000060129290910191820152601701949350505050565b604081526000611dd06040830185611a86565b8281036020840152611de28185611a86565b95945050505050565b602081526000825160606020840152611e076080840182611a86565b90506020840151601f19848303016040850152611e248282611a86565b9150506001600160a01b0360408501511660608401528091505092915050565b815181526020808301519082015260408101610324565b60008219821115611e6e57611e6e611f1c565b500190565b600082611e8257611e82611f32565b500490565b6000816000190483118215151615611ea157611ea1611f1c565b500290565b600082821015611eb857611eb8611f1c565b500390565b60005b83811015611ed8578181015183820152602001611ec0565b83811115611ee7576000848401525b50505050565b6000600019821415611f0157611f01611f1c565b5060010190565b600082611f1757611f17611f32565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ef545e6a3d8a63a124540e2aba81b2b01a3a2e2cbf0b021faa26e3a6250e647164736f6c63430008060033";

export class SplatterArtProvider__factory extends ContractFactory {
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
    _splatter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SplatterArtProvider> {
    return super.deploy(
      _splatter,
      overrides || {}
    ) as Promise<SplatterArtProvider>;
  }
  getDeployTransaction(
    _splatter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_splatter, overrides || {});
  }
  attach(address: string): SplatterArtProvider {
    return super.attach(address) as SplatterArtProvider;
  }
  connect(signer: Signer): SplatterArtProvider__factory {
    return super.connect(signer) as SplatterArtProvider__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SplatterArtProviderInterface {
    return new utils.Interface(_abi) as SplatterArtProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SplatterArtProvider {
    return new Contract(address, _abi, signerOrProvider) as SplatterArtProvider;
  }
}

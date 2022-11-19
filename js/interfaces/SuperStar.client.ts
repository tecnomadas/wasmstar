/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.22.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import {
  CosmWasmClient,
  SigningCosmWasmClient,
  ExecuteResult,
} from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import {
  Duration,
  Uint128,
  InstantiateMsg,
  Coin,
  ExecuteMsg,
  HexBinary,
  NoisCallback,
  QueryMsg,
  ArrayOfTicketResult,
  TicketResult,
  Expiration,
  Timestamp,
  Uint64,
  Status,
  Lottery,
} from "./SuperStar.types";
export interface SuperStarReadOnlyInterface {
  contractAddress: string;
  getLottery: ({ id }: { id: number }) => Promise<Lottery>;
  getCurrentLottery: () => Promise<Lottery>;
  checkWinner: ({
    addr,
    lotteryId,
  }: {
    addr: string;
    lotteryId: number;
  }) => Promise<ArrayOfTicketResult>;
}
export class SuperStarQueryClient implements SuperStarReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.getLottery = this.getLottery.bind(this);
    this.getCurrentLottery = this.getCurrentLottery.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  getLottery = async ({ id }: { id: number }): Promise<Lottery> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_lottery: {
        id,
      },
    });
  };
  getCurrentLottery = async (): Promise<Lottery> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_current_lottery: {},
    });
  };
  checkWinner = async ({
    addr,
    lotteryId,
  }: {
    addr: string;
    lotteryId: number;
  }): Promise<ArrayOfTicketResult> => {
    return this.client.queryContractSmart(this.contractAddress, {
      check_winner: {
        addr,
        lottery_id: lotteryId,
      },
    });
  };
}
export interface SuperStarInterface extends SuperStarReadOnlyInterface {
  contractAddress: string;
  sender: string;
  buyTicket: (
    {
      lotteryId,
      tickets,
    }: {
      lotteryId: number;
      tickets: string[];
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  claimLottery: (
    {
      id,
    }: {
      id: number;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  executeLottery: (
    {
      id,
    }: {
      id: number;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  receive: (
    {
      callback,
    }: {
      callback: NoisCallback;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
}
export class SuperStarClient
  extends SuperStarQueryClient
  implements SuperStarInterface
{
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string
  ) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.buyTicket = this.buyTicket.bind(this);
    this.claimLottery = this.claimLottery.bind(this);
    this.executeLottery = this.executeLottery.bind(this);
    this.receive = this.receive.bind(this);
  }

  buyTicket = async (
    {
      lotteryId,
      tickets,
    }: {
      lotteryId: number;
      tickets: string[];
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        buy_ticket: {
          lottery_id: lotteryId,
          tickets,
        },
      },
      fee,
      memo,
      funds
    );
  };
  claimLottery = async (
    {
      id,
    }: {
      id: number;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        claim_lottery: {
          id,
        },
      },
      fee,
      memo,
      funds
    );
  };
  executeLottery = async (
    {
      id,
    }: {
      id: number;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        execute_lottery: {
          id,
        },
      },
      fee,
      memo,
      funds
    );
  };
  receive = async (
    {
      callback,
    }: {
      callback: NoisCallback;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        receive: {
          callback,
        },
      },
      fee,
      memo,
      funds
    );
  };
}
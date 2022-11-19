/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.22.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Duration =
  | {
      height: number;
    }
  | {
      time: number;
    };
export type Uint128 = string;
export interface InstantiateMsg {
  lottery_interval: Duration;
  max_tickets_per_user: number;
  nois_proxy: string;
  percentage_per_match: [number, number, number, number, number, number];
  ticket_price: Coin;
  treasury_fee: Coin;
}

export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg =
  | {
      buy_ticket: {
        lottery_id: number;
        tickets: string[];
      };
    }
  | {
      claim_lottery: {
        id: number;
      };
    }
  | {
      execute_lottery: {
        id: number;
      };
    }
  | {
      receive: {
        callback: NoisCallback;
      };
    };
export type HexBinary = string;
export interface NoisCallback {
  job_id: string;
  randomness: HexBinary;
}
export type QueryMsg =
  | {
      get_lottery: {
        id: number;
      };
    }
  | {
      get_current_lottery: {};
    }
  | {
      check_winner: {
        addr: string;
        lottery_id: number;
      };
    };
export type ArrayOfTicketResult = TicketResult[];
export interface TicketResult {
  matches: number;
  prediction: boolean[];
  ticket_number: string;
}
export type Expiration =
  | {
      at_height: number;
    }
  | {
      at_time: Timestamp;
    }
  | {
      never: {};
    };
export type Timestamp = Uint64;
export type Uint64 = string;
export type Status = "open" | "pending" | "claimable";
export interface Lottery {
  end_time: Expiration;
  id: number;
  prize_per_match?:
    | [Uint128, Uint128, Uint128, Uint128, Uint128, Uint128]
    | null;
  status: Status;
  ticket_price: Coin;
  total_prize: Coin;
  total_tickets: number;
  winner_number?: string | null;
  winners_per_match?: [number, number, number, number, number, number] | null;
}
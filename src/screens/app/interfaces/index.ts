
export interface Row {
    Dates: string;
    TransactionAmount: number;
    CustNo: string;
}

export interface ByMonth {
    month: number;
    reward: number;
}


export interface Reward {
    name: string;
    byMonth: [ByMonth];
    rewardSum: number;
}

export interface OwnProps {
    data: any;
}

export interface OwnState {
    rewardData: object[];
}

export interface Transactions {
    Dates:string;
    TransactionAmount:number;
    CustNo:number;
}

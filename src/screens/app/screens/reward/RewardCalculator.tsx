import * as React from "react";
import {calculateReward, getMonth} from "../../utils/index"
import {OwnProps, Reward, Transactions, OwnState, ByMonth, Row} from "../../interfaces";

export class RewardCalculator extends React.Component <OwnProps, OwnState> {
    public state: OwnState = {
        rewardData: []
    };
    calculateReward = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {data = []} = this.props;
        let reward:number;
        let customerName;
        let transactionMonth:number;
        const rewardData = [];
        const group:any = data.reduce((r:any, a:any) => {
            r[a.CustNo] = [...(r[a.CustNo] || []), a];
            return r;
        }, {});

        for (const x of Object.keys(group)) {
            const result: object[] = [];
            let obj:ByMonth;
            group[x].forEach((transactions:Transactions) => {
                reward = 0;
                transactionMonth = getMonth(transactions.Dates);
                reward = calculateReward(transactions.TransactionAmount);
                customerName = transactions.CustNo;
                const ValueExist = result.filter((o:ByMonth) => o.month === (transactionMonth))
                if (ValueExist.length === 0) {
                    obj = {month: transactionMonth, reward};
                    result.push(obj);
                } else {
                    result.map((element:ByMonth) => {
                        if (element.month === transactionMonth){
                            element.reward += reward;
                        }

                    })
                }
            });
            // @ts-ignore
            const {reward: rewardSum} = result.reduce((a, b) => ({reward: a.reward + b.reward}));
            rewardData.push({byMonth: result, name: customerName, rewardSum})
        }
        this.setState({
            rewardData
        });
    }

    render() {
        const {data = []} = this.props;
        const {rewardData = []} = this.state;
        return <>
            <h2>Reward Program</h2>
            <table>
                <tr style={{background: "#4CAF50", color: "white"}}>
                    <th>Dates</th>
                    <th>TransactionAmt</th>
                    <th>CustNo</th>
                </tr>
                {data.map((row:Row, key:number) => <tr key={`key_${key}`}>
                    <td>{row.Dates}</td>
                    <td>{row.CustNo}</td>
                    <td>{row.TransactionAmount}</td>
                </tr>)}
            </table>
            <button onClick={this.calculateReward}>Calculate Reward</button>
            {rewardData.map((reward:Reward) => <>
                <h2>Result for {reward.name}</h2>
                {reward.byMonth.map((obj: ByMonth) => (<h2>FOR MONTH {obj.month} REWARD = {obj.reward}</h2>))}
                <h2>TOTAL {reward.rewardSum}</h2>
                <br/>
            </>)}
        </>
    }
}

export default RewardCalculator;

import * as React from "react";
import RewardCalculator from "./screens/reward/RewardCalculator";

import "./App.css";

const json = [
    {Dates: "1/2/2020", TransactionAmount: 200, CustNo: "Mike"},
    {Dates: "1/2/2020", TransactionAmount: 140, CustNo: "John"},
    {Dates: "2/10/2020", TransactionAmount: 240, CustNo: "Mike"},
    {Dates: "3/10/2020", TransactionAmount: 220, CustNo: "Steve"},
    {Dates: "4/20/2020", TransactionAmount: 180, CustNo: "Steve"},
    {Dates: "2/2/2020", TransactionAmount: 140, CustNo: "John"},
    {Dates: "5/10/2020", TransactionAmount: 250, CustNo: "John"},
    {Dates: "1/22/2020", TransactionAmount: 180, CustNo: "Mike"},
    {Dates: "6/2/2020", TransactionAmount: 150, CustNo: "Steve"},
    {Dates: "4/10/2020", TransactionAmount: 200, CustNo: "Mike"},
    {Dates: "6/20/2020", TransactionAmount: 380, CustNo: "John"},
];


export default () => (
  <div className="App">
      <RewardCalculator data={json}/>
  </div>
);
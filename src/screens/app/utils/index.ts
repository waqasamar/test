export function getMonth(str:string) {
    const d = new Date(str);
    const m = d.getMonth() + 1;
    return m;
}

export function calculateReward(transactionAmount:number) {
    return transactionAmount <= 50
        ? 0
        : transactionAmount > 50 && transactionAmount <= 100
            ? (transactionAmount - 50) * 1
            : (transactionAmount - 50) * 1 + (transactionAmount - 100);
}
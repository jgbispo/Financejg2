import {Card} from "./Card";

const calcResult = (expense: number, income: number): number => {
    return parseFloat((expense - income).toFixed(2))
}

export default function Finance() {

    let income = 223.14, expense = 325.56;
    let result = calcResult(expense, income);

    return (
        <>
            <header className="text-5xl bold uppercase w-full text-center mt-3">
                <p>Finance JG</p>
            </header>
            <div className={"flex flex-row justify-center "}>
                <Card value={expense} title={"Expense"} type={true}/>
                <Card value={income} title={"Income"} type={false}/>
                {result > 0
                    ? <Card value={result} title={"Balance"} type={true}/>
                    : <Card value={result} title={"Balance"} type={false}/>}
            </div>
            <div>
            </div>
        </>
    )
}
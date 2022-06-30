import classNames from "classnames";
import {ArrowCircleDown, ArrowCircleUp, ArrowUp} from "phosphor-react";

interface Card {
    title: string,
    value: number,
    type: boolean,
}

export function Card(props: Card) {
    return (
        <div className={classNames("rounded border border-gray-500 p-6 mt-6 mx-6 max-w-[360px] w-full h-2/3", {
            "bg-red-600": !props.type,
            "bg-green-600": props.type,
        })}>
           <div className={"flex flex-col gap-2"}>
               <div className={"flex flex-row justify-between"}>
                   <p className={"bold text-2xl"}>{props.title}:</p>
                   {props.type ? <ArrowCircleDown size={36}/> : <ArrowCircleUp size={36}/>}
               </div>
               <div className={"text-4xl"}>
                   {props.type ? <strong>R$ {props.value}</strong> : <strong>- R$ {props.value}</strong>}
               </div>
           </div>
        </div>
    )
}
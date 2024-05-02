import { useContext } from "react"
import { counterContext } from "../context/context"

export default function Component1(){
    const counter = useContext(counterContext);
    return(
        <div>{counter.count}</div>
    )
}
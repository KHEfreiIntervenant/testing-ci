"use client"
import { useState } from "react";

export default function Counter() {

    // add counter on click
    const [count, setCount] = useState(0);
    return <div>
    <h1 className="text-2xl font-bold">Counter</h1>
    <p className="text-2xl font-bold">{count}</p>
    <div className="flex gap-2">
        <button id="augment" className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>+</button>
        <button id="diminuer" className="bg-red-500 text-white p-2 rounded-md" onClick={() => setCount(count - 1)}>-</button>
    </div>
  </div>
}
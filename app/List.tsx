"use client"

import { useState } from "react";

export default function List() {
    const [list, setList] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");
    return <div className="flex flex-col gap-2">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button id="add" className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setList([...list, "new item"])}>Add</button>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>;
}
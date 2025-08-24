import { useEffect, useState } from "react"

export default function Get() {
    const [value, setValue] = useState("");

    useEffect(() => {
        fetch("/api/get")
        .then(res => res.text())
        .then(res => setValue(res))
    }, [])


    return (
        <h2>Hi from {value}</h2>
    )
}
import { useState } from "react"

export default function AddUser() {
    const [value, setValue] = useState("");
    const [data, setData] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch("api/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: value})
        })
        .then(res => res.text())
        .then(res => setData(res))
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="add-user">Добавить полльзователя</label>
            <input type="text" id="add-user" name="add-user" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">Добавить</button>
            <p>{data}</p>
        </form>
    )
}
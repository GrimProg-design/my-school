import { useState } from "react";

export default function User() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [yes, setYes] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: value }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setYes(true);
      });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="user">Введите имя:</label>
        <br />
        <input
          type="text"
          id="user"
          name="user"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Поиск</button>
        <div>
          {yes && (
            <ul>
              {data.map((user) => (
                <li key={user._id || user.name}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </form>
  );
}

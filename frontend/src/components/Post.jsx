import { useState } from "react";

export default function Post() {
  const [num, setNum] = useState("еще не пришли");
  const [value, setValue] = useState()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num: value }),
    })
      .then((res) => res.text())
      .then((res) => setNum(res));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Простой калькулятор чисел на 2</h3>
      <label htmlFor="calc-inp">
        Запиши число оно отпрвить на сервер и пришлет результат
      </label>
      <br />
      <input id="calc-inp" name="num" type="number" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">Отправить</button>
      <p>Ответ от сервера: {num}</p>
    </form>
  );
}

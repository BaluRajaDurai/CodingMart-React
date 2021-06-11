import { useState } from "react";
import "./styles.css";

const initialList = [
  {
    name: "Balu",
    email: "",
    count: 1
  },
  {
    name: "Raja",
    email: "",
    count: 2
  }
];

export default function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleAdd(event) {
    const newList = list.concat({ name, email, count });
    setList(newList);
  }
  function handleAttendance(event) {
    let newList = list.filter((item) => item.name !== name);
    let tempEmp = list.fill((item) => item.name === name);
    newList.push(tempEmp.count + 1);
  }
  return (
    <div className="App">
      <h1>Attendance Management System</h1>
      <div className="sub">
        <h3>Employee List</h3>
        <label>
          Employee Name
          <input
            className="a"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <pre></pre>
        <label>
          Email
          <input
            className="b"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <pre></pre>
        <div>
          <button type="button" onClick={handleAdd}>
            Save
          </button>
        </div>
      </div>
      <pre></pre>
      <div className="sub">
        <h3>Attendance</h3>
        <label>
          Employee Name
          <input
            className="a"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <pre></pre>
        <label>
          Date
          <input
            className="b"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <pre></pre>
        <label>
          Attendance
          <select>
            <option value="present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </label>
        <pre></pre>
        <div>
          <button type="button" onClick={handleAttendance}>
            Save
          </button>
        </div>
      </div>
      <pre></pre>
      <table style={{ width: "50%" }}>
        <tr>
          <th>Employee Name</th>
          <th>Present Count</th>
        </tr>
        {list.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.count ? item.count : 0}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

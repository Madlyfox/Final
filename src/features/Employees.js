import Navbar from "../components/Navbar";
import * as React from "react";
import { useTable } from "react-table";
import "../sass/list.scss";
import "../sass/modal.scss";

function Employees() {
  const [users, setUsers] = React.useState(() => {
    const saved = localStorage.getItem("users");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const columns = React.useMemo(
    () => [
      {
        Header: "FirstName",
        accessor: "firstname",
      },
      {
        Header: "LastName",
        accessor: "lastname",
      },
      {
        Header: "Start Date",
        accessor: "startdate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Birth Date",
        accessor: "birthdate",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipcode",
      },
    ],
    []
  );

  const data = users;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const table = (
    <div className="table">
      <div className="table_control">
        <p>
          Showing{" "}
          <select name="elements" id="elements">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </p>
        <div className="search">
          <label htmlFor="Search">Search : </label>
          <input type="text" name="Search" />
        </div>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const content = (
    <div className="container">
      <Navbar />
      <main>
        <div className="header">
          <h1>Current Employees</h1>
        </div>
        <div className="table">{table}</div>
      </main>
    </div>
  );

  return content;
}

export default Employees;

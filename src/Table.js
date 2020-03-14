// This is for a table

import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import 'bootstrap/dist/css/bootstrap.css'

export default function Table({ columns, data }) {
  // Step 1: Create a state const
  const [filterInput, setFilterInput,] = useState("");

 // Step 2: Use the useTable Hook to send the columns and data to build the table
 const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups if your table have groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function need to called for each row before getting the row props)
    setFilter
  } = useTable({columns, data},
    useFilters, // Adding the useFilters Hook to the table
    useSortBy // This plugin Hook will help to sort our table columns
  );

    // Step 3: Update the state when input changes
    const handleFilterChange = e => {
      const value = e.target.value || undefined;
      setFilter("name.first", value);
      setFilterInput(value);
    };



  /* 
    Step 4: Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <>
    <input
      value={filterInput}
      onChange={handleFilterChange}
      placeholder={"Search name"}
    />
    <table {...getTableProps()} className="table table-striped">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}                   
              className={
                column.isSorted
                  ? column.isSortedDesc
                    ? "sort-desc"
                    : "sort-asc"
                  : ""
              }
              >
              {column.render("Header")}  
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
  );
}
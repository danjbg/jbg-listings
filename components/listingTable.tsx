import React from 'react';
import { useTable, Column } from 'react-table';

interface Data {
  col1: string;
  col2: string;
  col3: string;
}

const data: Data[] = [
  { col1: 'Row 1 Col 1', col2: 'Row 1 Col 2', col3: 'Row 1 Col 3' },
  { col1: 'Row 2 Col 1', col2: 'Row 2 Col 2', col3: 'Row 2 Col 3' },
  // Add more rows as needed
];

const columns: Column<Data>[] = [
  { Header: 'Column 1', accessor: 'col1' },
  { Header: 'Column 2', accessor: 'col2' },
  { Header: 'Column 3', accessor: 'col3' },
];

const ListingTable: React.FC = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'papayawhip',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListingTable;

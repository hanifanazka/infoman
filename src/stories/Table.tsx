import React, { useEffect, useState } from "react";
import { ColumnDef, getCoreRowModel, useReactTable, flexRender, RowSelectionState } from "@tanstack/react-table";
import { Checkbox } from "./Checkbox";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowSelectionChange?: (rowSelection: T[]) => void;
}

export function Table<T>({
  data,
  columns,
  onRowSelectionChange,
}: TableProps<T>) {
  onRowSelectionChange = console.log;

  columns = [{
    id: 'select',
    header: ({ table }) => (
      <div className="checkbox-wrapper">
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="checkbox-wrapper">
        <Checkbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  }, ...columns];

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data: data,
    columns: columns,
    state: { rowSelection },
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: (rowSelection) => {
      setRowSelection(rowSelection);
    },
  });

  useEffect(() => {
    onRowSelectionChange?.(table.getSelectedRowModel().flatRows.map(r => r.original));
  }, [rowSelection, onRowSelectionChange, table]);

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        div {
          border-radius: 6px;
          overflow: hidden;
          font-family: Inter;
          font-size: 14px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        thead {
          background: #F0F4F8; 
          text-align: left;
          font-weight: 600;
        }
        tbody { background: #FBFCFE; }
        div, tbody tr {
          border: solid 1px rgba(99 107 116 / 0.2);
        }
        div tbody tr {
            border-right: none;
            border-bottom: none;
            border-left: none;
        }
        th { padding: 12px 6px; }
        td { padding: 4px 8px; }
        :global(.checkbox-wrapper) {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

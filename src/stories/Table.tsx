import React from "react";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import TablePrimitive from "./TablePrimitive";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export function Table<T>({
  data,
  columns,
}: TableProps<T>) {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <TablePrimitive
        table={table}
      />
      <style jsx>{`
        div {
          border-radius: 6px;
          overflow: hidden;
          font-family: Inter;
          font-size: 14px;
        }
        :global(table) {
          border-collapse: collapse;
          width: 100%;
        }
        :global(thead) {
          background: #F0F4F8; 
          text-align: left;
          font-weight: 600;
        }
        :global(tbody) { background: #FBFCFE; }
        div, :global(tbody) :global(tr) {
          border: solid 1px rgba(99 107 116 / 0.2);

          &:global(tbody) :global(tr) {
            border-right: none;
            border-bottom: none;
            border-left: none;
          }
        }
        :global(th) { padding: 12px 6px; }
        :global(td) { padding: 4px 8px; }
      `}</style>
    </div>
  );
}

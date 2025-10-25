import React from "react";
import { getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import TablePrimitive from "./TablePrimitive";

const columns = [
  { header: "colA", accessorKey: "colA" },
  { header: "colB", accessorKey: "colB" },
  { header: "colC", accessorKey: "colC" },
];

type Cols = { colA: number, colB: number, colC: number };
const cols: Cols[] = [];

Array(20).fill(0).forEach((_, i) => {
  cols.push({ colA: i, colB: i, colC: i })
});

export function Table() {
  const table = useReactTable({
    data: cols,
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

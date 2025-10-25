import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Table } from './Table';

const meta = {
  title: 'Example/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  args: {
    data: cols,
    columns: columns,
  },
};
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Table } from './Table';
import { fn } from 'storybook/test';

const meta = {
  title: 'Component/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const columns = [
  { header: "First Name", accessorKey: "firstName" },
  { header: "Last Name", accessorKey: "lastName" },
  { header: "Age", accessorKey: "age" },
  { header: "Visits", accessorKey: "visits" },
  { header: "status", accessorKey: "status" },
  { header: "Profile Progress", accessorKey: "profileProgress" },
];

type Cols = { colA: number, colB: number, colC: number };
const cols: Cols[] = [];

Array(20).fill(0).forEach((_, i) => {
  cols.push({ colA: i, colB: i, colC: i })
});

const defaultData = [
  {
    "firstName": "Derek",
    "lastName": "Terry",
    "age": 10,
    "visits": 174,
    "status": "complicated",
    "profileProgress": 75
  },
  {
    "firstName": "Alda",
    "lastName": "Bergstrom-Abbott",
    "age": 39,
    "visits": 608,
    "status": "single",
    "profileProgress": 59
  },
  {
    "firstName": "Ofelia",
    "lastName": "Ernser",
    "age": 3,
    "visits": 362,
    "status": "relationship",
    "profileProgress": 75
  },
  {
    "firstName": "Alfonzo",
    "lastName": "Heidenreich-Lesch",
    "age": 24,
    "visits": 805,
    "status": "relationship",
    "profileProgress": 75
  },
  {
    "firstName": "Aubree",
    "lastName": "Harvey",
    "age": 21,
    "visits": 667,
    "status": "single",
    "profileProgress": 10
  },
  {
    "firstName": "Wilber",
    "lastName": "Grant",
    "age": 17,
    "visits": 587,
    "status": "relationship",
    "profileProgress": 74
  },
  {
    "firstName": "Aracely",
    "lastName": "Daugherty",
    "age": 3,
    "visits": 547,
    "status": "single",
    "profileProgress": 29
  },
  {
    "firstName": "Austin",
    "lastName": "Ward",
    "age": 7,
    "visits": 913,
    "status": "complicated",
    "profileProgress": 56
  },
  {
    "firstName": "Leonardo",
    "lastName": "Hessel",
    "age": 17,
    "visits": 937,
    "status": "single",
    "profileProgress": 11
  },
  {
    "firstName": "Jerald",
    "lastName": "Schaefer",
    "age": 29,
    "visits": 609,
    "status": "single",
    "profileProgress": 15
  }
];

export const Default: Story = {
  args: {
    data: defaultData,
    columns: columns,
    onRowSelectionChange: fn(),
  },
};
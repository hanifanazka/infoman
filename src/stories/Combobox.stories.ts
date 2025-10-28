import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Combobox } from './Combobox';

const meta = {
  title: 'Component/Combobox',
  component: Combobox,
  argTypes: {
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

type People = {
  id: number, name: string
}[];

const people: People = [
  { id: 1, name: "Martinus Yanto" },
  { id: 2, name: "Andi Asiyah" },
  { id: 3, name: "Mochamad Rohimah" },
  { id: 4, name: "Basri Suryati" },
  { id: 5, name: "Suhardi Aminah" },
  { id: 6, name: "Ridwan Kosasih" },
  { id: 7, name: "Irfan Telaumbanua" },
  { id: 8, name: "Ir Hamdani" },
  { id: 9, name: "Sofyan Alamsyah" },
  { id: 10, name: "Dadan Sihombing" },
  { id: 11, name: "Feri Ansori" },
  { id: 12, name: "Ujang Kasim" },
  { id: 13, name: "Drs Solihat" },
  { id: 14, name: "Hermanto Wenda" },
  { id: 15, name: "Didik Soleh" },
  { id: 16, name: "Muhammad Yanti" },
  { id: 17, name: "Mas Azis" },
  { id: 18, name: "Suratno Wahyudin" },
  { id: 19, name: "Hendri Wibisono" },
  { id: 20, name: "Junaidi Jaya" },
]

export const Primary: Story = {
  args: {
    data: people,
    accessor: (item) => item.name,
  },
};
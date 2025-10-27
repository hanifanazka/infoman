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
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
]

export const Primary: Story = {
  args: {
    data: people,
    accessor: (item) => item.name,
  },
};
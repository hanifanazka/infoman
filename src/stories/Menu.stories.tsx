import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Menu } from './Menu';

const meta = {
  title: 'Example/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    anchor: { control: 'text' },
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Menu",
    anchor: "bottom end",
    actions: [
      {
        label: "Hi",
        onClick: () => alert("Hi"),
      },
      {
        label: "Loognsggsg",
        onClick: () => alert("Loognsggsg"),
      },
    ]
  },
};
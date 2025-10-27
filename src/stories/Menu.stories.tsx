import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Menu } from './Menu';
import { fn } from 'storybook/test';

const meta = {
  title: 'Component/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
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
        onClick: fn(),
      },
      {
        label: "Loognsggsg",
        onClick: fn(),
      },
    ]
  },
};

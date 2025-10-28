import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Switch } from './Switch';
import { fn } from 'storybook/test';

const meta = {
  title: 'Component/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

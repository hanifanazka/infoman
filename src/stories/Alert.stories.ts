import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Alert } from './Alert';
import { fn } from 'storybook/test';

const meta = {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    severity: { control: "select" },
  },
  args: { onRemove: fn() },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Alert',
    children: "Child content that includes some alert details, like maybe what actually happened."
  },
};
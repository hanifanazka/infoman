import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Alert } from './Alert';

const meta = {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Alert',
    children: "Child content that includes some alert details, like maybe what actually happened."
  },
};
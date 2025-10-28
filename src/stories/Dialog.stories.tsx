import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Dialog } from './Dialog';
import { Button } from './Button';

const meta = {
  title: 'Component/Dialog',
  component: Dialog,
  argTypes: {
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Deactivate account",
    desc: "This will permanently deactivate your account",
    children: (({ close }) =>
      <>
        <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
        <div className="buttons">
          <Button onClick={() => close()} >Cancel</Button>
          <Button onClick={() => close()} >Deactivate</Button>
        </div>
        <style jsx>{`
          .buttons {
            display: flex;
            gap: .5rem;
          }
        `}</style>
      </>
    ),
  },
};
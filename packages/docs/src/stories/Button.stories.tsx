import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@jvmoreirad-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
export default {
  title: 'Forms/Button',
  component: Button,

  args: {
    children: 'Send',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo passo <ArrowRight weight="bold" />
      </>
    ),
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

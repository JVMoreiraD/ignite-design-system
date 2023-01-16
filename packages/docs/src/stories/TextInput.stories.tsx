import { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@jvmoreirad-ignite-ui/react'

export default {
  title: 'Forms/TextInput',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  decorators: [
    (Story) => {
      return (
        <>
          <Box
            as="label"
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '$2',
            }}
          >
            <Text size={'sm'}>Nome De Usuário</Text>

            {Story()}
          </Box>
        </>
      )
    },
  ],
  args: {
    placeholder: 'Type Your Name',
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  decorators: [
    (Story) => {
      return (
        <>
          <Box
            as="label"
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '$2',
            }}
          >
            <Text size={'sm'}>Nome De Usuário</Text>

            {Story()}
          </Box>
        </>
      )
    },
  ],
  args: {
    prefix: 'cal.com/',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    // prefix: 'cal.com/João',
  },
}

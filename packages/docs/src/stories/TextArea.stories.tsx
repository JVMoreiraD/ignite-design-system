import { Meta, StoryObj } from '@storybook/react'
import { Text, Box, TextArea, TextAreaProps } from '@jvmoreirad-ignite-ui/react'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
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
            <Text size={'sm'}>Observations</Text>

            {Story()}
          </Box>
        </>
      )
    },
  ],
  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type Your Observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    // prefix: 'cal.com/João',
  },
}

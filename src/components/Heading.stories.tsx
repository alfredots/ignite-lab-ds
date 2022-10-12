import {Meta, StoryObj} from '@storybook/react'
import {Heading, HeadingProps} from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
    size: 'lg'
  },
  argTypes: {
    size: {
      options: ['lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default:StoryObj<HeadingProps>  = {}

export const XLarge:StoryObj<HeadingProps>  = {
  args: {
    size: 'xl'
  }
}

export const TwoXLarge:StoryObj<HeadingProps>  = {
  args: {
    size: '2xl'
  }
}

export const CustomComponent:StoryObj<HeadingProps>  = {
  args: {
    size: '2xl',
    asChild: true,
    children: (<h1>teste</h1>)
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
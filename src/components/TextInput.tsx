import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={clsx(
        'py-4 px-3 rounded h-12 bg-gray-800 w-full flex items-center focus-within:ring-2 ring-cyan-300'
      )}
    >
      {props.children}
    </div>
  )
}

export interface TextInputIconProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

function TextInputIcon (props:TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400 mr-3'>
      {props.children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

function TextInputInput(props: TextInputInputProps) {
  
  return (
      <input 
        className={clsx(
          'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
        )}
        {...props}
      />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
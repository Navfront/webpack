import { FC, PropsWithChildren } from 'react'

interface TextProps extends PropsWithChildren {
  As?: 'p' | 'span'
  className?: string
}

export const Text: FC<TextProps> = ({
  As = 'span',
  children,
  className = ''
}) => <As className={className}>{children}</As>

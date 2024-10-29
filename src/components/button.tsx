import { Button } from '@chakra-ui/react'
import { ReactElement } from 'react'
export default function baseInput  ({
 className, colorScheme, variant, size, children, rightIcon, leftIcon, isLoading, loadingText, width
}: {
    className?: string
    colorScheme?: string
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled'
    size?: string
    children: React.ReactNode
    rightIcon?: ReactElement
    leftIcon?: ReactElement
    isLoading?: boolean
    loadingText?: string
    width?: string
})  {
  return (
    <Button width={width} size={size} isLoading={isLoading} loadingText={loadingText} rightIcon={rightIcon} leftIcon={leftIcon} className={"my-2 " +className} colorScheme={colorScheme} variant={variant}>
    {children}
  </Button>
  )
}

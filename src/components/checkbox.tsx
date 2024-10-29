import { Checkbox } from '@chakra-ui/react'
export default function baseInput  ({
 className, colorScheme, variant, size, children, width, isChecked, onChange
}: {
    className?: string
    colorScheme?: string
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled'
    size?: string
    children: React.ReactNode
    width?: string
    isChecked?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
})  {
  return (
    <Checkbox width={width} size={size} className={"my-2 " +className} colorScheme={colorScheme} variant={variant} isChecked={isChecked} onChange={onChange}>
    {children}
  </Checkbox>
  )
}

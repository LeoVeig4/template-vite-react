import { Input, FormLabel,FormControl, FormHelperText, FormErrorMessage } from "@chakra-ui/react"

export default function baseInput  ({
  isInvalid, label, errorText, placeholder, type, input, onChange, helperText, isRequired, id, className
}: {
    isInvalid?: boolean
    label?: string
    errorText?: string
    placeholder?: string
    type: 'tel' | 'text' | 'email' | 'password'
    input: string
    helperText?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    isRequired?: boolean
    id: string
    className?: string
})  {
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} className={ 'mb-4 ' + className}>
    <FormLabel>{label}</FormLabel>
    <Input variant='flushed' id={id} type={type} value={input} placeholder={placeholder} onChange={onChange} />
    {!isInvalid ? (
      <FormHelperText>
        {helperText}
      </FormHelperText>
    ) : (
      <FormErrorMessage>`{errorText}`</FormErrorMessage>
    )}
  </FormControl>
  )
}

import { ReactNode } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function CustomCard({ title, children, footer, className }: { title?: string, children: ReactNode, footer?: ReactNode, className?: string }) {
    return (
        <Card className={className}>
            {title && <>
                <CardHeader className='font-bold'>{title}</CardHeader>
                <hr className='mx-2'/>
            </>}
            <CardBody>{children}</CardBody>
            {footer && <>
            <hr className='mx-2'/>
                <CardFooter>{footer}</CardFooter>
            </>}
        </Card>
    )
}
import { ReactNode } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function CustomCard({ title, children, footer }: { title: string, children: ReactNode, footer: ReactNode }) {
    return (
        <Card>
            {title && <CardHeader>{title}</CardHeader>}
            <CardBody>{children}</CardBody>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    )
}
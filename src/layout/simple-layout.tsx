import { ReactNode } from 'react';
import Card from '@/components/card';
export default function SimpleLayout({ component1, component2,  }: { component1: ReactNode, component2: ReactNode}) {
   
    return (<>
        <div className='grid h-lvh grid-cols-2 gap-12 bg-gradient-to-r from-cyan-500 to-blue-500 p-2' >
            <div>{component1}</div>
            <div>
                <Card className="h-full"><div className='flex h-full items-center justify-center'>{component2}</div></Card></div>
        </div>
    </>)
}
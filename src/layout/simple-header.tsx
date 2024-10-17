import { ReactNode } from 'react';
import { SiteHeader } from '@/components/site-header';
export default function SimpleHeader({ children }: { children: ReactNode }) {
    return (<>
        <SiteHeader />
        {children}
    </>)
}
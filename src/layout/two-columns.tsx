import { ReactNode, CSSProperties } from 'react';
export default function TwoColumns({ component1, component2, background = 'img/cofee.jpg' }: { component1: ReactNode, component2: ReactNode, background?: string }) {
    const divStyle: CSSProperties = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
      };
    return (<>
        <div className='grid grid-cols-2 gap-12 p-20' style={divStyle}>
            <div>{component1}</div>
            <div>{component2}</div>
        </div>
    </>)
}
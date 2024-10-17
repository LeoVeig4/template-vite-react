import SimpleHeader from "@/layout/simple-header"

import { Home2 } from '@/routes/roles/lazy'


const routes = [{
    path: '/',
    element: (<><SimpleHeader>
        <Home2/></SimpleHeader></>)
}]

export default routes
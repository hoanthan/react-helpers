import React from 'react'
import { Observable } from 'rxjs'
import { useValue$ } from './hooks'

type Props = {
    children: Observable<any>
    as?: React.ComponentType
}

const Async = React.memo<Props>(({ children, as }) => {
    const value = useValue$(children)
    
    return React.createElement(as || React.Fragment, {
        children: value
    } as any)
})

export default Async
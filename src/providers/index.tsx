import * as React from 'react'
import ThemeStyleProvider from './Theme'

const Providers: React.FC<{children: React.ReactNode}> = ({children}) => 
{
    return (
        <ThemeStyleProvider>
            {children}
        </ThemeStyleProvider>
    )
}

export default Providers

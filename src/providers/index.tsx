import * as React from 'react'
import ThemeStyleProvider from './Theme'
import TMDAProvider from './Movies'

const Providers: React.FC<{children: React.ReactNode}> = ({children}) => 
{
    return (
        <ThemeStyleProvider>
            <TMDAProvider>
            {children}
            </TMDAProvider>
        </ThemeStyleProvider>
    )
}

export default Providers

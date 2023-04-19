import * as React from 'react'
import ThemeStyleProvider from './Theme'
import TMDAProvider from './Movies'
import UserProvider from './Users'

const Providers: React.FC<{children: React.ReactNode}> = ({children}) => 
{
    return (
        <ThemeStyleProvider>
            <UserProvider>     
            <TMDAProvider>
            {children}
            </TMDAProvider>
            </UserProvider>
        </ThemeStyleProvider>
    )
}

export default Providers

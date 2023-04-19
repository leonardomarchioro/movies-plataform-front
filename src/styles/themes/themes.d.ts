import "styled-components"
declare module 'styled-components' {
    export interface DefaultTheme {
        primary: {
          main: string,
          light: string,
          dark: string,
        },
        secondary: {
          main: string,
          light: string,
          dark: string,
        },
        background: {
          default: string,
          white: string,
          primary: string,
          secondary: string,
        },
        error: {
          main: string,
        },
        success: {
          main: string,
        },
        text: {
          default: string,
          primary: string,
          secondary: string,
        }
    }
} 
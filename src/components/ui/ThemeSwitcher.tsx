'use client'

// Import necessary types
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '../Icons/Icons'

// Define the ThemeSwitchProps type
interface ThemeSwitchProps {}

// Convert ThemeSwitch component to TypeScript
const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme , resolvedTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div>
            {
                resolvedTheme === 'dark' ? (
                    <button onClick={() => setTheme('dark')}><Sun /></button>
                ) : (
                    <button onClick={() => setTheme('light')}><Moon /></button>
                )
            }
        </div>
    )
}

export default ThemeSwitch;

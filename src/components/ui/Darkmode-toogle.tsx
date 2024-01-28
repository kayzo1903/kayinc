'use client'
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
        <div className='h-8 w-8 bg-slate-400 flex justify-center items-center rounded-full'>
            {
                resolvedTheme === 'light' ? (
                    <button onClick={() => setTheme('dark')}><Sun /></button>
                ) : (
                    <button onClick={() => setTheme('light')}><Moon /></button>
                )
            }
        </div>
    )
}

export default ThemeSwitch;

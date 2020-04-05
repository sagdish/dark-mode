import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
  const [isDark, setTheme] = useLocalStorage('true');

  useEffect(() => {
    if (isDark) {
      document.body.className += 'dark-mode';
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDark])

  return [isDark, setTheme]
}
// hooks/useIsLargeScreen.js
import { useEffect, useState } from 'react';

const useIsLargeScreen = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // Tailwind lg breakpoint
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isLargeScreen;
};

export default useIsLargeScreen;

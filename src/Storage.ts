

/**
 * Logs the current LocalStorage into a variable command
 * To get a snapshot of the current config:
 * 1. Call this function from the browser debug console.
 * 2. Copy the output to the clipboard, and possible a notepad for persistance.
 * To restore
 * 1. Paste clipboard into the browser debug console
 * 2. Hit enter
 */
export const logLocalStorageStringCommand = (): void =>
    console.log(`restoreFromLocalStorageString( "${escape(JSON.stringify(localStorage))}" )`);

export const restoreFromLocalStorageString = (localStorageString: string): void => {    
    if (localStorageString === undefined) {
        console.error('localStorageString is undefined');
    } else {
        Object.entries(
            JSON.parse(unescape(localStorageString))
        ).forEach(([key, value]) => localStorage.setItem(key, value as string));
    }
};

declare global {
    interface Window {
        logLocalStorageStringCommand: () => void;
        restoreFromLocalStorageString: (localStorageString: string) => void;
    }
}

if (global.window !== undefined) {
    global.window.logLocalStorageStringCommand = logLocalStorageStringCommand;
    global.window.restoreFromLocalStorageString = restoreFromLocalStorageString;
}



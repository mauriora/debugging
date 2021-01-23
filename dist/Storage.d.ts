/**
 * Logs the current LocalStorage into a variable command
 * To get a snapshot of the current config:
 * 1. Call this function from the browser debug console.
 * 2. Copy the output to the clipboard, and possible a notepad for persistance.
 * To restore
 * 1. Paste clipboard into the browser debug console
 * 2. Hit enter
 */
export declare const logLocalStorageStringCommand: () => void;
export declare const restoreFromLocalStorageString: (localStorageString: string) => void;
declare global {
    interface Window {
        logLocalStorageStringCommand: () => void;
        restoreFromLocalStorageString: (localStorageString: string) => void;
    }
}

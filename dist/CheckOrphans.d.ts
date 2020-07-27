export declare const checkOrphans: (showFound?: boolean) => void;
declare global {
    interface Window {
        checkOrphans: () => void;
    }
}

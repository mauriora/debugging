const stripName = (fullCaller: string): string => fullCaller.trim().substr('at '.length).replace(/\s\(.*/, '');

export const fName = (): string => {
    const stackText = (new Error()).stack;

    if (stackText) {
        const stack = stackText.split('\n');

        if (stack.length > 2)
            return stripName(stack[2]);
    }
    return 'unknown';
};

export const caller = (): string => {
    const stackText = (new Error()).stack;

    if (stackText) {
        const stack = stackText.split('\n');

        if (stack.length > 3)
            return stripName(stack[3]);
    }
    return 'unknown';
};


export const callerAndfName = (): string => {
    const stackText = (new Error()).stack;

    if (stackText) {
        const stack = stackText.split('\n');

        if (stack.length > 3)
            return stripName(stack[3]) + ' -> ' + stripName(stack[2]);
        else if (stack.length > 2)
            return 'unkown' + ' -> ' + stripName(stack[2]);
    }
    return 'unknown';
};


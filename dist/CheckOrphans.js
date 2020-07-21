export const checkOrphans = (showFound = false) => {
    for (const [id, textItem] of Object.entries(localStorage)) {
        const item = JSON.parse(textItem);
        if (item.parentId) {
            const textParent = localStorage.getItem(item.parentId);
            if (textParent == null) {
                console.warn(`${id} is orphaned parentId=${item.parentId}`);
            }
            else {
                const parent = JSON.parse(textParent);
                if (parent == undefined) {
                    console.error(`${id}'s parent ${item.parentId} can't be parsed: ${textParent}`, { item, textParent });
                }
                else {
                    let found = false;
                    for (const [propertyName, propertyValue] of Object.entries(parent)) {
                        if (propertyValue == null) {
                            console.error(`${parent.id}.${propertyName} == null`);
                        }
                        else if (typeof propertyValue == 'object') {
                            const value = propertyValue;
                            if (('id' in value) && (value['id'] == id)) {
                                showFound && console.debug(`Found ${id} as ${parent.id}.${propertyName}`);
                                found = true;
                                break;
                            }
                            else if (id in value) {
                                showFound && console.debug(`Found ${id} in ${parent.id}.${propertyName}`);
                                found = true;
                            }
                        }
                    }
                    if (!found)
                        console.error(`Can not find ${id} in ${parent.id}`);
                }
            }
        }
        else if (id.startsWith('PluginSchema-')) {
            showFound && console.debug(`Found ${id}`);
        }
        else {
            console.log(`${id} has no parentId, nor startsWith('PluginSchema-')`, item);
        }
    }
};
//# sourceMappingURL=CheckOrphans.js.map
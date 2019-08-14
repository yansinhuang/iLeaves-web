export const partialUpdateObject = (target, source, supportFields) => {
    if (!target || !source || !supportFields) return target;
  
    Object.keys(source).forEach(function (key) {
        if (supportFields.includes(key)) {
            if (typeof source[key] !== 'undefined' && source[key] !== null) {
                if (key == 'status'){
                    if (source[key] == 0 || source[key] == 1){
                        target[key] = source[key];
                    }
                }
                else{
                    target[key] = source[key];
                }
                    
            }
        }
    });
    return target
}
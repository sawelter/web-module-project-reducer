export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const RECALL_MEMORY = "RECALL_MEMORY" //MR
export const SET_MEMORY = "SET_MEMORY" //M+
export const CLEAR_MEMORY = "CLEAR_MEMORY" //MC

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type: CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY});
}

export const recallMemory = () => {
    return({type:RECALL_MEMORY})
}

export const setMemory = () => {
    return({type:SET_MEMORY});
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}
export function todoReducer(state, action){
    switch (action.type){
        case 'ADD_TODO':
            return {user:action.txt};
        case '绝地求生 ':
            return {user:'hematx'};
        default:
            return {user:'陈大哥'};
    }
}
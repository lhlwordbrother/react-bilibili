export const ADD_TODO = 'ADD_TODO';

export function addTodo(txt){
    return { type:ADD_TODO, txt }
}
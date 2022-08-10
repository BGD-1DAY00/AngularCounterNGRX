import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { add, subtract, reset } from "./couter.actions";
// export interface App{
//     parent: {
//         count: number,
//         name: string
//     }
// }

export interface App{
    count: number,
    name: string
}
export const init:App = {count: 0, name: ''};

export const counterReducer = createReducer(
    init,
    on(add, (state)=> ({...state, count: state.count + 1})),
    on(subtract, (state)=> ({...state, count: state.count - 1})),
    on(reset, (state)=> ({...state, count: 0}))
)
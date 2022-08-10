import { createAction } from "@ngrx/store";
export const add = createAction("[counter] add to count")
export const subtract = createAction('[counter] subtract count')
export const reset = createAction("[counter] reset count")
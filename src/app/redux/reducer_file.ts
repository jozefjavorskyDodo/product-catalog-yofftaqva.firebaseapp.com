

import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";
import {
    category_select_box_1st_option,
    category_select_box_2nd_option,
    category_select_box_3rd_option,
    category_select_box_4th_option,
    category_select_box_5th_option,
    category_select_box_6th_option,
    category_select_box_7th_option,
    category_select_box_8th_option
} from "./actions_file";



export const initial_state: string = "products-of-all-ids-altogether";
export const products_to_render = createReducer(
    initial_state,
    on(category_select_box_1st_option,
        (products_of_id) => products_of_id = initial_state
    ),
    on(category_select_box_2nd_option,
        (products_of_id) => products_of_id = "1638da6d-4507-4a66-8bc7-67f1249407c6"
    ),
    on(category_select_box_3rd_option,
        (products_of_id) => products_of_id = "eb520870-c61a-4e32-b7a9-2f8c42b1e6b9"
    ),
    on(category_select_box_4th_option,
        (products_of_id) => products_of_id = "ad104b15-daad-41e3-961b-67caf5f4af58"
    ),
    on(category_select_box_5th_option,
        (products_of_id) => products_of_id = "c093645d-cbdd-4bb4-9440-56456e9e6aa3"
    ),
    on(category_select_box_6th_option,
        (products_of_id) => products_of_id = "9649ba96-4e24-438c-8a40-a6cda0f4deb7"
    ),
    on(category_select_box_7th_option,
        (products_of_id) => products_of_id = "0a5607eb-50f4-42f4-8b59-541dd5d8f5af"
    ),
    on(category_select_box_8th_option,
        (products_of_id) => products_of_id = "221f4f47-ee72-4d46-b4ef-0f05b604b10e"
    )
);


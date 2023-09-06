import shoeses from "../../data/shoeses.json";
import { deleteSuccessfully } from "../../toastify_pop_up/danger";
import { addSuccessfully } from "../../toastify_pop_up/success";
import {
  ADD_CART,
  ADJUST_QUANTITY_CART,
  DELETE_CART,
  DETAILS,
} from "../constants/shoes";
const initialState = {
  shoeses: shoeses,
  cart: [],
  details: {},
};

export let shoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      let item = action.data;
      let cloneCart = [...state.cart];
      // check duplicate
      let index = cloneCart.findIndex((element) => element.id == item.id);
      if (index === -1) {
        item = { ...item, soLuong: 1 };
        cloneCart.push(item);
      } else {
        cloneCart[index].soLuong += 1;
      }
      addSuccessfully();
      return { ...state, cart: cloneCart };

    case DELETE_CART:
      let cloneDeleteCart = [...state.cart];
      let ind = action.data;
      cloneDeleteCart.splice(ind, 1);
      deleteSuccessfully();
      return { ...state, cart: cloneDeleteCart };

    case ADJUST_QUANTITY_CART:
      const idx = action.index;
      const value = action.value;
      let cloneAdjustCart = [...state.cart];
      cloneAdjustCart[idx].soLuong += value;
      cloneAdjustCart[idx].soLuong === 0 &&
        cloneAdjustCart.splice(idx, 1) &&
        deleteSuccessfully();
      return { ...state, cart: cloneAdjustCart };

    case DETAILS:
      const details = action.item;
      return { ...state, details: details };

    default:
      return state;
  }
};

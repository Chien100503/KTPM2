import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../request";

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await request.Cart(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, product }, { rejectWithValue }) => {
    try {
      const response = await request.AddToCart(userId, product);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ userId, product }, { rejectWithValue }) => {
    try {
      const response = await request.RemoveFromCart(userId, product);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addManyToCart = createAsyncThunk(
  "cart/addManyToCart",
  async ({ userId, products }, { rejectWithValue }) => {
    try {
      const response = await request.AddManyToCart(userId, products);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async ({ userId, cartItem }, { rejectWithValue }) => {
    try {
      const response = await request.DeleteFromCart(userId, cartItem);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userId: null,
  //danh sách sản phẩm trong giỏ hàng
  products: [],
  // tổng tiền
  total: 0,
  // tổng số lượng sản phẩm có trong giỏ hàng
  number_of_product: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload?.total_of_price;
        state.products = action.payload?.items;
        state.number_of_product = action.payload?.total_of_product;
        // console.log(action.payload);
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload?.cart?.total_of_price;
        state.products = action.payload?.cart?.items;
        state.number_of_product = action.payload?.cart?.total_of_product;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;

        state.total = action.payload?.cart?.total_of_price;
        state.products = action.payload?.cart?.items;
        state.number_of_product = action.payload?.cart?.total_of_product;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addManyToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addManyToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload?.cart?.total_of_price;
        state.products = action.payload?.cart?.items;
        state.number_of_product = action.payload?.cart?.total_of_product;
      })
      .addCase(addManyToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload?.cart?.total_of_price;
        state.products = action.payload?.cart?.items;
        state.number_of_product = action.payload?.cart?.total_of_product;
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;

// Export các actions nếu cần (optional)
export const { setTotalProduct } = cartSlice.actions;

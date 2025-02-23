import cartModel from "./cart.model.js";
import { getUserById } from "../user/user.service.js";

async function addCart() {
  try {
    const new_cart = new cartModel();
    await new_cart.save();
    return new_cart;
  } catch (error) {
    throw error;
  }
}
const clearCart = async (cart_id) => {
  try {
    const cart = await cartModel.findById(cart_id);
    if (!cart) {
      throw new Error("Cart not found");
    }

    cart.total_of_product = 0;
    cart.total_of_price = 0;
    cart.items = [];

    await cart.save();
    return cart;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};

async function updateCart(user_id, cart) {
  try {
    const user = await getUserById(user_id);
    if (!user) throw new Error("User not found!");
    const cart_id = user?.cart;

    const updated_cart = await cartModel
      .findByIdAndUpdate(cart_id, cart, {
        new: true,
      })
      .populate({ path: "items.product", model: "Product" });

    if (!updated_cart) {
      throw new Error("Cart not found or could not be updated!");
    }

    return updated_cart;
  } catch (error) {
    throw error;
  }
}
async function getCartByUserId(user_id) {
  try {
    const user = await getUserById(user_id);
    if (user) {
      const cart = await cartModel
        .findById(user.cart)
        .populate({ path: "items.product", model: "Product" });

      return cart;
    } else throw new Error("User not found");
  } catch (error) {
    throw error;
  }
}

export { addCart, clearCart, updateCart, getCartByUserId };

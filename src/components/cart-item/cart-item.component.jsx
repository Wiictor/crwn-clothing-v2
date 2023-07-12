import {
  CartItemcontainer,
  ItemDetails,
  ItemName,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemcontainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>

        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemcontainer>
  );
};

export default CartItem;

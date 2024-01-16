import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function Product(props) {
  // eslint-disable-next-line react/prop-types
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="product-img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        {" "}
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}

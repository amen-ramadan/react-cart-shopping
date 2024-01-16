import { PRODUCTS } from "../../PRODUCTS";
import Product from "./Product";
import "./shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>pedroTech shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

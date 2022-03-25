import styles from "./NavCartItem.module.scss";
import { IProduct } from "./../../../../../../store/products/products.type";
import { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppDispatch } from "./../../../../../../hooks/redux";
import { deleteFromCart } from "../../../../../../store/cart/cart.slice";

type NavCartItemProps = {
  item: IProduct;
};

const NavCartItem: FC<NavCartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(deleteFromCart(item.id));
  };
  return (
    <div className={styles.nav_cart_item}>
      <Link to={`/card/${item.id}`}>
        {" "}
        <img src={item.image} alt="product card" />
      </Link>
      <div className={styles.nav_cart_description}>
        <h3>{item.category}</h3>
        <h2>{item.title}</h2>
        <span>
          {item.price} x {item.quantity} = $ {item.total.toFixed(2)}
        </span>
      </div>
      <button onClick={deleteProduct} className={styles.nav_cart_delete}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default NavCartItem;

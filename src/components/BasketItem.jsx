/* eslint-disable react/prop-types */
import { removeItem, updatedItem } from "../redux/actions/basketAction";
import { useDispatch } from "react-redux";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded-2 p-4 bg-white d-flex text-black mb-5  justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <img
          className="rounded-3"
          width={60}
          height={60}
          src={product.image}
          alt=""
        />
        <h4>
          <span>{product.make}</span>
          <span>{product.model}</span>
        </h4>
        <h4 className="text-success">{product.price}₺</h4>
      </div>
      <div className="d-flex align-items-center gap-3">
        <h6>Miktar: {product.amount}</h6>
        <button
          onClick={() => dispatch(updatedItem(product))}
          className="btn btn-sm btn-primary"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeItem(product.id))}
          className="btn btn-sm btn-danger"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default BasketItem;

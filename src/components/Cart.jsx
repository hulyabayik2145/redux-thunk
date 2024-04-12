import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../redux/actions/basketAction";
import { updatedItem } from "../redux/actions/basketAction";

const Cart = ({ product }) => {
  const store = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  //sepete abone ol ve sepette bu eleman varsa onu bul
  const found = store.basket.find((i) => i.id === product.id);
  console.log(store);

  //console.log(product);
  const handleClick = () => {
    if (found) {
      dispatch(updatedItem(found));
    } else {
      dispatch(addToBasket(product));
    }
  };
  return (
    <div className="card py-4 px-3 mt-5" style={{ width: "18rem" }}>
      <div>
        <img
          src={product.image}
          alt={product.model}
          className="rounded"
          width={250}
          height={200}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="">
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>
        <p className="d-flex flex-column">
          {product.specs.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>
        <button onClick={handleClick} className="w-100 bg-black">
          {found ? `miktarı arttır( ${found.amount})` : `Sepete ekle`}
        </button>
      </div>
    </div>
  );
};

export default Cart;

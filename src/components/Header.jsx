import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store.basket);
  //! toplam urun sayısını hesaplar
  const total = store.basket.reduce((total, item) => total + item.amount, 0);
  return (
    <header className="navbar bg-body-tertiary position-sticky top-0 z-3 shadow shadow-lg">
      <div className="container-fluid">
        <Link to={"/"} className="d-flex- gap-3 align-items-center">
          <img src="/vite.svg" alt="logo" />
          Redux Thunk
        </Link>
        <div className="d-flex gap-3">
          <NavLink to={"/"}>Anasayfa</NavLink>
          <NavLink to={"/sepet"}>
            <span>Sepet</span>
            <span className="badge bg-danger mx-2">{total}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

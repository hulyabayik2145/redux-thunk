/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
//apiden ürün verilerini alacağız . yüklenme durumlarını hata durumlarını ve gelen verileri
// store de saklayacapız

import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import Loader from "../components/Loader";
import { getData } from "../redux/actions/productActions";
import Cart from "../components/Cart";
import { getBasket } from "../redux/actions/basketAction";

const HomePage = () => {
  //Store abone ol
  const store = useSelector((store) => store.products);
  // console.log(store);
  const dispatch = useDispatch();

  useEffect(() => {
    // sadece bir aksiyon çalıştıracağız bu aksiyon
    //api isteiğini de arka planda çalıştıracak
    //2 aşama isteğin başarılı olduğunu store bildir
    dispatch(getData());
    //sepetteki verileri al
    dispatch(getBasket());
  }, []);
  return (
    <div className="container">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata oluşursa ekrana baas */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse ekrana bas */}
      <div className="d-flex flex-wrap gap-5 justify-content-center myy-5">
        {store?.products.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

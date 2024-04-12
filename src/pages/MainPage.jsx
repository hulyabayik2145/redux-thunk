/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
//apiden ürün verilerini alacağız . yüklenme durumlarını hata durumlarını ve gelen verileri
// store de saklayacapız

import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setError, setProducts } from "../redux/actions/productActions";
import { setLoading } from "../redux/actions/productActions";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const MainPage = () => {
  //Store abone ol
  const store = useSelector((store) => store.products);
  console.log(store);
  const dispatch = useDispatch();

  useEffect(() => {
    //1 isteğin başladığını store bildir
    dispatch(setLoading());

    axios
      .get("http://localhost:3040/products")
      //2 aşama isteğin başarılı olduğunu store bildir
      .then((res) => dispatch(setProducts(res.data)))
      //3 isteğin başarısız olduğunu store bildir
      .catch((err) => dispatch(setError(err.message)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container p-5 ">
      {/* veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata oluşursa ekrana baas */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse ekrana bas */}
      {store?.products.map((item) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
};

export default MainPage;

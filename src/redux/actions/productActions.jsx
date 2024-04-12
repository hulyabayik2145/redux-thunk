/* eslint-disable no-undef */
//aksiyonlar oluşturan fonksiyonları hazırlıyoruz
import axios from "axios";
export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};

export const setProducts = (payload) => {
  return {
    type: "SET_PRODUCTS",
    payload,
  };
};

export const setError = () => {
  return {
    type: "SET_ERROR",
    payload,
  };
};

//! redux thuk devereye girince aksiyon oluşturan fonksiyonlar
//! thunk devreye girdiğinde return satısında yeni bir fonksiyon döndürme yeteneine sahip olunur
//! bu sayede bu return edilen fonksiyonların içerisinde api istekleri
//!yapabiliriz

export const getData = () => {
  return (dispatch) => {
    dispatch(setLoading());
    // artık api istekleri atabilir daha sonrasında store 'a haber verebiliriz.

    axios
      .get("http://localhost:3040/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};

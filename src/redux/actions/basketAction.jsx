// asekron action | thunk aksiyonu
// sepete yeni eleman ekleme işini yapcak
//Önce api a post isteiği ile elemanı ekleyecek
// api a eklenirse stare a da ekleyecek

import axios from "axios";

export const addToBasket = (product) => async (dispatch) => {
  console.log(product);
  //1) yeni bir nesne oluşturup miktarını 1 olarak belirle
  const newProduct = { ...product, amount: 1 };
  console.log(newProduct);
  //2) nesneden gereksiz değerleri kaldır
  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;
  delete newProduct.stockAmount;
  console.log(newProduct);
  //3) urunü api a kaydet

  const res = await axios.post("http://localhost:3040/basket", newProduct);
  //4) store a yeni ürünü ekle

  dispatch({
    type: "ADD",
    payload: newProduct,
  });
};

//api dan sepet verileri alıp aşama aşama
//(yükleme başarılı olma, hata olşma) storu
// bilgileniren asenkron thunk aksiyonu

export const getBasket = () => (dispatch) => {
  dispatch({
    type: "SET_BASKET_LOADING",
  });
  axios
    .get("http://localhost:3040/basket")
    .then((res) =>
      dispatch({
        type: "SET_BASKET_DATA",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "SET_BASKET_ERROR",
        payload: err.message,
      })
    );
};

// sepette var olan urunun miktarını 1 arttıracak action

export const updatedItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3040/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    //isteğin başarılı olursa reducer a haber ver
    .then(() =>
      dispatch({
        type: "UPDATE",
        payload: product.id,
      })
    );
};

// ürünü sepetten kaldırır

export const removeItem = (delete_id) => (dispatch) => {
  axios
    .delete(`http://localhost:3040/basket/${delete_id}`)
    //islem basarılı olursa reducere haber ver
    .then(() =>
      dispatch({
        type: "DELETE",
        payload: delete_id,
      })
    );
};

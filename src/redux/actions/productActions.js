
import * as actionTypes from "./actionTypes";


export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}


// Reducer'ın anlayacağı formata methodlarımız çevirildi.
export function createProductsSuccess(products) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: products }
}
export function updateProductsSuccess(products) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: products }
}
// Method tipleri json data formatında gönderilebilir
//   fetch(url,{method:"POST"}) 
//   fetch(url,{method:"PUT"}) vs.
//   (product.id||"") eğer ürünün id'si varsa url'e
//   id'yi ekler yoksa boş geçer (Trick)
//   {method: product.id?"PUT":"POST"}) 
//   id var ise bu bir put metoduyani edit
//   yok ise bu bir post metodudur.
//   body data'yı json formatına dönüştürüp
//   gönderdiğimiz kısım. Request'ler string olduğu
//   için stringify ile dönüştürülerek gönderilir.
//   handle response ile api'den dönen cevap yakalanır
//   api'den hata dönerse catch ile hata fırlatılır

export function saveProductToApi(product) {
    let url = "http://localhost:3000/products/";
    return fetch(url + (product.id || ""),
        {
            method: product.id ? "PUT" : "POST",
            headers: {
                "content-type": "aplication/json"
            },
            body: JSON.stringify(product)
        }).then(handleResponse).catch(handleError);
}

// Thunk dipsatch ile devreye girer. 
// eğer id tanımlanmışsa put için yazılan action devreye
// girer tanımlanmamışsa post işlemi action'ı devreye girer.
// dispatch metodlarından error dönerse catch kısmı çalışır.
export function saveProduct(product) {
    return function (dispatch) {
        return saveProductToApi(product).then(savedProduct => {
            product.id ?
                dispatch(updateProductsSuccess(savedProduct)) : dispatch(createProductsSuccess(savedProduct))
        }).catch(error => { throw error })
    }
}
// apiden dönen respons status'u yakalar
export async function handleResponse(response) {
    if (response.ok) {
        return response.json();
    }
    const error = await response.text();
    throw new Error(error);
}
// hatayı yakalayıp cevap olarak döndüren fonksiyon
export function handleError(error) {
    console.log("Something went wrong")
    throw error;
}

export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    };
}
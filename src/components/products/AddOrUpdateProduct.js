// ComponentDidMount yerine Hooks'da
// useEffect kullanılır (LifeCycle Metodlarını barındırır)
// SetState yerine de useState kullanılır.
import React, { useEffect, useState } from "react"

// operasyonları import ettik
import { getCategories } from "../../redux/actions/categoryActions"
import { saveProduct } from "../../redux/actions/productActions"

// Redux için oluşturduğumuz
// store bağlantısı için gerekli
import { connect } from "react-redux"
import ProductDetail from "./ProductDetail"

// propları genişletmek için
// ...props yazıldı.
function AddOrUpdateProduct({
    saveProduct,
    getProducts,
    getCategories,
    categories,
    products,
    history,
    ...props
}) {

    // State'deki product 'ı  setProduct fonksiyonu kullanarak set etme 

    const [product, setProduct] = useState({ ...props.product })

    // Eğer herhangi bir kategori belirtilmemişse
    // tüm kategorileri getir.
    // [props.product] dom'a yerleştikden sonra
    // işlemi bitirmek amacıyla yapıldı.
    // aksi takdirde kısır dmngüye girer.
    // (tricky)
    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }

        setProduct({ ...props.product })
    }, [props.product])

    // Textboxdaki değişiklikleri yakalamak
    // ve set etmek için method yazdık.
    function handleChange(event) {
        // event.target.value ve event.target.name
        // objeye içine aktarıldı
        const { name, value } = event.target
        // previous product bizim daha önceki setProduct ile
        // set değerimiz edilecek

        setProduct(previousProduct => ({
            // önceki product'ı extende ettik
            ...previousProduct,
            // product'ın name özelliğine
            // categoryId alanı tanımlanmış ise direk value değerini yaz 
            // tanımlanmamışsa categporyId değerini
            // farklı bir tip ise int'e parse et 
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))
    }
    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            history.pushState("/")
        })
    }

    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
        ></ProductDetail>
    )

}

export function getProductById(products, productId) {
    let product = products.find(product => product.id === productId) || null;
    return product;
}

// ownProps parametresi componentlerin
// içerisinde barındırdıkları prop'lara
// karşılık gelir.
function mapStateToProps(state, ownProps) {
    // parameterlere bak ve productId'yi
    // getir.
    const productId = ownProps.match.params.productId;
    // product ıd varsa ve reducer daki state değerleri
    // boş değilse ürünlerin içerisinden
    // istenen o ıd deki ürünü getProductById ile çekeriz.
    // diğer takdir'de bu ürün yoksa yeni bir üründür
    const product = productId && state.productListReducer.length > 0 ?
        getProductById(state.productListReducer, productId) : {}
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

// Reducera bakıp ordakioperasyonları yazmak yeterli
// diğer türlü bind işlemi yapmamız gerekirdi.
const mapDispatchToProps = {
    getCategories, saveProduct
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
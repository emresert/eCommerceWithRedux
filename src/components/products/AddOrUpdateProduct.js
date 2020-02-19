// ComponentDidMount yerine Hooks'da
// useEffect kullanılır (LifeCycle Metodlarını barındırır)
// SetState yerine de useState kullanılır.
import React, { useEffect, useState } from "react"

// Hooks tanımlanırken Parametre olarak geçilen 
// fonksiyonların ilgili Action'larından operasyonları import ettik
import { getCategories } from "../../redux/actions/categoryActions"
import { saveProduct } from "../../redux/actions/productActions"

// Redux için oluşturduğumuz
// store bağlantısı için gerekli
import { connect } from "react-redux"
import ProductDetail from "./ProductDetail"

// Hooks'da Obje notasyonu olarak ihtiyacımız olan 
// parametreleri tanımlamamız gerekir. Bu parametreler
// herhangi bir yerden çekilebilir
// product ve categories initialState'den çekildi 
// propları genişletmek için
// ...props yazıldı.
// history bizim bu componentte kullanacapımız
// manuel parametre
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

    // Sayfada kategorilere ihtiyaç vardır ve
    // kullanıcı link ile gittiyse ve dolu gelmediyse
    // componentler inşa edildikten sonra lifecycle
    // yerine useEffect kullanılmalıdır
    // Eğer herhangi bir kategori belirtilmemişse
    // tüm kategorileri getir.
    // [props.product] dom'a yerleştikden sonra
    // işlemi bitirmek amacıyla yapıldı.
    // aksi takdirde kısır döngüye girer.
    // (tricky)
    useEffect(() => {
        // state'den gelen kategori boş ise
        // hiç kategorilere tıklamadan 
        // linkden gelmiştir. 
        // bu yüzden 0 'a eşitse kategoriler getirilir.
        if (categories.length === 0) {
            getCategories();
        }

        //state'deki product nesnesini set eder. 
        setProduct({ ...props.product })
    }, [props.product])

    // Textboxdaki değişiklikleri yakalamak
    // ve set etmek için method yazdık.
    function handleChange(event) {
        // event.target.value ve event.target.name
        // obje içine otomatik olarak aktarıldı
        const { name, value } = event.target

        // previous product bizim daha önceki setProduct ile
        // set edeceğimiz state'deki product

        setProduct(previousProduct => ({
            // önceki product'ı extend ettik
            ...previousProduct,
            // product'ın name özelliğine(Textbox içinde yer alır)
            // categoryId alanı tanımlanmış ise direk value değerini yaz 
            // tanımlanmamışsa categporyId değerini
            // farklı bir tip ise int'e parse et 
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))
    }
    function handleSave(event) {
        event.preventDefault();
        // Redux'tan import edilen method
        saveProduct(product).then(() => {
            history.push("/")
        })
    }

    // child için proplar gönderildi
    // child'da bu proplar ile this kullanmadan
    // ulaşılabilecek.
    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
        ></ProductDetail>
    )

}

// id'ye göre stateden bize objeyi döndürecek method
export function getProductById(products, productId) {
    let product = products.find(product => product.id === productId) || null;
    return product;
}

// ownProps parametresi componentlerin
// içerisinde barındırdıkları prop'lara
// karşılık gelir.(Hooks'u reduxa bağlarken kullanılır)
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

    // prop olarak geçilecek parametreler
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

// Action'lardan import edilen operasyonları yazmak yeterli
// yukarıda import edilen metodlar tanımlandı
const mapDispatchToProps = {
    getCategories, saveProduct
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
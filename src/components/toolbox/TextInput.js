import React from "react"

// Input type Text için html parametrelerini
// obje notasyonu şeklinde tanımlayarak
// parametre olarak geçtik
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {

    // form input nesnesi için bootstrap'dan
    // class özellikleri ekledik
    // eğer error tanımlanmışsa ekstra class eklendi    
    let wrapperClass = "form-group"
    if (error && error.length > 0) {
        wrapperClass += " has-error"
    }

    // geriye rxjs formatında bir
    // geri dönüş yapılacak
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}></label>
            <div className="field">
                <input type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}>
                </input>
                {/* error gelirse div'i çalıştırır */}
                {error && <div className="alert alert-info">{error}</div>}
            </div>
        </div>
    )
};

export default TextInput;
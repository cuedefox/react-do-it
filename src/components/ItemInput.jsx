import {React, useContext, useState} from "react";
import {Items} from "../contexts/Items.jsx"

const ItemInput = () => {
    const [item, setItem] = useState('');
    const {addItem, items} = useContext(Items);
    const sendItem = (e) => {
        e.preventDefault();
        if(item === '') {
            console.log(items);
            alert('debe agregar un item para continuar');
        }else {
            let id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
            let itemToAdd = {title: item, id: id, check: false}
            addItem(itemToAdd);
            setItem('');
        }
    }

    return <form className="item-input" onSubmit={sendItem}>
        <input className="input-text" type="text" value={item} onChange={e => setItem(e.target.value)} />
        <input className="input-submit" type="submit" value="Agregar" />
    </form>
}

export default ItemInput;
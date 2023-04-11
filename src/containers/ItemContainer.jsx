import {React, useContext} from "react";
import {Items} from "../contexts/Items";
import Item from "../Items/Item";

const ItemContainer = () => {
    const {items, deleteAllItems} = useContext(Items);
    return <div className="item-container">
        <button onClick={deleteAllItems}>Borrar todos los items</button>
        {
            items.length > 0 ? 
            <>{items.map(item => {
                <Item key={`item-${item.id}`} item={item} />
            })}</> 
            : 
            <div className="item-container-no-item-message">
                <p>No hay items en la lista!</p>
            </div>
        }
    </div>
}

export default ItemContainer;
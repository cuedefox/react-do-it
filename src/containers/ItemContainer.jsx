import {React, useContext} from "react";
import {Items} from "../contexts/Items";
import Item from "../Items/Item";

const ItemContainer = () => {
    const {items, deleteAllItems, deleteItem, checkItem} = useContext(Items);
    return <div className="item-container">
        <button onClick={deleteAllItems}>Borrar todos los items</button>
        {
            items.length > 0 ? 
            <div className="items-container">{items.map((item) => {
                return <Item key={`item-${item.id}`} item={item} deleteItem={deleteItem} checkItem={checkItem} />
            })}</div> 
            : 
            <div className="item-container-no-item-message">
                <p>¡No hay tareas!</p>
            </div>
        }
    </div>
}

export default ItemContainer;
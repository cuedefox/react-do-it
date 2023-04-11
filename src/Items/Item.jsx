import {React, useContext} from "react";
import {Items} from "../contexts/Items";

const Item = ({item}) => {
    const {deleteItem, checkItem} = useContext(Items);
    return <div className="item">
        <input className="check-item" type="checkbox" value={item.check} onClick={checkItem(item.id)} />
        <p>{item.title}</p>
        <input className="delete-item" type="button" onClick={deleteItem(item.id)} />
    </div>
}

export default Item;
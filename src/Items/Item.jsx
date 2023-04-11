import {React} from "react";

const Item = ({item, deleteItem, checkItem}) => {
    return <div className="item">
        <input className="check-item" type="checkbox" onClick={() => checkItem(item.id)} />
        <p>{item.title}</p>
        <input className="delete-item" type="button" onClick={() => deleteItem(item.id)} />
    </div>
}

export default Item;
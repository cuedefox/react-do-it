import {React} from "react";

const Item = ({item, deleteItem, checkItem}) => {
    return <div className="item">
        <input className="check-item" type="checkbox" onClick={() => checkItem(item.id)} />
        <p>{item.check ? <span>{item.title}</span> : item.title}</p>
        <input className="delete-item" type="button" onClick={() => deleteItem(item.id)} />
    </div>
}

export default Item;
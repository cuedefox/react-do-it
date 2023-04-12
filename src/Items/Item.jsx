import {React, useState} from "react";
import trashIcon from "../assets/img/icons/trash.svg";

const Item = ({item, deleteItem, checkItem}) => {
    const [textChecked, setTextChecked] = useState(item.check);
    const handleCheckboxChange = (event) => {
        checkItem(item.id);
        setTextChecked(event.target.checked);
    }

    return <div className="item">
        <input className="check-item" type="checkbox" onChange={handleCheckboxChange} checked={textChecked} />
        <p className={textChecked ? 'text-checked' : ''}>{item.title}</p>
        <button className="delete-item" onClick={() => deleteItem(item.id)}>
            <img src={trashIcon} alt="Icono de la basura" />
        </button>
    </div>
}

export default Item;
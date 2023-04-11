import React from "react";

const Item = ({item}) => {
    return <form className="item">
        <input type="checkbox" value={item.check} />
        <p>{item.title}</p>
        <input type="button" />
    </form>
}

export default Item;
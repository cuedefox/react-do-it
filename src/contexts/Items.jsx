import { createContext, useState, React} from "react";

export const Items = createContext({});

const ItemsProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addItem = (itemToAdd) => {
        setItems([...items, itemToAdd]);
    }

    const deleteItem = (id) => {
        const itemsWithoutDeleted = items.filter(item => item.id !== id);
        setItems(itemsWithoutDeleted);
    }

    const checkItem = (id) => {
        let itemsAndChecked = items;
        const index = itemsAndChecked.findIndex((item) => item.id === id);
        itemsAndChecked[index].check = !itemsAndChecked[index].check;
        setItems(itemsAndChecked);
    }

    const deleteAllItems = () => {
        setItems([]);
    }

    return <Items.Provider
        value={{
            items,
            addItem,
            deleteItem,
            checkItem,
            deleteAllItems
        }}
    >
        {children}
    </Items.Provider>
}

export default ItemsProvider;
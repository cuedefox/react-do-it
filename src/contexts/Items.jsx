import { createContext, useState, React} from "react";

export const Items = createContext({});

const ItemsProvider = ({children}) => {
    const [items, setItem] = useState([]);

    const addItem = (itemToAdd) => {
        setItem([...items, itemToAdd]);
    }

    const deleteItem = (id) => {
        const itemsWithoutDeleted = items.filter(item => item.id !== id);
        setItem(itemsWithoutDeleted);
    }

    const checkItem = (id) => {
        let itemsAndChecked = items;
        const index = itemsAndChecked.findIndex((item) => item.id === id);
        itemsAndChecked[index].check = !itemsAndChecked[index].check;
        setItem(itemsAndChecked);
    }

    const deleteAllItems = () => {
        setItem([]);
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
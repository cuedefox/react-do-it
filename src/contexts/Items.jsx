import { createContext, useState, React} from "react";

export const Items = createContext({});

const ItemsProvider = ({children}) => {
    
    const [items, setItems] = useState(() => {
        const storedTareas = localStorage.getItem('items');
        return storedTareas ? JSON.parse(storedTareas) : [];
      });;

    const addItem = (itemToAdd) => {
        setItems([...items, itemToAdd]);
        localStorage.setItem('items', JSON.stringify(items));
    }

    const deleteItem = (id) => {
        const itemsWithoutDeleted = items.filter(item => item.id !== id);
        setItems(itemsWithoutDeleted);
        localStorage.setItem('items', JSON.stringify(items));
    }

    const checkItem = (id) => {
        let itemsAndChecked = items;
        const index = itemsAndChecked.findIndex((item) => item.id === id);
        itemsAndChecked[index].check = !itemsAndChecked[index].check;
        setItems(itemsAndChecked);
        localStorage.setItem('items', JSON.stringify(items));
    }

    const deleteAllItems = () => {
        setItems([]);
        localStorage.setItem('items', JSON.stringify(items));
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
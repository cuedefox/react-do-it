import React from "react";
import ItemInput from "../components/ItemInput";
import ItemContainer from "./ItemContainer";
import ItemsProvider from "../contexts/Items";

const MainContainer = () => {
    return <main>
        <ItemsProvider>
            <ItemInput />
            <ItemContainer />
        </ItemsProvider>
    </main>
}

export default MainContainer;
import React from "react";
import NavMod from "./NavMod";
import SearchComponent from "./SearchComponent"; 
import Article from "./Article"; 

export default function Home() {
    return (
        <div>
        <NavMod />
        <SearchComponent />
        <Article />
        </div>
    );
}

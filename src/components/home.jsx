import React from "react";

import AppAbout from "./home/about";
import AppContact from "./home/contact";
import AppServices from "./home/services";
import HorseSale from "./home/horseSale";
import Details from "./section/Details";
import Cart from "./section/cart";
import Products from "./section/products";

function Home(){
    return(
        <div className="Main">
            <HorseSale />
             < AppServices />
             <Cart />
             <Details />
              <Products />
             < AppContact/>
             <AppAbout />

        </div>
    );
}

export default Home;
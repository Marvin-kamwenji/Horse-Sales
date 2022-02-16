import React from "react";

import AppAbout from "./home/about";
import AppContact from "./home/contact";
import AppServices from "./home/services";
import HorseSale from "./home/horseSale";
import MarketPlace from "./home/marketPlace";

function Home(){
    return(
        <div className="Main">
            <HorseSale />
             < AppServices />
             < MarketPlace />
             < AppContact/>
             <AppAbout />

        </div>
    );
}

export default Home;
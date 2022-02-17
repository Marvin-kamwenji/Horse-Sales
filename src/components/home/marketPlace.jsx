import React from "react";

const products = [
      {
        id: '1',
        name: 'Explorer',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canr.msu.edu%2Fnews%2Fexploring_equine_breeds_the_arabian&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABAJ',
        price: 'KSHS 120,000',     
        healthy: 'YES',
        location: 'Nanyuki',
      },

      {
        id: '2',
        name: 'Blackie',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fanimals.desktopnexus.com%2Fwallpaper%2F1395313%2F&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABAc',
        price: 'KSHS 125,000',     
        healthy: 'YES',
        location: 'Githurai',
      },
      {
        id: '3',
        name: 'MO Poppies',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thesprucepets.com%2Fmost-popular-horse-breeds-1886146&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABA3',
        price: 'KSHS 220,000',     
        healthy: 'YES',
        location: 'Kajiado',
      },
      {
        id: '4',
        name: 'Isabel Pokorny',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F410390584774616808%2F&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABBA',
        price: 'KSHS 220,000',     
        healthy: 'YES',
        location: 'Muranga',
      },
      {
        id: '5',
        name: 'Aghale aphamesta',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Flansdown1570%2Faqha-apha-stallions%2F&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABBK',
        price: 'KSHS 178,000',     
        healthy: 'YES',
        location: 'Taita',
      },
      {
        id: '6',
        name: 'Gorgeous Overo',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F536561743088923686%2F&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABBU',
        price: 'KSHS 183,000',     
        healthy: 'YES',
        location: 'Isiolo',
      },
    ],



function MarketPlace(){
    return (
       <div key={products.id} className="marketBlock">

           <img src={products.imageUrl}/>
           <h3>{products.name}</h3>
           

       </div>
    );
}

export default MarketPlace;
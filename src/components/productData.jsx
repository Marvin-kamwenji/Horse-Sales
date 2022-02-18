import React, { Component } from 'react' 
export const DataContext = React.createContext();

export class DataProvider extends Component {
 
 state = {
    products: [
      {
         "_id": "1",
         "name": "Explorer",
         "imageUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canr.msu.edu%2Fnews%2Fexploring_equine_breeds_the_arabian&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABAJ",
         "price": "KSHS 120,000",     
         "healthy" : "YES",
         "location" : "Nanyuki",
         "count": 1
      },

      {
        "_id": "2",
        "name": "Blackie",
        "imageUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fanimals.desktopnexus.com%2Fwallpaper%2F1395313%2F&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABAc",
        "price": "KSHS 125,000",     
        "healthy": "YES",
        "location": "Githurai",
        "count": 1
      },
      {
        "_id": "3",
        "name": "MO Poppies",
        "imageUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thesprucepets.com%2Fmost-popular-horse-breeds-1886146&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABA3",
        "price": "KSHS 220,000",     
        "healthy": "YES",
        "location": "Kajiado",
        "count": 1
      },
      {
        "_id": "4",
        "name": "Isabel Pokorny",
        "imageUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F410390584774616808%2F&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABBA",
        "price": "KSHS 220,000",     
        "healthy": "YES",
        "location": "Muranga",
        "count": 1
      },
      {
        "_id": "5",
        "name": "Aghale aphamesta",
        "imageUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Flansdown1570%2Faqha-apha-stallions%2F&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABBK",
        "price": "KSHS 178,000",     
        "healthy": "YES",
        "location": "Taita",
        "count": 1
      },
      {
        "_id": "6",
        "name": "Gorgeous Overo",
        "imageUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F536561743088923686%2F&psig=AOvVaw0LWLSnQ-yO9-jBD0mJqOHD&ust=1645175386029000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi1mI2yhvYCFQAAAAAdAAAAABBU",
        "price": "KSHS 183,000",     
        "healthy": "YES",
        "location": "Isiolo",
        "count": 1
      },
    ],

    cart: [],
    total: 0
  };



// Adding to cart
addCart = (id) =>{
  const {products, cart} = this.state;
  const check = cart.every(item =>{
    return item._id !== id
  })

  if(check){
    const data = products.filter(product =>{
      return product._id === id
    })
    this.setState({cart: [...cart,...data]})
  }else{
    alert("Whats up country man, your horse has been added to the cart.")
  }
};


//reducing from cart
reduction = id =>{
  const { cart } = this.state;
  cart.forEach(item =>{
      if(item._id === id){
          item.count === 1 ? item.count = 1 : item.count -=1;
      }
  })
  this.setState({cart: cart});
  this.getTotal();
};

//increasing to cart
increase = id =>{
  const { cart } = this.state;
  cart.forEach(item =>{
      if(item._id === id){
          item.count += 1;
      }
  })
  this.setState({cart: cart});
  this.getTotal();
};

//Remove from cart
removeProduct = id =>{
  if(window.confirm("Do you want to delete this horse?")){
      const {cart} = this.state;
      cart.forEach((item, index) =>{
          if(item._id === id){
              cart.splice(index, 1)
          }
      })
      this.setState({cart: cart});
      this.getTotal();
  }
 
};

//get total
getTotal = ()=>{
  const{cart} = this.state;
  const res = cart.reduce((prev, item) => {
      return prev + (item.price * item.count);
  },0)
  this.setState({total: res})
};

componentDidUpdate(){
  localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
  localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
};

componentDidMount(){
  const dataCart = JSON.parse(localStorage.getItem('dataCart'));
  if(dataCart !== null){
      this.setState({cart: dataCart});
  }
  const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
  if(dataTotal !== null){
      this.setState({total: dataTotal});
  }
}


render() {
  const {products, cart,total} = this.state;
  const {addCart,reduction,increase,removeProduct,getTotal} = this;
  return (
      <DataContext.Provider 
      value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
          {this.props.children}
      </DataContext.Provider>
  )
}
}
  
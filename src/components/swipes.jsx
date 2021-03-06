import React from 'react';
import SwipeableViews from 'react-swipeable-views';


class Swipes extends React.Component {

 constructor(props){
   super(props);

 }

 render (){
   return(
    <SwipeableViews enableMouseEvents>

     {this.props.data.map((restaurant, i) => (
       <div>
         <h5>{restaurant.name}</h5>
         <h5>{restaurant.address}</h5>
         <h5>Phone: {restaurant.phone}</h5>
         <h5>Price: {restaurant.money}</h5>
         <h5>Rating: {restaurant.rating}</h5>
         <img src={restaurant.image} alt={restaurant.name}/>
       </div>

     ))}
     </SwipeableViews>
   );
 }
};

export default Swipes;

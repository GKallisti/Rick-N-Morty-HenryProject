import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   return (
      <div className={style.card}>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.cardinner}>

         <div  className={style.front} >
            <img src={image} alt={name} />
                 
      
            <div>
               <Link to={`/detail/${id}`} className={style.lik}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
            </div>

            <div className={style.species} >
               <h2>Specie: {species}</h2>
               </div>
            <span></span>

            <button onClick={handleFavorite}>{isFav ? 'This character is a Favourite' : 'May be you dont like this one uh?' }</button>


            <div className={style.btn}>
               <button onClick={() => onClose(id)}>X</button>
            </div>
         
         
         </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect ( 
   mapStateToProps,
   mapDispatchToProps
)(Card);
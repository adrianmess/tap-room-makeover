import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div>
      <style>{`
          img{
            height:200px;
          }

            `}

      </style>
      <div className="images">
          <img src={props.img}/>
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.brewer}</p>
        <p>{props.description}</p>
        <p>{props.abv}</p>
        <p>{props.price}</p>
        <hr/>
      </div>
    </div>

  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string
};

export default Beer;
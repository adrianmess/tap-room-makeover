import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div classNames="grid">
      <style>{`

        .grid{
                    display: grid;
                    grid-template-columns: 1fr 4fr;
                    margin: 5vw 5vw;
                  }
                  img{
                    height: 150px;
                    margin-right: 50px;
                  }
                  images {
                    max-width: 400px;
                  }

                  .beerInfo{
                    max-height: 390px;
                    max-width: 420px;
                  }
            `}
      </style>
      <div className="images">
          <img src={props.img}/>
      </div>
      <div className="beerInfo">
        <h3>{props.name}</h3>
        <p>{props.brewer}</p>
        <p>{props.description}</p>
        <p>{props.abv}</p>
        <p>{props.price}</p>

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
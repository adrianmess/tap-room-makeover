import React from 'react'
import { Link } from 'react-router-dom'

function AddBeer(){
  return (
    <div>
      <style>{`
          .beerTableHeader{
            display: flex;
            justify-content: flex-end;
          }
            `}
      </style>
      <div className="beerTableHeader">
        <a>Click to add Beer to list:</a>
        <Link to='/addbeer' style={{textDecoration: 'none'}}><span>Add</span></Link>
      </div>

    </div>
  )
}

export default AddBeer

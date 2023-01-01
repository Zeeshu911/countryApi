import React from 'react'
import {useDispatch} from 'react-redux'
import { getItem } from '../redux-store/countrySlice';
import { NavLink } from 'react-router-dom';
import {AiFillEye} from 'react-icons/ai';

const Main = ({items}) => {

  const dispatch = useDispatch();

    const getCountry = (element)=>{
      dispatch(getItem(element))
    }


  return (
    <>
    <div className="row px-4 bg-dark pt-4 pb-4" style={{minHeight: "100vh"}}>
     {
        items && items.length > 0 ? (
            items.map(element =>{
                return (
                    <div className="col-md-3 col-sm-4 col-xsm-12 mb-3" key={element.name.common} style={{height: "fit-content"}}>
                  <div className='card px-2 bg-secondary'>
                    <img src={element.flags.png} alt={element.name.common} style={{height: "10rem"}}/>
                    <h4 className='text-light'>{element.name.common.length > 15 ? element.name.common.substring(0, 22 - 3) + "..." : element.name.common}</h4>
                    <div className='btn-container d-flex justify-content-end'>
                  <NavLink className='d-flex btn align-items-center btn-outline-warning' to='/singleCountry' onClick={()=> getCountry(element)} style={{width: "fit-content"}}><AiFillEye style={{marginRight: "7px",   fontSize: "1.25rem"}}/> See Details</NavLink>
                  </div>
                  </div>
                  </div>
                )
            }
        )) 
        : 
        (
            <div className='col-md-12'>No such data found</div>
        )
        
     } 
     </div>
    </>
  )
}

export default Main

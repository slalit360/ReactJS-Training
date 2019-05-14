import React from 'react'
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const LandingPage = (props)=>{
  return (
    <div className="main-wrap">
        <div className="container">
        <Link to='/search'><i className="fa fa-search fa-2x top-bar" aria-hidden="true" ></i></Link>
            <div className="main-slide" data-sal="zoom-out"
                   data-sal-delay="300"
                   data-sal-duration="1200"
                   data-sal-easing="ease-out-bounce">
                <h1>Books Store</h1>
                
            </div>
          
        </div>
        <h2 className="cards-title">Favourite</h2>
        <Cards booksList={props.booksList}/>  
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        booksList: state.books
    }
}
export default connect(mapStateToProps)(LandingPage)

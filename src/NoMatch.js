import React from 'react'
import { NavLink } from 'react-router-dom'

function NoMatch(props){
    return (
        <div>
            {/* Display this page when URL does not match Main or Search page.
            Also provide an option to navigate to homepage*/}
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "blue"}}
                to='/'>Go back to Main Page</NavLink>
            <h3>Oops!. No page found for <code>{props.location.pathname}</code></h3>
        </div>
    )
}

export default NoMatch
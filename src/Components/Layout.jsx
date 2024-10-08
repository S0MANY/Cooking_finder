import { Outlet , NavLink } from "react-router-dom"

function LayOut() { 
    return (
        <>
            <header>
            <nav>
                <div className="linkBox"><NavLink to="/">Home page</NavLink></div>
                <div className="linkBox"><NavLink to="search/name">Search By Name</NavLink></div>
                <div className="linkBox"><NavLink to="search/ingredient">Search By Ingredirnt</NavLink></div>
                <div className="linkBox"><NavLink to="contacts">Contacts</NavLink></div>
            </nav>
            </header>
            <main>  
                <Outlet/>
            </main>
        </>
        
        
    )
}

export { LayOut }
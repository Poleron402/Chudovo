
import {Link} from 'react-router-dom'

export const MyNav = ({user, setUser})=>{
    
    return(
    <>
        <nav id = "mynav" >

                <Link id='mylink' to="/" >✨ChudovoCoin✨</Link>
                <div className = "navright">
                <Link className='mylink space-x-4' to="/watchlist">Watchlist</Link>
                {!user &&
                (<><Link className='mylink' to="/login">Login</Link>
                </>)
                }   
                </div>
        </nav>
    </>
    )

}
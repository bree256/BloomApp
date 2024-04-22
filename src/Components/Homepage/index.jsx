import { Link } from 'react-router-dom';


export const Homepage = () =>{
    return(
        <div>
           <Link to='/BraidsService'>
              <button type='submit'>Sign Up</button>
            </Link>
            <Link to='/HairServices '>
              <button type='submit'>Sign Up</button>
            </Link> 
            <Link to='/Naturalhair'>
              <button type='submit'>Sign Up</button>
            </Link>
            <Link to='/WigService'>
              <button type='submit'>Sign Up</button>
            </Link>
            <Link to='/SpaMassage'>
              <button type='submit'>Sign Up</button>
            </Link> 
            <Link to='/TattooService'>
              <button type='submit'>Sign Up</button>
            </Link> 
            <Link to='/HandsFeetServices'>
              <button type='submit'>Sign Up</button>
            </Link> 
            <Link to='/MuaServices'>
              <button type='submit'>Sign Up</button>
            </Link> 
            
            <p>
                Hello World
            </p>
        </div>
    )
}
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
export function App () {
    
    return(
        <section className='App'>
            <TwitterFollowCard 
                userName="midudev" 
                name="Miguel Ángel Durán" 
                isFollowing={true}/>
            <TwitterFollowCard 
                userName="theclich2" 
                name="diegobenito._04" 
                isFollowing={false}/>
            <TwitterFollowCard 
                userName="Jose_RamonTP" 
                name="José Ramón" 
                isFollowing={true}/>
            <TwitterFollowCard 
                userName="alejxndraruiz05" 
                name="Alejandra" 
                isFollowing={true}/>
        </section>
    )
}
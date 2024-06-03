import './App.css'
export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-header'>
                <img className='tw-followCard-avatar' alt= " El avatar de un random"src="https://pbs.twimg.com/profile_images/1584600373922131968/QGBBlCbu_400x400.jpg"></img>
                <div className='tw-followCard-info'>
                    <strong>Miguel Ángel Durán</strong>
                    <span className='tw-followCard-infoUserName'>@midudev</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
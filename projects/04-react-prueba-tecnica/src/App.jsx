import { useEffect, useState } from "react"
import './App.css'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export function App(){
    

    const [fact, setFact] = useState()
    const [imageUrl,setImageUrl] = useState()
    

// para recuperar la cita al cargar la página
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    },[])
    
    // Para recuperar la imagen cada vez que tenemos una cita nueva.
    useEffect(() =>{
        if(!fact) return

        const threeFirstWord = fact.split(' ',3).join(' ')
            console.log(threeFirstWord)

            fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })

    },[fact])

    const handleClick = ()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }

    return (
        <main>
            <h1>App de gatitos</h1>
                
                <button onClick={handleClick}>Get new fact</button>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
                
        </main>
    )
}
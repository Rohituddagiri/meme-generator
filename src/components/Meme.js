import React from "react";
import memeData from "./memeData";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState(memeData)

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    },[])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({...prevMeme,randomImage:url}))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

    return(
        <main>
            <div className="form">
                <div>
                    <label>Top text
                        <input 
                            className="form-input" 
                            type="text"
                            placeholder="Top text"
                            name="topText"
                            onChange={handleChange}
                            value={meme.topText}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input 
                        id="bottom-text"
                        className="form-input"
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} alt="memeo" className="meme-image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
import React, {useState} from 'react' 

 export const Clicker = () => {

    const [clicks, setClicks] = useState(0)

    const sumarClick = () => {
        setClicks ( clicks + 1)
    }

    return (
        <div onClick={sumarClick}>
            Clicks: {clicks}
        </div>
    )
}


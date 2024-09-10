import React from "react"

interface TileProps {
    letter: string;
    setStringToShow: React.Dispatch<React.SetStateAction<string>>;
}

const Tile = ({ letter, setStringToShow }: TileProps) => {
    const handleLetter = (e: any) => {
        setStringToShow((prev) => {
            if (prev?.length >= 2) {
                if (prev[prev?.length - 1] === prev[prev?.length - 2] && prev[prev?.length - 1] === e.target.innerHTML) {
                    prev = prev.slice(0, -2);
                    prev += '_';
                    return prev;
                } else {
                    return prev += e.target.innerHTML;
                }
            } else {
                return prev += e.target.innerHTML;
            }
        })
    }
    return (
        <div className="tile" onClick={handleLetter}>
            {letter}
        </div>
    )
}

export default Tile
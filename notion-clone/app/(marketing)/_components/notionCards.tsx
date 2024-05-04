

interface CardsProps {
    image: string | undefined,
    content: string | undefined
};


const Cards = ({
    image,
    content
}: CardsProps) => {
    return(
        <div className="flex flex-col items-center justify-center rounded-sm bg-neutral-400">
            <img src={image} alt="" />
            <h4> {content} </h4>
        </div>
    )
}

export default Cards ;
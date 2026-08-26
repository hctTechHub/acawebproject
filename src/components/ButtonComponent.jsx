const ButtonComponent = ({text,getText}) => {


    return(
        <>
            <button onClick={() => getText()}>click to {text}</button>
        </>
    )
}


export default ButtonComponent
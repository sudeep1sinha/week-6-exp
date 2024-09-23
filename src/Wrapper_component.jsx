function App(){
    return <div>
        <CardWrapper>
            <CardWrapper>
            <TextComponent>    
            </TextComponent>
            </CardWrapper>
        </CardWrapper>
        <CardWrapper>
            wot u doing
        </CardWrapper>
    </div>
}

function CardWrapper({children}){
    return <div style={
        {border:"2px solid black", padding:20}}>
        {children}
    </div>

}
function TextComponent(){
    return <div>
        wen slep mongsom
    </div>
}

export default App
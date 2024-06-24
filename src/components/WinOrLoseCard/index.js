import './index.css'
const WinOrLoseCard = (props) => {
    const {text, score, resetGameState} = props
    const changeGameState = () => {
        resetGameState()
    }
    const card = (title, text, score, imgUrl) => {
        return(
            <div className='won-card'>
                <div className='score'>
                    <h1 className='heading'>{title}</h1>
                    <p className='description'>{text}</p>
                    <p className='scores'>{score}</p>
                    <button type='button' onClick={changeGameState} className='btnn'>Play Again</button>
                </div>
                <img className='imgg' src={imgUrl} alt='win or lose' />
            </div>
        )
    }
    return(
        text==='won'? card('You Won','Best Score', `${score}/12`, 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'):card('You Lose','Score', `${score}/12`, 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png')
    )
}

export default WinOrLoseCard
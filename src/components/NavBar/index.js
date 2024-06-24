import './index.css'
const NavBar = (props) => {
    const {score, topScore,gameState} = props
    const scoresTab = (score, topScore) => {
        return(
            <div className='scores'>
                <p className='score-heading'>Score: {score}</p>
                <p className='score-heading'>Top Score: {topScore}</p>
            </div>
        )
    }


    return(
        <nav className='navbar'>
            <div className='logo'>
                <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emoji logo" />
                <h1 className='logo-heading'>Emoji Game</h1>
            </div>
            {gameState? scoresTab(score, topScore) :null}
        </nav>
    )
}

export default NavBar
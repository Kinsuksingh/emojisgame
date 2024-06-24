import { Component } from "react";
import './index.css'
import NavBar from "../NavBar";
import WinOrLoseCard from "../WinOrLoseCard";
import EmojiCard from "../EmojiCard";

class EmojiGame extends Component {
    initialEmojisList = this.props.emojisList;
    state = {
        score: 0,
        topScore: 0,
        emojisList: this.initialEmojisList,
        checkList: [],
        gameState: true,
        text: 'won',
    };

    shuffledEmojisList = () => {
        const { emojisList } = this.props;
        return emojisList.sort(() => Math.random() - 0.5);
    };

    checkWon = () => {
        const { score } = this.state;
        if (score === 11) {
            this.setState({ gameState: false, text: 'won' });
            console.log('won');
        }
    };

    matchPreviousEmoji = (id) => {
        const {checkList } = this.state;
        const list = this.shuffledEmojisList();
        this.setState({ emojisList: list });
    
        if (!checkList.includes(id)) {
            this.setState((prev) => ({
                checkList: [...prev.checkList, id],
                score: prev.score + 1,
            }));
            this.checkWon();
        } else {
            
            this.setState({ gameState: false, text: 'loss'});
        }
    };

    handlePlayAgain = () => {
        const {score, topScore} = this.state
        const newTopScore = score > topScore ? score : topScore;
        this.setState({
            checkList: [],
            gameState: true,
            score: 0,
            text: 'win',
            topScore: newTopScore 
        });
    };

    resetGameState = () => {
        this.handlePlayAgain();
    };

    card = () => {
        const { emojisList } = this.state;
        return (
            <ul className="cards">
                {emojisList.map((emoji) => (
                    <EmojiCard
                        key={emoji.id}
                        matchPreviousEmoji={this.matchPreviousEmoji}
                        emojiDetails={emoji}
                    />
                ))}
            </ul>
        );
    };

    render() {
        const { score, topScore, gameState, text } = this.state;
        return (
            <div className="main-section">
                <NavBar gameState={gameState} score={score} topScore={topScore} />
                <div className="cards-section">
                    {gameState ? (
                        this.card()
                    ) : (
                        <WinOrLoseCard text={text} score={score} resetGameState={this.handlePlayAgain} />
                    )}
                </div>
            </div>
        );  
    }
}

export default EmojiGame;

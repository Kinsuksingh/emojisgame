import './index.css'
const EmojiCard = (props) => {
    const {matchPreviousEmoji,emojiDetails} = props
    const {id, emojiName, emojiUrl} = emojiDetails
    const clickEmoji = () => {
        matchPreviousEmoji(id)
    }
    return(
        <li className='emoji-card' onClick={clickEmoji}>
            <buttonn type="button" className='btnnn'><img className='img' src={emojiUrl} alt={emojiName} /></buttonn>
        </li>
    )
}

export default EmojiCard
import { Avatar } from '@material-ui/core'
import React,{ useState }  from 'react'
import "./PostManager.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function PostManager() {

    const [input,setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        setInput("");
        setImageUrl("");
    }

    return (
        <div className="postManager">
            <div className="postManager__top">
                <Avatar/>
                <form>
                    <input 
                        value={input} 
                        className="postManager__input"
                        type="text" 
                        placeholder={`What's on your mind?`}
                        onChange={e => setInput(e.target.value)}/>
                    <input
                        value={imageUrl}
                        placeholder="Image URL (Optional)"
                        type="text"
                        onChange={e => setImageUrl(e.target.value)}
                        />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="postManager__bottom">
                <div className="postManager__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="postManager__option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="postManager__option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default PostManager

import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import PostManager from './PostManager'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <PostManager/>
            <Post
                profilePic="https://avatars.githubusercontent.com/u/28591018?v=4"
                message="Wow this works"
                timestamp="timestamp"
                username="devd"
                image="https://avatars.githubusercontent.com/u/28591018?v=4"
            />
            <Post
                profilePic="https://avatars.githubusercontent.com/u/28591018?v=4"
                message="Wow this works"
                timestamp="timestamp"
                username="devd"
                image="https://avatars.githubusercontent.com/u/28591018?v=4"
            />

        </div>
    )
}

export default Feed

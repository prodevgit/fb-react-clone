import React, { useEffect,useState }from 'react'
import './StoryReel.css'
import Story from './Story'
import apiService from '../../services/api/ApiService';


function StoryReel() {
    let next_url = "";
    let prev_url = "";
    const [stories, setStories] = useState([]);

    useEffect(() => {
        _getStories();
    }, []);

    function _getStories() {
        apiService.storyApi.getStoryList(5).then((res) => {
            next_url = res.next;
            prev_url = res.previous;
            if (res.results){
                let arr = _parseStories(res.results);
                setStories(arr);
            }
        })
      }

    function _parseStories(stories) {
            return stories.map((story) => {
            return story;
            });
        
      }

    return (
        <div className="storyReel">
            {stories.map((story) => (
                // <li key={task.id}>{task.name}</li>
                <Story
                    image={story.image}
                    profileSrc="https://avatars.githubusercontent.com/u/28591018?v=4"
                    title={story.title}
                />
            ))}
            
            {/* <Story
            image="https://scontent.fccj3-1.fna.fbcdn.net/v/t1.6435-9/198509617_2817531075176545_6671405271057835515_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=5b7eaf&_nc_ohc=70CUAeDwe9kAX_ZQgMx&_nc_ht=scontent.fccj3-1.fna&oh=710114a290febe594e79762019fe2c27&oe=60DEC043"
            profileSrc="https://avatars.githubusercontent.com/u/28591018?v=4"
            title="Dev"
            /> */}
        </div>
    )
}

export default StoryReel

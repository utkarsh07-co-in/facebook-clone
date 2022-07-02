import React from 'react';
import Story from "./Story"
import "../styles/StoryReel.css";

function StoryReel({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="storyReel">
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />

            <Story image={image}
                profileSrc={profileSrc}
                title={title} />
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />


        </div>
    );
};
export default StoryReel;
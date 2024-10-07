import React from 'react';
import './MyStory.css';

const MyStory: React.FC = () => {
  return (
    <div className="my-story-container">
      <div className="video-container">
        <div className="gradient-overlay"></div> {/* Gradient overlay over the video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1329158448900003468/TEAM/e2a2/213c/-50b0-4f12-8add-92f5d6bf578f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kbtzo8~rWCANb-oROBxBi0d4xsc-OGgbQUu14frqSo7GOMm9x6RCmlmFHfR-qLTVFBwv5Z7wFHcvdBsUBykAmY6h1z-wzA-Y5~1cpPaoiisgBry42k3r9dfvZQHaWucQ1Buyd1XkZA10z06UC6LrNpx9K9fVbPhGLkUrO5AmOw8rilSov5qOrXw-i4y3wsJR6bb4CrIHY5y6xw105lZZxR1jOApHzekyDK-P-fugEQTwuSB5nBPaAzaF69NKBmiU8-NrCAKnq9kHx~bSaSd8OT60haUIwcHyq2bcGdnPhZ2A~OBVLT8NACqliZsOf~Rk5WVVn2ONNaV6hYvUj2TdNw__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-section resizable">
        <h2>My Story</h2>
        <p>This is where you tell your story. You can write about your journey, passions, and what drives you as a developer.</p>
      </div>
    </div>
  );
};

export default MyStory;

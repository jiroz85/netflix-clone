import React from "react";
import "./ReasonsToJoin.css";

const ReasonsToJoin = () => {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      logo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      video:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favorites easily and always have something to watch.",
      logo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      isStrangerThings: true,
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      logo: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
      video:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      logo: "https://occ-0-5273-41.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKmTi2tjqeydYXvZnW4WIfX8jxU3tMfE8yZ2LopdJAcVeRgPboUYIYjeDUCULpQ2LrlhFUCTd.png",
    },
  ];

  return (
    <div className="reasons-container">
      <h2>More Reasons to Join</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="reason-content">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
            <div className="reason-media">
              <div className="reason-logo">
                <img src={reason.logo} alt={reason.title} />
                {reason.video && (
                  <div className="video-container">
                    <video autoPlay playsInline muted loop>
                      <source src={reason.video} type="video/mp4" />
                    </video>
                  </div>
                )}
                {reason.isStrangerThings && (
                  <div className="stranger-things">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                      alt="Stranger Things"
                      className="stranger-things-poster"
                    />
                    <div className="stranger-things-text">
                      <div>Stranger Things</div>
                      <div>Downloading...</div>
                    </div>
                    <div className="download-icon">⏬</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToJoin;

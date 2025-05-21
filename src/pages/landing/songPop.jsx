import React, { useState } from "react";
import SongPopup from "../popup/Popup";

const page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const videoId = "WPl10ZrhCtk";
  return (
    <div>
      <div>This is about </div>
      <div className="p-4">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Play Song
        </button>

        {showPopup && (
          <SongPopup videoId={videoId} onClose={() => setShowPopup(false)} />
        )}
      </div>
    </div>
  );
};

export default page;

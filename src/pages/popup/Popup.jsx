import React from "react";

const SongPopup = ({ videoId, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-4 shadow-xl w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Now Playing</h2>
          <button
            onClick={onClose}
            className="text-red-600 hover:bg-red-700 hover:text-white
          rounded-full px-3 border-[1.5px] border-red-600 py-1 font-bold"
          >
            X
          </button>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SongPopup;

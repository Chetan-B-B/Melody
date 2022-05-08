import React from "react";

const RecentlyPlayedList = ({ image, songName, creatorName }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <div className="m-4 `">
          <img className="rounded-t-lg " src={image} alt="" />
        </div>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{songName}</h5>
          <p className="text-gray-700 text-base mb-4">{creatorName}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayedList;

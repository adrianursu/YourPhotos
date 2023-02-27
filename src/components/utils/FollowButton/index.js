import { useState } from "react";

const FollowButton = () => {
  const [follow, setFollow] = useState(true);

  const handleClick = () => {
    if (follow) {
      console.log("You follow this user!");
      setFollow(!follow);
    } else {
      console.log("You unfollowed this user!");
      setFollow(!follow);
    }
    console.log(follow);
  };

  return (
    <button
      style={{ background: "rgb(59, 67, 79)" }}
      className="text-white px-16 py-2 rounded-3xl"
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    >
      {follow ? "Follow me" : "Unfollow me"}
    </button>
  );
};

export default FollowButton;

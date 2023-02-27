import FollowButton from "../utils/FollowButton";

const UserInfo = ({ user }) => {
  return (
    <div className="bg-gray-800 text-center p-6 rounded-xl sticky top-0">
      <div className="text-5xl font-bold text-white pb-3">{user.name}</div>
      <div className="text-xl text-white pb-3">{user.website}</div>
      <FollowButton />
    </div>
  );
};

export default UserInfo;

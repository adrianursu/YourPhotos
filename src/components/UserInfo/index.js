const UserInfo = () => {
  return (
    <div className="bg-gray-800 text-center p-6 rounded-xl">
      <div className="text-5xl font-bold text-white pb-3">Adrian Ursu</div>
      <div className="text-xl text-white pb-3">www.adrian-ursu.com</div>
      <button
        style={{ background: "rgb(59, 67, 79)" }}
        className="text-white px-16 py-2 rounded-3xl"
        target="_blank"
        rel="noreferrer"
      >
        Follow me
      </button>
    </div>
  );
};

export default UserInfo;

const Grid = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-16 pt-16 pb-16">
      <div className="w-96 h-96 bg-red-300 rounded-md" />

      <div className="w-96 h-96 grid grid-cols-2 grid-rows-2 gap-10">
        <div className="w-auto h-auto bg-blue-300" />
        <div className="w-auto h-auto bg-yellow-300" />
        <div className="w-auto h-auto bg-orange-300" />
        <div className="w-auto h-auto bg-cyan-900" />
      </div>

      <div className="w-96 h-96 bg-red-300" />

      <div className="w-96 h-96 bg-red-300" />
      <div className="w-96 h-96 bg-red-300" />
      <div className="w-96 h-96 bg-red-300" />

      <div className="w-96 h-96 grid grid-cols-2 grid-rows-2 gap-10">
        <div className="w-auto h-auto bg-blue-300" />
        <div className="w-auto h-auto bg-yellow-300" />
        <div className="w-auto h-auto bg-orange-300" />
        <div className="w-auto h-auto bg-cyan-900" />
      </div>

      <div className="w-96 h-96 bg-red-300" />

      <div className="w-96 h-96 grid grid-cols-2 grid-rows-2 gap-10">
        <div className="w-auto h-auto bg-blue-300" />
        <div className="w-auto h-auto bg-yellow-300" />
        <div className="w-auto h-auto bg-orange-300" />
        <div className="w-auto h-auto bg-cyan-900" />
      </div>
    </div>
  );
};

export default Grid;

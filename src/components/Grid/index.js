import { getPhotos } from "@/pages/api";
import { useEffect, useState } from "react";
import Image from "next/image";

const Grid = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const photos = await getPhotos();
      setPhotos(photos);
    }

    fetchPhotos();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 justify-items-center lg:gap-y-16 lg:pt-16 lg:pb-16 sm:grid-cols-2 sm:gap-y-8 sm:px-8 sm:pt-8">
      {photos.map((photo) => (
        <div key={photo.id}>
          <div className="lg:w-96 lg:h-96 md:w-48 md:h-48 sm:w-48 sm:h-48">
            <Image
              src={photo.url}
              alt={photo.title}
              width={600}
              height={600}
              className="rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;

{
  /*DEMO PURPOSES*/
  /* <div className="w-96 h-96 bg-red-300 rounded-md" />

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
</div> */
}

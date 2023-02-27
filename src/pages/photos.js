import Image from "next/image";
import { getPhotos } from "./api";

export default function PhotosPage({ photos }) {
  return (
    <div>
      <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image src={photo.url} alt={photo.title} width={150} height={150} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const photos = await getPhotos();

  return {
    props: { photos },
  };
}

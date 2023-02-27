export async function getPhotos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const photos = await res.json();

  return photos;
}

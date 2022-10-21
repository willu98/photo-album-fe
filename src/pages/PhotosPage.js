import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { PhotoCard } from "../components/PhotoCard";
import { getPhotos } from "../util/HttpRequests";
const PhotosPage = () => {
  const [loadedPhotos, setLoadedPhotos] = useState();

  useEffect(() => {
    const loadPhotos = async () => {
      const photos = await getPhotos();
      setLoadedPhotos(photos);
    };
    loadPhotos();
  }, []);

  return (
    <Box sx={{ width: 300 }}>
      {loadedPhotos &&
        loadedPhotos.map((photo) => (
          <PhotoCard key={photo.file_url} img={photo.file_url} alt="test" />
        ))}
    </Box>
  );
};
export default PhotosPage;

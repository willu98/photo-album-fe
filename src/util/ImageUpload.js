import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Card,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import React, { useRef, useState } from "react";
import { getPhotoByURL, uploadPhoto } from "./HttpRequests";

const ImageUpload = ({ getNewPhoto }) => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState();
  const [imgURL, setImgURL] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const inputFile = useRef(null);

  const formData = new FormData();

  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      setImage(files[0]);
      setOpenModal(true);
      setImgURL(window.URL.createObjectURL(files[0]));
    }
  };

  const handleInput = (event) => {
    const { value } = event.target;
    setFileName(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    formData.set("file", image);
    const response = await uploadPhoto(formData, fileName);
    if (response.data.response) {
      const photo = await getPhotoByURL(response.data.response.file_url);
      getNewPhoto(photo);
      setOpenModal(false);
    }
  };

  return (
    <>
      <Card
        sx={{
          height: "200px",
          width: "250px",
        }}
      >
        <CardActionArea onClick={() => inputFile.current.click()}>
          <AddIcon sx={{ fontSize: 200 }} />
        </CardActionArea>
        <input ref={inputFile} onChange={handleFileUpload} type="file" />
      </Card>

      <Dialog
        open={openModal}
        onClose={() => {
          setImage(false);
          setOpenModal(false);
        }}
      >
        <DialogTitle align="center">Upload Your Photo</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <img height="200" width="250" src={imgURL} alt=""></img>
          <TextField
            autoFocus
            id="user_filename-input"
            margin="dense"
            name="user_filename"
            label="Name"
            onChange={handleInput}
            variant="standard"
            fullWidth
          />
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleSubmit}>
            Upload Photo
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageUpload;

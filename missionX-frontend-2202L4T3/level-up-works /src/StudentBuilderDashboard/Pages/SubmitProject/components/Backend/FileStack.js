import React, { useState } from "react";
import { PickerOverlay } from "filestack-react-18";
// import UploadImageAPI from "../../../../../../Backend/UploadImageAPI";

// function FileStack() {
// The original code was writen like this:
const FileStack = () => {
    const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(true);
    const [imageUrl, setImageUrl] = useState();
  
    const FILESTACK_API_KEY = process.env.REACT_APP_FILESTACK_API_KEY; 

    // const handleVisible = () => {
    //   setIsPickerOverlayVisible(!isPickerOverlayVisible);
    // };

// send info to the API for uploading to database
    // const uploadImage = (imageUrl) => {
    //     UploadImageAPI(imageUrl)
    // }    

    return (
        <div>
          {isPickerOverlayVisible && (
            <PickerOverlay
              apikey={FILESTACK_API_KEY}
              onSuccess={(result) => {
                setImageUrl(result.filesUploaded[0].url);
                setIsPickerOverlayVisible(false);
                // uploadImage(imageUrl);
              }}
            />
          )}
        </div>
    );
  };
  
  export default FileStack;
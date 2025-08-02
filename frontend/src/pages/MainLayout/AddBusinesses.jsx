import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import { useState } from "react";
import uploadImage from '../../assets/uploadImage.jpg'

const AddBusinesses = () => {
  const [avatarSrc, setAvatarSrc] = useState();

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      // read the file as a data url
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Image Upload</label>
          <ButtonBase
            component="label"
            role={undefined}
            tabIndex={-1} // prevent label from tab focus
            aria-label="Avatar image"
            sx={{
              borderRadius: "40px",
              "&:has(:focus-visible)": {
                outline: "2px solid",
                outlineOffset: "2px",
              },
            }}
          >
            <img alt="Upload new avatar" src={avatarSrc || uploadImage} width={200} height={250}/>
            <input
              type="file"
              accept="image/*"
              style={{
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px",
              }}
              onChange={handleAvatarChange}
            />
          </ButtonBase>
        </div>
        <div>
          <label htmlFor="business_name">Business Name</label>
          <input
            type="text"
            id="business_name"
            className="border p-2 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBusinesses;

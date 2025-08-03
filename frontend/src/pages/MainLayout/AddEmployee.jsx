import React, { useState } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import uploadImage from "../../assets/uploadImage.jpg";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';

const AddEmployee = () => {
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
      <form
        action=""
        className="w-full grid md:grid-cols-2 gap-4"
      >
        <div>
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            className="border p-2 rounded-md w-full md:w-60 block"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            className="border p-2 rounded-md w-full md:w-60  block"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border p-2 rounded-md w-full md:w-60  block"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border p-2 rounded-md w-full md:w-60 block"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="input_image">Image Upload</label>
          <div className="block border  p-2 w-55">
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
              <img
                alt="Upload new avatar"
                src={avatarSrc || uploadImage}
                width={200}
                height={250}
              />
              <input
                id="input_image"
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
        </div>
        <div className="mt-4">
          <Button variant="contained" startIcon={<SaveIcon />}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;

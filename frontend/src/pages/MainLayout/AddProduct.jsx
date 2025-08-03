import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import uploadImage from "../../assets/uploadImage.jpg";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

const addProduct = () => {
  const [avatarSrc, setAvatarSrc] = useState()

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0]

    if (file) {
      // ead the file as a data url
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result)
      }
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <form action="" className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="">Product Code</label>
          <input
            type="number"
            className="border p-2 rounded-md w-full md:w-60 block"
          />
        </div>
        <div>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            className="border p-2 rounded-md w-full md:w-60 block"
          />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            className="border p-2 rounded-md w-full md:w-60 block"
          />
        </div>
        <div>
          <label htmlFor="">Quantity</label>
          <input
            type="number"
            className="border p-2 rounded-md w-full md:w-60 block"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="input_image">Image Upload</label>
          <div className="block border p-2 w-55">
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
        <div>
          <Button variant="contained" startIcon={<SaveIcon />}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default addProduct;

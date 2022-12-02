import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

const UpdateModal = ({ open, setOpen, data, putHandle }) => {
  const [changeData, setChangeData] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    const changes = { ...data[0], [name]: value };
    setChangeData(changes);
  };

  const handleSave = () => {
    putHandle(changeData);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {data?.map((item) => {
              const { id, username, email, password } = item;
              return (
                <Box key={id}>
                  <TextField
                    fullWidth
                    name="username"
                    label="User Name"
                    defaultValue={username}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    margin="dense"
                    defaultValue={email}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    margin="dense"
                    defaultValue={password}
                    onChange={handleChange}
                  />
                </Box>
              );
            })}
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ display: "block", margin: "auto" }}
              onClick={handleSave}
            >
              Save User
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default UpdateModal;

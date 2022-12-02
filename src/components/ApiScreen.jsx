import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";

const ApiScreen = ({ data, getHandle }) => {
  useEffect(() => {
    getHandle();
  }, []);

  return (
    <>
      {data?.length > 0 && (
        <Box
          sx={{
            margin: "2rem auto 1rem",
            width: "400px",
            border: "2px solid salmon",
            borderRadius: "10px",
            backgroundColor: "salmon",
            color: "white",
          }}
        >
          {data?.map((item) => (
            <Box key={item.id}>
              <Typography>User Name: {item.username}</Typography>
              <Typography>Email: {item.email}</Typography>
              <Typography>Password: {item.password}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default ApiScreen;

import React, { useState } from "react";
import ApiScreen from "../components/ApiScreen";
import FormComponent from "../components/Form";
import axios from "axios";
import UpdateModal from "../components/UpdateModal";
import NavBar from "../components/Navbar";
import { Typography } from "@mui/material";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_url;
  const submitHandle = async (value) => {
    try {
      await axios.post(`${url}`, value);
      getHandle();
    } catch (error) {
      console.log(error);
    }
  };

  const getHandle = async () => {
    try {
      const { data } = await axios(url);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const putHandle = async (value) => {
    try {
      await axios.put(`${url}/${data[0].id}`, value);
      getHandle();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandle = async () => {
    try {
      await axios.delete(`${url}/${data[0].id}`);
      getHandle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <Typography variant="h4" mt={1}>
        -- Api Authentication --
      </Typography>
      <ApiScreen data={data} getHandle={getHandle} />
      <FormComponent
        data={data}
        submitHandle={submitHandle}
        deleteHandle={deleteHandle}
        setOpen={setOpen}
      />
      <UpdateModal
        open={open}
        setOpen={setOpen}
        data={data}
        putHandle={putHandle}
      />
    </div>
  );
};

export default Home;

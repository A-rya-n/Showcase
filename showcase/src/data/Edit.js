import axios from "axios";

const url = "http://localhost:3001/shops";

export const AddShop = async (data) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export const DeleteShop = async (id) => {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};


import axios from "axios";

const url = "http://localhost:3000/shops";

export const AddItem = async (data) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
import axios from "axios";

const url = "http://localhost:3000/shops";

export const AddShop = async (data) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

import axios from "axios";

const url = "http://localhost:3000/shops";
const urlP = "http://localhost:3001/products";

export const AddShop = async (data) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
export const AddProduct = async (data) => {
  try {
    return await axios.post(urlP, data);
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
export const DeleteProduct = async (num, nam) => {
  try {
    return await axios.delete(`${urlP}?Sno=${num}&Sname=${nam}`);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};


export const GetShop = async (name) => {
  try {
    return await axios.get(`${url}?name=${name}`);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
export const GetProduct = async (no, name) => {
  try {
    return await axios.get(`${urlP}?Sno=${no}&Sname=${name}`);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

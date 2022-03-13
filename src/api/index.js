import axios from "axios";
const API_KEY = "26115892-1b9c38fa7992a7d8b6ed06681";
export const getImages = async (valueSearch) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api?key=${API_KEY}&q=${valueSearch}&image_type=photo&pretty=true`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

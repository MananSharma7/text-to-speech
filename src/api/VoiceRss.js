import axios from "axios";

const KEY = "3401e1a55a99482f8251937b32df24f1";

export default axios.create({
  baseURL: "http://api.voicerss.org/",
  params: {
    key: KEY,
    c: 'MP3'
  },
});

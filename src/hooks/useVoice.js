import { useState, useEffect } from "react";
import voiceRss from "../api/VoiceRss";

const useVideos = (searchTerm) => {
  console.log(searchTerm)
  const [speech, setSpeech] = useState([]);

  useEffect(() => {
    search(searchTerm);
  }, []);

  const search = async (searchTerm) => {
    const response = await voiceRss.get("", {
      responseType: "blob",
      params: {
        hl: searchTerm[0],
        src: searchTerm[1],
      },
    });
    setSpeech(response.data);
  };
  return [speech, search];
};

export default useVideos;

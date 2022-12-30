import axios from 'axios';

const api = (baseURL) =>
   axios.create({
      baseURL,
      headers: {
         'Content-Type': 'application/json',
      },
      params: {
         key: process.env.REACT_APP_YOUTUBE_KEY,
         part: 'snippet',
         maxResults: 4,
         order: 'date',
         channelId: process.env.REACT_APP_YOUTUBE_CHANNEL_ID,
      },
   });

export default api;

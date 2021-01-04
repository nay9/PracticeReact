import axios from 'axios';


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID ZAM8aFCFeCc1p9vwPSAebirTbTyZmmIiE7TNPky7SmM",
      }
})

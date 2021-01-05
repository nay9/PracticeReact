import axios from 'axios';



const KEY = 'AIzaSyD3eR6LB4BAN_ucxnNa0geaFWRqkazaY7g';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }

})
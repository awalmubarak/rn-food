import axios from 'axios';

export default axios.create( {
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer NiUKcVeBmzp223C9qtUQzxShbx0taQjH8_qfy81kkEWNffviz_Uzn55XV-6kEQr7XC3e37GdoS5Q8XiKSTA4B23igDjQrOkxbgjVFFtv-NiKUPlwhDzIXTWLQ8KIXXYx'
    }
})
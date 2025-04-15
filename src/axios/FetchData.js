import axios from "axios";

const FetchData = async() => {
    try {
        const response = await axios.get('https://67eb8197aa794fb3222a7963.mockapi.io/users/users');
        console.log("response ",response.data);
        return response.data;
    }
    catch(error) {
        throw new error;
    }
}
export default FetchData;
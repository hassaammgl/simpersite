import axios from "axios";

export const AxiosAuth = {
  login: async(data) => {},
  signup: async(data) => {
    const { username, email, password } = data;
    return await axios.post("",{
        data: {

        },Headers:{
            
        }
    }    )
  },
};

import axios from "utils/axios";

export const login = async () => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/admin/token`,
    {
      userId: 1,
    }
  );
  console.log(response);
};

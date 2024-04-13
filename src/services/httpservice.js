import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

axios.interceptors.response.use(null, (error) => {
	const expectedErrors =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;
	if (!expectedErrors) {
		console.log(error);
		toast.error("There was a problem with the server", {
			position: "top-right",
			closeOnClick: true,
		});
	}

	return Promise.reject(error);
});
export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};

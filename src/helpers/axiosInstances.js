import axios from 'axios'

export const ApiRequest = () => {

	const axiosinstance = axios.create({
		baseURL: "https://rimac-front-end-challenge.netlify.app/api"
	})

	return axiosinstance
}
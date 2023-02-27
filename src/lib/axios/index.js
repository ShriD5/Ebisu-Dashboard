import axios from 'axios'

const getApi = async () => {
  const axiosInstance = axios.create({
    baseURL: 'http://80.209.226.76:4000/api'
  })

  return axiosInstance
}

export default getApi

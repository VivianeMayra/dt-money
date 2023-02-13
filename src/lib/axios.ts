import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VIT_APP_BASEURL,
})

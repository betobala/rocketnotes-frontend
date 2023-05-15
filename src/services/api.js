import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-fu4l.onrender.com"
})
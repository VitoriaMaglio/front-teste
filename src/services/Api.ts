import axios from "axios";
//instância com base URL
const api = axios.create({
    baseURL: "http://localhost:8080/ddd-facilitareabijavaweb/api"
})
export default api

//fetch: forma do navegador de enviar requisições HTTP 
//axios: biblioteca js para requisições HTTP, permite se comunicar com APIs (backend) de forma simples. 

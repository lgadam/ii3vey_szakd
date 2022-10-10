import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzkwMWVmNjFmMGZkYjA0YjY5ZmM0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTQxMDk0OCwiZXhwIjoxNjY1NjcwMTQ4fQ.IMBo3T1IiB10jZjobKvGsGaaCCZh4yZUWliN1SwkauE";
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});
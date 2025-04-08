import { httpAxios } from "@/helper/httphelper";

export async function getBlog() {
    try {
        const response = await httpAxios.get("/api/blogs");
        return response.data;
    } catch (error) {
        console.error("Error Fetching blogs:", error.message);
        throw error;
    }
}
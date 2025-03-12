import API_BASE_URL from "./config";
import axios from "axios";

export const uploadResume = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading resume:", error);
        throw error;
    }
};

export const analyzeLinkedIn = async (linkedinUrl) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/linkedin`, { url: linkedinUrl });
        return response.data;
    } catch (error) {
        console.error("Error analyzing LinkedIn profile:", error);
        throw error;
    }
};


import { useState } from "react";
import { uploadResume } from "../api";

export default function UploadResume() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file first.");
            return;
        }
        
        const formData = new FormData();
        formData.append("file", file);

        try {
            const result = await uploadResume(formData);
            setMessage(`Upload successful: ${result.filename}`);
        } catch (error) {
            setMessage("Upload failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Upload Resume</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
}


import { useState } from "react";
import { analyzeLinkedIn } from "../api";

export default function AnalyzeLinkedIn() {
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const [message, setMessage] = useState("");

    const handleAnalyze = async () => {
        if (!linkedinUrl) {
            setMessage("Please enter a LinkedIn profile URL.");
            return;
        }
        
        try {
            const result = await analyzeLinkedIn(linkedinUrl);
            setMessage(`Analysis successful: ${result.message}`);
        } catch (error) {
            setMessage("Analysis failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Analyze LinkedIn Profile</h2>
            <input type="text" placeholder="Enter LinkedIn URL" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} />
            <button onClick={handleAnalyze}>Analyze</button>
            {message && <p>{message}</p>}
        </div>
    );
}


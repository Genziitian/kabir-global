import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sendLeadEvent } from './conversions.js';

const app = express();
// Enable CORS for frontend during development
app.use(cors());
app.use(express.json());

app.post("/api/track-lead", async (req, res) => {
    try {
        const { email, phone, firstName, lastName, sourceUrl, eventID } = req.body;
        const userAgent = req.headers["user-agent"];

        console.log(`[CAPI] tracking lead for ${email || phone} with eventId: ${eventID}`);

        const result = await sendLeadEvent({
            email,
            phone,
            firstName,
            lastName,
            userAgent,
            sourceUrl,
            eventID,
        });

        res.json({ success: true, result });
    } catch (err) {
        console.error("FB Conversions API error:", err.response?.data || err.message);
        res.status(500).json({ success: false, error: err.message, details: err.response?.data });
    }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

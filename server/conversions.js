import axios from 'axios';
import crypto from 'crypto';

const PIXEL_ID = process.env.FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const API_VERSION = process.env.FB_API_VERSION || "v19.0";
const TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE;

// Hash helper (Facebook requires SHA-256 for PII)
const hash = (value) => {
    if (!value) return null;
    return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
};

/**
 * Sends a Lead event to Facebook's Conversions API.
 * @param {Object} data - Contains email, phone, firstName, lastName, userAgent, sourceUrl
 */
const sendLeadEvent = async ({ email, phone, firstName, lastName, userAgent, sourceUrl, eventID }) => {
    const eventTime = Math.floor(Date.now() / 1000);

    const payload = {
        data: [
            {
                event_name: "Lead",
                event_id: eventID, // same as pixel eventID for deduplication
                event_time: eventTime,
                action_source: "website",
                event_source_url: sourceUrl,
                user_data: {
                    em: email ? [hash(email)] : [],
                    ph: phone ? [hash(phone)] : [],
                    fn: firstName ? [hash(firstName)] : [],
                    ln: lastName ? [hash(lastName)] : [],
                    client_user_agent: userAgent, // NOT hashed
                },
            },
        ],
    };

    // If testing, include the test_event_code
    if (TEST_EVENT_CODE) {
        payload.test_event_code = TEST_EVENT_CODE;
    }

    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    try {
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        console.error("Facebook CAPI Error Payload:", JSON.stringify(payload, null, 2));
        throw error;
    }
};

export { sendLeadEvent };

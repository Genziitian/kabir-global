/**
 * Sends lead data to our backend for Facebook Conversions API tracking.
 * @param {Object} formData - email, phone, firstName, lastName
 */
export const trackLeadCAPI = async (formData) => {
    try {
        const response = await fetch("/api/track-lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: formData.email || '',
                phone: formData.phone || '',
                firstName: formData.firstName || '',
                lastName: formData.lastName || '',
                sourceUrl: window.location.href,
                eventID: formData.eventID
            }),
        });

        const result = await response.json();
        console.log("[CAPI-TRACKING]", result);
        return result;
    } catch (err) {
        console.error("[CAPI-TRACKING] Error:", err.message);
        return { success: false, error: err.message };
    }
};

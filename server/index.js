import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // allow frontend access

app.get("/api/yelp", async (req, res) => {
    const { term, location, sortBy } = req.query;

    try {
        const response = await fetch(
            `https://api.yelp.com/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${sortBy}&limit=12`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
                },
            }
        );

        if (!response.ok) {
            const err = await response.json();
            console.error("Yelp error:", err);
            return res.status(response.status).json(err);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: "Server failed to fetch Yelp data." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
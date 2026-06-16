
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "Application Service Request API is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
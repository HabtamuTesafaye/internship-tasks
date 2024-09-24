const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Correct path to views

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Serve static files from 'uploads'
app.use('/uploads', express.static(path.join(__dirname, '../upload')));

// Set up multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../upload');
        // Check if the directory exists, if not, create it
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save file with a timestamp to avoid name collisions
    }
});

const upload = multer({ 
    storage: storage
});


// Render the form
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res, next) => {
    upload.single('photo')(req, res, (err) => {
        if (err) {
            console.error(err);
            return res.status(400).send('Error uploading file.');
        }

        const { firstName, lastName, grandFatherName, email, birthDate } = req.body;
        const photo = req.file ? req.file.filename : null; // Get the filename if uploaded

        if (!photo) {
            return res.send('No photo uploaded.');
        }

        res.render('result', { firstName, lastName, grandFatherName, email, birthDate, photo });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

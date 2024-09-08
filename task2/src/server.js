const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const PORT = process.env.PORT || 3001;

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Express session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// Connect Flash
app.use(flash());

// Ensure 'upload' directory exists
const uploadDir = path.join(__dirname, '../upload');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 } // 1 MB limit
});

// Render the form
app.get('/', (req, res) => {
    const error = req.flash('error');
    res.render('index', { error: error[0] || null });
});

let Tempstorage = [];

app.post('/submit', (req, res, next) => {
    upload.single('photo')(req, res, (err) => {
        if (err) {
            let errorMessage = 'Error uploading file.';
            if (err.code === 'LIMIT_FILE_SIZE') {
                errorMessage = 'File too large. Please upload a file smaller than 1 MB.';
            }
            req.flash('error', errorMessage);
            return res.redirect('/');
        }

        const { firstName, lastName, grandFatherName, email, birthDate, bio, terms } = req.body;

        let errorMessage = '';

        if (!email.includes('@')) {
            errorMessage = 'Invalid email address.';
        } else if (!terms) {
            errorMessage = 'You must agree to the terms and conditions.';
        } else {
            // Convert birthDate to Date object and set time to midnight
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set to midnight
            const birthDateValue = new Date(birthDate);
            birthDateValue.setHours(0, 0, 0, 0); // Set to midnight

            // Check if birthDateValue is valid and in the past
            if (isNaN(birthDateValue.getTime()) || birthDateValue >= today) {
                errorMessage = 'Please enter a valid birth date in the past.';
            } else if (bio.trim() === '') {
                errorMessage = 'Bio is required.';
            }
        }

        if (errorMessage) {
            req.flash('error', errorMessage);
            return res.redirect('/');
        }

        const photo = req.file ? req.file.filename : null;

        // Store validated data
        Tempstorage.push({ firstName, lastName, grandFatherName, email, birthDate, bio, photo });
        console.log(Tempstorage);

        res.render('result', { firstName, lastName, grandFatherName, email, birthDate, bio, photo });
    });
});


// Serve static files from 'upload' directory
app.use('/uploads', express.static(uploadDir));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

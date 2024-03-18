// Create web server with express
const express = require('express');
const app = express();

// Use static files
app.use(express.static('public'));

// Add comments
app.get('/comments', (req, res) => {
    res.json([
        {
            name: 'John',
            comment: 'This is great!',
        },
        {
            name: 'Jane',
            comment: 'Nice work!',
        },
    ]);
});

// Start web server on port 3000
app.listen(3000, () => {
    console.log('Web server is running on port 3000');
});
```

```html
<!-- File: index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>

    <div id="comments"></div>

    <script>
        fetch('/comments')
            .then(response => response.json())
            .then(comments => {
                const commentsDiv = document.getElementById('comments');
                for (const comment of comments) {
                    commentsDiv.innerHTML += `
                        <p><strong>${comment.name}</strong>: ${comment.comment}</p>
                    `;
                }
            });
    </script>
</body>
</html>
```

## 3.3. Fetching Data from an API

```javascript
// Path: index.js
// Create web server with express
const express = require('express');
const app = express();

// Use static files
app.use(express.static('public'));

// Add comments
app.get('/comments', (req, res) => {
    res.json([
        {
            name: 'John',
            comment: 'This is great!',
        },
        {
            name: 'Jane',
            comment: 'Nice work!',
        },
    ]);
});

// Start web server on port 3000
app.listen(3000, () => {
    console.log('Web server is running on port 3000');
});
```

```html
<!-- File: index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>

    <div id="comments"></div>

    <script>
        fetch('/comments')
            .then(response => response.json())
            .then(comments => {
                const commentsDiv = document.getElementById('comments');
                for (const comment of comments) {
                    commentsDiv.innerHTML += `
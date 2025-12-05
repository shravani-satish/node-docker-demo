// index.js
const app = require('./app');
const PORT = process.env.PORT || 4000;   // default 4000 (matches Dockerfile EXPOSE)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

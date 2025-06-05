require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure exports directory exists
const exportsDir = path.join(__dirname, 'exports');
if (!fs.existsSync(exportsDir)) {
  fs.mkdirSync(exportsDir);
}

/**
 * POST /api/templates/export
 * Expects body: {
 *   "view": { ... },
 *   ...other data
 * }
 * Saves TRMNL compatible template JSON file
 */
app.post('/api/templates/export', (req, res) => {
  const template = req.body;

  if (!template || !template.view) {
    return res.status(400).json({ error: 'Invalid template data.' });
  }

  const filename = `template_${Date.now()}.json`;
  const filePath = path.join(exportsDir, filename);

  fs.writeFile(filePath, JSON.stringify(template, null, 2), (err) => {
    if (err) {
      console.error('Failed to write template:', err);
      return res.status(500).json({ error: 'Failed to save template.' });
    }

    // Placeholder for optional webhook push to api.usetrmnl.com
    // TODO: implement webhook to push template using TRMNL_API_KEY

    return res.json({ message: 'Template exported successfully.', file: filename });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

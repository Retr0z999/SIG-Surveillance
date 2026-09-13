# Document catalog

This folder contains the GitHub Pages catalog for the ALPRS Fall 2026 project. The catalog keeps the public index and history in Git while Google Drive remains the working source for collaborative files.

## Add a PDF

1. Upload the PDF to Google Drive.
2. Set its sharing permissions so the intended audience can open it.
3. Copy the file URL.
4. Add an object to `documents.json`:

```json
{
  "category": "reports",
  "name": "annual-report.pdf",
  "url": "https://drive.google.com/file/d/FILE_ID/view"
}
```

The `name` is what visitors see. The `url` is where clicking that name takes them.

## Enable GitHub Pages

The repository includes `.github/workflows/pages.yml`, which publishes this
folder. In GitHub, open **Settings > Pages**, choose **GitHub Actions** as the
source, and let the workflow deploy from the `main` branch.
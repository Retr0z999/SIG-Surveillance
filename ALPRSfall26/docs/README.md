# Document catalog

This folder contains the GitHub Pages catalog for the ALPRS Fall 2026 project. The catalog keeps the public index and history in Git while Google Drive remains the working source for collaborative files.

## Add a PDF

1. Confirm the PDF passes the repository's [contribution rules](../../CONTRIBUTING.md).
2. Upload only the approved PDF to Google Drive, not an unreviewed folder of
  working files.
3. Set its sharing permissions so the intended audience can open it.
4. Copy the file URL.
5. Add an object to `documents.json`:

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
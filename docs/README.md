# Document catalog

This folder contains the GitHub Pages catalog. The catalog keeps the public index and history in Git while each PDF remains in Google Drive.

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

In the repository on GitHub, open **Settings > Pages**, choose **Deploy from a branch**, select the default branch and the `/docs` folder, then save. Replace the placeholder catalog URL in the root README with the Pages URL GitHub provides.
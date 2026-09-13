const categories = [
  ["authorities", "Authorities"],
  ["data", "Data"],
  ["records", "Records"],
  ["reports", "Reports"],
  ["requests", "Requests"],
  ["sources", "Sources"]
];

const driveLink = document.getElementById("drive-link");
const documentList = document.getElementById("document-list");
const documentCount = document.getElementById("document-count");

fetch("documents.json")
  .then((response) => response.json())
  .then((catalog) => {
    driveLink.href = catalog.driveFolder;
    renderDocuments(catalog.documents);
  })
  .catch(() => {
    documentList.innerHTML = "<p class=\"empty\">The document catalog could not be loaded.</p>";
  });

function renderDocuments(documents) {
  documentCount.textContent = `${documents.length} ${documents.length === 1 ? "file" : "files"}`;

  if (documents.length === 0) {
    documentList.innerHTML = "<p class=\"empty\">No PDFs have been added to the catalog yet. Open the Drive workspace to add working files.</p>";
    return;
  }

  const grouped = new Map(categories.map(([key, label]) => [key, { label, files: [] }]));
  documents.forEach((document) => {
    if (!grouped.has(document.category)) {
      grouped.set(document.category, { label: document.category, files: [] });
    }
    grouped.get(document.category).files.push(document);
  });

  documentList.innerHTML = [...grouped.values()]
    .filter((group) => group.files.length > 0)
    .map((group) => `
      <section class="category">
        <h3>${escapeHtml(group.label)}</h3>
        <ul>
          ${group.files.map((document) => `
            <li>
              <a href="${escapeAttribute(document.url)}" target="_blank" rel="noopener">
                <span class="file-icon" aria-hidden="true">PDF</span>
                <span>${escapeHtml(document.name)}</span>
                <span class="arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          `).join("")}
        </ul>
      </section>
    `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[character]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/javascript:/gi, "");
}
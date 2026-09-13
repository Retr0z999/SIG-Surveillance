# OPRA OCR

The goal is to extract exemption citations and vendor names from scanned OPRA response PDFs into a structured table.

The first step is triage: many response PDFs already contain a text layer, so each PDF must be checked before any OCR is run.

Checkbox and mark detection on agency exemption forms is a separate problem from text recognition.

Accuracy will be measured as the error rate on citation strings against a hand-labeled gold set, not as overall character accuracy.

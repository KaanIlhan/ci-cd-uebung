# ci-cd-uebung

Übungs-Repository zu Kapitel 09 (CI/CD mit GitHub Actions), Teil 1, Aufgaben 1–5.

| Datei | Aufgabe |
| --- | --- |
| `.github/workflows/hallo.yml` | 1 – erster Workflow |
| `.github/workflows/events.yml` | 2 – Events (push, pull_request, workflow_dispatch) |
| `.github/workflows/pipeline.yml` | 3 – mehrere Jobs mit `needs` |
| `.github/workflows/test.yml`, `index.html`, `test.sh` | 4 – Checkout + Tests |
| `Dockerfile` + docker-Job in `test.yml` | 5 – Docker-Image bauen und testen |

Lokal testen: `./test.sh`

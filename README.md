# Videospiel-Datenbank

## Projektbeschreibung
Dieses Repository enthält eine Datenbankanwendung für Videospiele, die auf Basis der IGDB-API (Internet Game Database) entwickelt wurde. Ziel des Projekts ist es, Informationen zu Videospielen zu sammeln, zu speichern und zu analysieren, um Nutzern eine einfache Möglichkeit zu bieten, nach Spielen zu suchen und relevante Daten zu filtern.

Die gesammelten Daten umfassen:
- **Spiele-ID**
- **Spieletitel**
- **Plattform**
- **Beschreibung**
- **Erscheinungsdatum**
- **Genre**
- **Bewertung**
- **Entwicklername und Land**

## Technical Report

Zusätzliche Informationen und technische Aspekte des Projekts sind im **Technical Report** dokumentiert. Dieser Report enthält eine umfassende Beschreibung der Methodik, der Implementierung und der Ergebnisse.

[Link zum Technical Report](10.13140/RG.2.2.11272.60160)

## Aufbau

Das Monorepo gliedert sich in folgende fünf Unterordner 
- `backend` - Backend der Anwendung mit FastAPI
- `frontend` - Frontend der Anwendung mit Svelte
- `database` - Datenbank der Anwendung mit GraphDB
- `refine` - Überführung der semi-strukturierten Daten RDF-Triples mit OntoText Refine
- `preload`- Lädt RDF-Triples in die Datenbank (nur wenn die Datenbank offline ist) 

## Entwicklungsumgebung

Die Abhängigkeiten können in beiden Teilprojekten wie folgt installiert werden:

```bash
cd sys_src/backend # Wechsel ins Backend-Teilprojekt-Verzeichnis
pip install # Installation der Abhängigkeiten

cd sys_src/frontend # Wechsel ins Frontend-Teilprojekt-Verzeichnis
npm install # Installation der Abhängigkeiten
```

Im Backend stehen folgende Kommandos zur Verfügung:

| Kommando           | Beschreibung                                     |
|--------------------|--------------------------------------------------|
| `python -m uvicorn main:app` | Startet das Backend.|
| `pip freeze > requirements.txt` | Erstellt/Aktulaisiert die Requirements Textdatei.|
| `python -m pytest --cov -v --cov-report term-missing --cov-branch` | Führt Unittests für alle Dateien durch.|
| `python -m --cov main --cov-branch --cov-report term-missing` | Führt Unittest für main.py durch.|

Im Frontend stehen folgende Kommandos zur Verfügung:

| Kommando           | Beschreibung                         |
|--------------------|--------------------------------------|
| `npm run build`    | Baut das Frontend.                   |
| `npm run start`    | Baut das Frontend und startet es.    |
| `npm run test`     | Führt die Tests aus.                 |
| `npm run coverage` | Erstellt einen Code-Coverage Report. |


## Docker 

Das System lässt sich mit `docker compose up` starten.

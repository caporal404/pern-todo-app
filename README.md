<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Stack][stack-shield]][stack-url]
[![PostgreSQL][postgres-shield]][postgres-url]
[![Express][express-shield]][express-url]
[![React][react-shield]][react-url]
[![Node.js][node-shield]][node-url]

<br />
<div align="center">
  <a href="frontend/public/assets/preview.jpg" target="_blank" rel="noopener noreferrer">
    <img src="frontend/public/assets/preview.jpg" alt="Preview application" style="max-width:100%;height:auto;display:block;margin:0 auto;border-radius:6px;">
  </a>
  
  <br/>
  <br/>
  <h1 align="center">PERN TODO APP</h1>

  <p align="center">
    Une application de gestion de tâches avec Node.js, Express, React et PostgreSQL.
    <br />
    <br />
    <a href="https://frontend-cecn.onrender.com/" target="_blank" rel="noopener noreferrer"><strong>Voir la démo</strong></a> ·
    <a href="#getting-started"><strong>Démarrer »</strong></a>
    &nbsp;&nbsp;
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li><a href="#about-the-project">À propos du projet</a></li>
    <li><a href="#features">Fonctionnalités</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#getting-started">Installation</a></li>
    <li><a href="#usage">Utilisation</a></li>
    <li><a href="#license">Licence</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## À propos du projet

***PERN TODO APP*** est une application todo-list intuitive permettant d'ajouter, modifier, supprimer et filtrer des tâches. Les tâches sont persistées en base de donnees et l'interface propose un mode sombre/clair.


## Fonctionnalités

- Ajout, modification et supprission des tâches
- Complétion d'une tâche
- Filtrage des tâches par statut
- Suppression des tâches complétées
- Mode sombre / clair
- Drag-and-drop


## Stack

**Frontend:**
 - React + Vite
 - Bootstrap
 - Framer Motion
 - Axios

**Backend:** 
- Node.js
- Express.js
- PostgreSQL


## Structure

```
pern-todo-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   └── index.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── providers/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Installation

### Prérequis
- Node.js
- PostgreSQL

### Étapes

1. **Cloner le dépôt**
```bash
git clone <url-du-repo>
cd pern-todo-app
```

2. **Backend**

Intaller les dependances:
  ```bash
  cd backend
  npm install
  ```

Créer un fichier `.env` en copiant le contenu de `.env.example`:
```env
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=todos_db
DB_PASSWORD=your_password
DB_PORT=5432
```

Lancer : `npm run dev`

3. **Frontend**

Intaller les dependances:
```bash
cd ../frontend
npm install
```

Créer un fichier `.env` :
```env
VITE_API_URL=http://localhost:3000/api
```

Lancer : `npm run dev`

***Et voila ! L'applicationest disponible sur `http://localhost:5173`***

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Utilisation

- **Ajouter** : Saisir un nom et appuyer sur Entrée
- **Modifier** : Cliquer sur le bouton crayon
- **Complétée** : Cocher la case à gauche
- **Supprimer** : Cliquer sur l'icône poubelle
- **Filtrer** : Utiliser All, Active ou Completed
- **Vider complétées** : Cliquer sur "Clear completed"
- **Mode sombre** : Cliquer sur l'icône soleil/lune

## Licence

Ce projet est distribué sous la licence MIT.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- MARKDOWN LINKS -->
[stack-shield]: https://img.shields.io/badge/Stack-PERN-blue?style=for-the-badge
[stack-url]: #
[postgres-shield]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[postgres-url]: https://www.postgresql.org/
[react-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://react.dev/
[express-shield]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[express-url]: https://expressjs.com/
[node-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/

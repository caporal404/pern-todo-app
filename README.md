<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>


<!-- PROJECT SHIELDS -->
[![Stack][stack-shield]][stack-url]
[![PostgreSQL][postgres-shield]][postgres-url]
[![React][react-shield]][react-url]
[![Express][express-shield]][express-url]

<br />
<div align="center">
  <a href="#top">
    <img src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=900&q=80" alt="Todo App" width="900" height="220">
  </a>

  <h3 align="center">PERN Todo App</h3>

  <p align="center">
    Une application de gestion de tâches complète, construite avec React, Express et PostgreSQL.
    <br />
    <a href="#getting-started"><strong>Installer le projet »</strong></a>
    <br />
    <br />
    <a href="#api-rest">Voir l'API</a>
    &middot;
    <a href="#features">Fonctionnalités</a>
    &middot;
    <a href="#usage">Utilisation</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li><a href="#about-the-project">À propos du projet</a></li>
    <li><a href="#features">Fonctionnalités principales</a></li>
    <li><a href="#stack">Stack technique</a></li>
    <li><a href="#project-structure">Structure du projet</a></li>
    <li><a href="#getting-started">Démarrage rapide</a>
      <ul>
        <li><a href="#prerequisites">Prérequis</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#environment-variables">Variables d'environnement</a></li>
      </ul>
    </li>
    <li><a href="#usage">Utilisation</a></li>
    <li><a href="#api-rest">API REST</a></li>
    <li><a href="#database">Base de données</a></li>
    <li><a href="#roadmap">Évolutions possibles</a></li>
    <li><a href="#license">Licence</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## À propos du projet

Cette application est une todo list full-stack de type PERN :
- Frontend en React + Vite
- Backend en Express.js
- Base de données PostgreSQL

Le projet permet de gérer des tâches de manière simple et intuitive : ajouter, modifier, marquer comme terminée, supprimer, filtrer et vider les tâches terminées. Les tâches sont persistées en base de données et reflétées en temps réel côté client après chaque action.

L’interface est pensée pour offrir une expérience moderne, avec un mode sombre et un affichage clair des tâches actives, terminées ou globales.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## Fonctionnalités principales

### 1. Ajout de tâches
- Le formulaire permet d’ajouter une nouvelle tâche.
- La valeur est nettoyée et validée : les chaînes vides sont rejetées.
- Les tâches sont envoyées au backend puis stockées en base de données.

### 2. Édition des tâches
- Chaque tâche dispose d’un bouton d’édition.
- Le texte de la tâche apparaît dans le formulaire pour modification.
- Une validation empêche les tâches vides d’être enregistrées.

### 3. Validation / complétion
- Une case de statut permet de marquer une tâche comme terminée ou active.
- Les tâches terminées sont visuellement différenciées par un style spécifique.

### 4. Suppression
- Chaque tâche possède un bouton de suppression.
- L’API supprime le record correspondant en base de données.

### 5. Filtres
Le composant de filtres permet de visualiser les tâches selon leur état :
- All : toutes les tâches
- Active : tâches non terminées
- Completed : tâches terminées

### 6. Nettoyage des tâches terminées
- Un bouton “Clear completed” permet de supprimer toutes les tâches déjà validées.
- La liste revient ensuite au filtre “All”.

### 7. Réorganisation visuelle des tâches
- La liste utilise le composant `Reorder` de `framer-motion`.
- Bien que le projet ne soit pas un gestionnaire de drag-and-drop complexe, il permet de réordonner visuellement les tâches dans la liste.

### 8. Mode sombre
- Un bouton dans l’interface permet de basculer entre le thème clair et sombre.
- Le thème est géré via un contexte React (`ThemeProvider`).

### 9. Persistance de données
- Les tâches sont stockées dans une base PostgreSQL.
- Les opérations CRUD passent par une API Express dédiée.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## Stack technique

### Frontend
- React 18
- Vite
- Axios pour les appels HTTP
- Bootstrap pour la mise en page
- Font Awesome pour les icônes
- Framer Motion pour les animations et le reorder

### Backend
- Node.js
- Express.js
- PostgreSQL avec `pg`
- dotenv pour la configuration
- CORS pour les requêtes cross-origin

### Déploiement/local dev
- Serveur backend via `nodemon` en mode développement
- Frontend via `vite`

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## Structure du projet

```text
pern-todo-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── todoController.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── index.js
│   ├── package.json
│   └── .env.example (si ajouté localement)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FilterControls/
│   │   │   ├── Task/
│   │   │   ├── TaskForm/
│   │   │   └── TaskList/
│   │   ├── providers/
│   │   │   ├── taskProvider.jsx
│   │   │   └── themeProvider.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── taskService.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── README.md
├── simple-README.md
└── package.json (si présent selon l’organisation locale)
```

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## Démarrage rapide

### Prérequis

Avant de lancer le projet, il faut avoir installé :
- Node.js (version récente recommandée)
- npm
- PostgreSQL
- Un client PostgreSQL ou un accès à une base locale

### Installation

#### 1. Cloner le dépôt

```bash
git clone <url-du-repo>
cd pern-todo-app
```

#### 2. Installer les dépendances du backend

```bash
cd backend
npm install
```

#### 3. Installer les dépendances du frontend

```bash
cd ../frontend
npm install
```

### Variables d'environnement

#### Backend (`backend/.env`)

Le backend charge les informations suivantes depuis la variable d’environnement :

```env
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=todos_db
DB_PASSWORD=your_password
DB_PORT=5432
```

#### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:3000/api
```

> Le fichier frontend `src/services/api.js` lit cette valeur via `import.meta.env.VITE_API_URL`.

### Lancer le backend

```bash
cd backend
npm run dev
```

Le serveur Express démarre sur le port défini dans `PORT`.

### Lancer le frontend

```bash
cd frontend
npm run dev
```

Le frontend Vite est généralement disponible sur :
- http://localhost:5173

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## Utilisation

### Ajouter une tâche
1. Saisir un nom de tâche dans le champ dédié.
2. Appuyer sur Entrée ou soumettre le formulaire.
3. La tâche est enregistrée et affichée dans la liste.

### Modifier une tâche
1. Cliquer sur le bouton d’édition (crayon).
2. Le texte de la tâche est chargé dans le formulaire.
3. Modifier le contenu puis valider.

### Cocher une tâche comme terminée
- Cliquer sur le bouton rond à gauche de la tâche.
- La tâche passe dans un état “completed”.

### Supprimer une tâche
- Cliquer sur l’icône de corbeille.
- La suppression est envoyée au backend puis rafraîchie localement.

### Filtrer les tâches
- Sélectionner All, Active ou Completed dans les filtres.
- Le composant `TaskProvider` recalcule la liste filtrée.

### Effacer les tâches terminées
- Cliquer sur “Clear completed”.
- Toutes les tâches avec `isCompleted = true` sont supprimées.

### Basculer le mode sombre
- Cliquer sur le bouton de thème situé dans l’en-tête.
- Le contexte `ThemeProvider` commute entre `LIGHT` et `DARK`.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## API REST

Le backend expose une API REST sur le chemin `/api/todos`.

### GET `/api/todos`
Récupère toutes les tâches triées par `id` croissant.

Exemple de réponse :

```json
{
  "data": [
    {
      "id": 1,
      "value": "Rédiger le rapport",
      "isCompleted": false,
      "is_editing": false
    }
  ]
}
```

### GET `/api/todos/:id`
Récupère une tâche précise par son identifiant.

Réponse :
- `200` si trouvé
- `404` si non trouvé

### POST `/api/todos`
Crée une nouvelle tâche.

Body attendu :

```json
{
  "value": "Faire les courses",
  "isCompleted": false,
  "is_editing": false
}
```

Réponse :

```json
{
  "message": "Todo successfully added",
  "data": {
    "id": 2,
    "value": "Faire les courses",
    "isCompleted": false,
    "is_editing": false
  }
}
```

### PUT `/api/todos/:id`
Met à jour une tâche existante.

Body attendu :

```json
{
  "value": "Faire les courses et ranger la cuisine",
  "isCompleted": true,
  "is_editing": false
}
```

### DELETE `/api/todos/:id`
Supprime une tâche.

Réponse :
- `200` si suppression réussie
- `404` si l’ID n’existe pas

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## Base de données

Le backend utilise PostgreSQL via le module `pg` et un pool de connexion configuré dans `backend/config/db.js`.

Le schéma attendu est typiquement le suivant :

```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  value TEXT NOT NULL,
  "isCompleted" BOOLEAN DEFAULT FALSE,
  is_editing BOOLEAN DEFAULT FALSE
);
```

Les requêtes SQL du contrôleur utilisent les champs :
- `value`
- `"isCompleted"`
- `is_editing`

Cela correspond aux logiques de l’application pour gérer les tâches actives / terminées et l’état d’édition.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


## Roadmap

- [ ] Ajouter une validation plus avancée côté client et côté serveur
- [ ] Ajouter des dates d’échéance sur les tâches
- [ ] Ajouter des catégories ou tags
- [ ] Ajouter un système d’authentification
- [ ] Améliorer la gestion du drag-and-drop avec ordre persistant
- [ ] Ajouter des tests unitaires et d’intégration

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>


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

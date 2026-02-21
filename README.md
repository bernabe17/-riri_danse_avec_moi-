# RIRI E-Commerce Platform

Plateforme de commerce électronique moderne construite avec React et Node.js.

## 🚀 Démarrage rapide

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/bernabe17/-riri_danse_avec_moi-.git
cd -riri_danse_avec_moi-
```

2. **Installer les dépendances du serveur**
```bash
cd server
npm install
```

3. **Installer les dépendances du client**
```bash
cd ../client
npm install
```

## 📁 Structure du projet

```
.
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Composants React
│   │   ├── pages/         # Pages principales
│   │   ├── styles/        # Fichiers CSS
│   │   └── App.js
│   └── package.json
├── server/                # Backend Node.js/Express
│   ├── routes/           # Routes API
│   ├── models/           # Modèles de données
│   ├── controllers/       # Logique métier
│   ├── middleware/        # Middlewares
│   ├── .env.example
│   └── index.js
├── docs/                 # Documentation
└── README.md
```

## 🛠️ Technologies utilisées

- **Frontend** : React, Axios, React Router
- **Backend** : Node.js, Express, MongoDB/PostgreSQL
- **Authentification** : JWT
- **Paiement** : Stripe API
- **Déploiement** : Vercel (Frontend), Heroku (Backend)

## 📋 Fonctionnalités principales

- ✅ Catalogue de produits
- ✅ Panier d'achat
- ✅ Authentification utilisateur
- ✅ Gestion des commandes
- ✅ Système de paiement
- ✅ Espace client
- ✅ Panel administrateur

## 📚 Documentation

Voir le dossier `docs/` pour plus de détails sur :
- Architecture
- API endpoints
- Guide de configuration
- Guide de déploiement

## 🤝 Contribution

Les pull requests sont bienvenues ! 

## 📄 License

MIT
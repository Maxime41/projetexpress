[![fr](https://img.shields.io/badge/Language-EN-blue.svg)](https://github.com/Maxime41/projetexpress/blob/main/README.fr.md)

# API ExpressJS avec Sequelize et Passport

Une API réalisée avec ExpressJS, l'ORM Sequelize pour la gestion de base de données et Passport (passport-jwt) pour l'authentification.

## Prérequis

- :small_blue_diamond: Node.js installé
- :small_blue_diamond: Paquets npm : Exécutez `npm install` pour installer les dépendances.
- :small_blue_diamond: Créez un fichier `.env` avec une clé `JWT_SECRET`. Vous pouvez générer la clé avec la commande suivante : `require('crypto').randomBytes(64).toString('hex')`.
- :small_blue_diamond: Service de base de données (par exemple, MySQL) comme celui fourni par XAMPP.
- :small_blue_diamond: Créez une base de données nommée `projetexpress` ou alors : [base de données exportée ici]().
- :small_blue_diamond: Le système par défaut installé est mariaDB, [documentation Sequelize si vous en avez besoin d'un autre](https://sequelize.org/docs/v6/getting-started/).
- :small_blue_diamond: Lancer le projet `npm start`.

## Structure du Projet

```
projetexpress
├── public
│   ├── images uploadés
├── src
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
├── home.js (fichier principal)
├── passport.js
└── sequelize-config.js
```

## Routes

Pour des exemples détaillés et des tests des routes de l'API, consultez la collection Postman disponible :arrow_forward: :ballot_box_with_check: [ici](link-to-your-postman-collection). :arrow_backward:

**Note:** Toutes les routes nécessitant un jeton échoueront si l'utilisateur est banni (y compris les routes utilisateur).  
Dans Postman, pour les routes nécessitant un jeton, ajoutez une clé `Authorization` avec la valeur `Bearer <jeton>` dans l'onglet Headers.

- `/test` : Retourne "Bonjour".
- `/login` : Retourne un jeton valide si les identifiants saisis sont valides.
  - Méthode : POST
  - Corps : Objet JSON avec les champs `nickname` et `password`.
- `/register` : Crée un nouvel utilisateur avec les informations fournies.
  - Méthode : POST
  - Corps : Objet JSON avec les champs `firstName`, `lastName`, `email`, `nickname` et `password`.
- `/profil` : Retourne les informations utilisateur en fonction du pseudonyme fourni.
  - Méthode : GET
  - Params : `nickname`
  - Requiert un jeton
- `/add-file` : Télécharge un fichier dans le dossier public.
  - Méthode : POST
  - Corps : Form-data avec une clé `file` contenant une image (PNG, JPEG ou PDF).
  - Requiert un jeton

## Routes Utilisateur

- :question: Toutes nécessitent un jeton et des droits d'administration
- `/users/rm/:userId` : Supprime un utilisateur de la base de données, méthode : DELETE.
- `/users/ban/:userId` : Bloque un utilisateur de l'accès à toutes les routes, méthode : PUT.
- `/users/list` : Liste tous les utilisateurs, méthode : GET.
- `/users/up/:userId` : Promeut un utilisateur en administrateur, méthode : PUT.
- `/users/down/:userId` : Rétrograde un utilisateur de son statut d'administrateur, méthode : PUT.

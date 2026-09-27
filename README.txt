REGEX FUN V2 — Objectif ANACRIM

Contenu
- index.html : application complète
- manifest.json : installation PWA
- sw.js : cache hors ligne
- icônes PNG

Nouveautés V2
- onboarding « je pars de zéro / objectif ANACRIM / entraînement rapide »
- 9 niveaux progressifs, dont un boss final
- mission du jour
- session express de 5 questions ciblée sur les points faibles
- défi ANACRIM de 10 questions mélangées
- XP, série quotidienne, objectif journalier, badges et meilleurs scores
- révision ciblée des erreurs et suivi des notions fragiles
- réponses REGEX validées par comportement quand c’est possible, pas uniquement par texte exact
- sons locaux optionnels et animations légères
- labo REGEX protégé : taille limitée + calcul isolé dans un Web Worker avec timeout
- fiche mémo intégrée
- installation iPhone expliquée dans l’application
- progression enregistrée uniquement dans le stockage local du navigateur

Installation iPhone
Une PWA iOS doit être servie depuis une adresse HTTPS pour profiter correctement du mode installé et du cache hors ligne.
1. Héberger le contenu du dossier sur un hébergement statique HTTPS.
2. Ouvrir l’adresse dans Safari sur iPhone.
3. Partager > Sur l’écran d’accueil.
4. Ouvrir l’icône Regex Fun.

Sécurité / confidentialité
- aucune donnée envoyée vers un serveur par l’application elle-même
- aucune bibliothèque externe
- aucune exécution de code importé
- aucune collecte d’identité
- les données de progression restent dans localStorage

Limite connue
Le moteur JavaScript REGEX dépend du navigateur. Les règles enseignées ici couvrent les fondamentaux courants, mais certains moteurs REGEX d’outils spécialisés peuvent avoir des différences de syntaxe ou de fonctionnalités.

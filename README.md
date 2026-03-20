# Tetris Max

Tetris Max est un jeu de Tetris moderne développé avec **React**, **TypeScript** et **Vite**.

Objectif : fournir un jeu simple, fluide et proprement architecturé, prêt pour déploiement en production (Hetzner + Nginx).

---

## 🧱 Stack technique

- **Framework** : React 18 + TypeScript
- **Bundler** : Vite
- **Style** : Tailwind CSS (ou CSS modules selon implémentation finale)
- **Tests** : Vitest + Testing Library
- **Qualité** : ESLint + Prettier

---

## 🎮 Fonctionnalités

- Grille Tetris **10 × 20**
- 7 tetrominos classiques : I, O, T, J, L, S, Z
- Contrôles clavier :

  - ← → : déplacer la pièce
  - ↓ : descente accélérée
  - ↑ ou Space : rotation
  - (Optionnel) touche dédiée pour “drop” instantané

- Score :

  - 1 ligne : +100 pts
  - 2 lignes : +300 pts
  - 3 lignes : +500 pts
  - 4 lignes (Tetris) : +800 pts

- Niveaux :

  - niveau initial 1
  - montée de niveau après X lignes complétées (ex: 10)
  - augmentation progressive de la vitesse

- UI :

  - zone de jeu centrée
  - panneau latéral : score, niveau, lignes, prochaine pièce
  - thème sombre, responsive (desktop + mobile)

- États :

  - Playing
  - Paused
  - Game Over

---

## 📂 Structure du projet

```txt
src/
  main.tsx
  App.tsx
  components/
    GameBoard.tsx
    ScorePanel.tsx
    ControlsHint.tsx
  game/
    types.ts
    constants.ts
    logic.ts
    reducer.ts
  hooks/
    useTetrisGame.ts
  styles/
    index.css (ou globals.css)
```

`game/logic.ts` contient les fonctions pures de logique (collisions, lignes complètes, génération des pièces, etc.).
`useTetrisGame.ts` encapsule la state machine du jeu et expose les actions pour les composants UI.

🚀 Démarrage

Prérequis
Node.js 18+
npm ou pnpm ou yarn (selon le gestionnaire choisi dans le projet)

### Installation
```
npm install
# ou pnpm install
# ou yarn
```

### Développement
```
npm run dev
```

Lancer puis ouvrir l’URL indiquée par Vite (par défaut http://localhost:5173).

### Build de production
```
npm run build
```

Les fichiers de production sont générés dans le dossier `dist/`.

### Prévisualisation du build
```
npm run preview
```

✅ Tests

Pour lancer les tests :

```
npm run test
```

Les tests couvrent principalement :

- la logique de jeu (reducer, détection de lignes complètes, collisions),
- quelques composants de rendu (présence de la grille, affichage du score initial, etc.).

🔗 Déploiement (Nginx + Hetzner)

Le projet est conçu pour être déployé en site statique derrière Nginx.

### Étapes typiques :

1. Builder le projet :
```
npm run build
```

2. Déployer le contenu de `dist/` sur le serveur (via pipeline DevMax / Ulysse).

3. Configurer un bloc Nginx (exemple générique) :

```nginx
server {
    listen 80;
    server_name tetris.example.com;

    root /var/www/tetris-max/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. Redémarrer Nginx après modification.

En environnement Ulysse/DevMax, le déploiement peut être automatisé via `devops_server.full_pipeline` en pointant l’app sur ce repo et en utilisant `npm run build` comme étape de build.

🧭 Évolutions possibles

- Mode 2 joueurs / versus
- Tableau des meilleurs scores (persisté côté serveur ou via API)
- Thèmes de couleur personnalisables
- Animation plus avancée pour les lignes supprimées
- Support manette (Gamepad API)

👨‍💻 Auteur

Projet généré et orchestré via DevMax / UlysseProject, avec MaxAI comme assistant d’ingénierie.
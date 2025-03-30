# Le Doucen Avocats - Site Web Officiel

Ce dépôt contient le code source du site web officiel du Cabinet Le Doucen Avocats, un cabinet d'avocats basé à Rodez (Aveyron) depuis 1972.

## 📋 Aperçu

Le site web est développé avec React et Vite, utilisant TailwindCSS pour le style. Il s'agit d'un site vitrine présentant les services, l'équipe et les coordonnées du cabinet d'avocats.

![Screenshot du site]([screenshot-placeholder.jpg](https://i.postimg.cc/4ZXzG67x/Screenshot-2025-03-30-at-21-10-20.png))

## 🛠️ Technologies Utilisées

- **React 18**: Framework JavaScript pour l'interface utilisateur
- **Vite**: Outil de build rapide pour le développement moderne
- **TailwindCSS**: Framework CSS utilitaire pour le style
- **ESLint**: Outil de linting pour JavaScript et JSX
- **CSS personnalisé**: Animations et styles spécifiques

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (v14.0.0 ou version ultérieure)
- npm ou yarn

### Installation

1. Clonez ce dépôt:
```bash
git clone https://github.com/votre-nom/ledoucen-avocats.git
cd ledoucen-avocats
```

2. Installez les dépendances:
```bash
npm install
# ou avec yarn
yarn install
```

3. Lancez le serveur de développement:
```bash
npm run dev
# ou avec yarn
yarn dev
```

4. Ouvrez votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173)

## 📦 Structure du Projet

```
ledoucen-avocats/
├── public/               # Ressources statiques
├── src/                  # Code source
│   ├── assets/           # Images et ressources
│   ├── components/       # Composants React
│   │   ├── About.jsx     # Section "Notre Cabinet"
│   │   ├── Contact.jsx   # Section "Contactez-nous"
│   │   ├── Footer.jsx    # Pied de page
│   │   ├── Header.jsx    # En-tête et navigation
│   │   ├── Hero.jsx      # Section d'accueil
│   │   ├── IntroAnimation.jsx # Animation d'introduction
│   │   ├── Logo.jsx      # Logo du cabinet
│   │   ├── Services.jsx  # Section "Domaines d'expertise"
│   │   └── Team.jsx      # Section "Notre équipe"
│   ├── hooks/            # Hooks personnalisés
│   │   └── useScrollAnimation.js # Hook pour les animations au défilement
│   ├── App.css           # Styles spécifiques à l'application
│   ├── App.jsx           # Composant principal
│   ├── animations.css    # Styles d'animations
│   ├── index.css         # Styles globaux
│   └── main.jsx          # Point d'entrée
├── .eslintrc.js          # Configuration ESLint
├── package.json          # Dépendances et scripts
├── tailwind.config.js    # Configuration TailwindCSS
└── vite.config.js        # Configuration Vite
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales du site sont définies dans `tailwind.config.js` et peuvent être modifiées:

```js
theme: {
  extend: {
    colors: {
      red: {
        900: '#C8102E', // Couleur principale
      },
    },
  },
}
```

### Logo

Le logo est défini comme un composant SVG dans `src/components/Logo.jsx`. Pour modifier le logo, vous pouvez mettre à jour ce fichier.

### Images

Les images peuvent être remplacées en mettant à jour les URL dans les composants correspondants.

## 🏗️ Production

Pour construire le site pour la production:

```bash
npm run build
# ou avec yarn
yarn build
```

Les fichiers de production seront générés dans le dossier `dist`.

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à différentes tailles d'écran:
- Mobile: < 640px
- Tablette: 640px - 1024px
- Desktop: > 1024px

## 🔄 Animations

Le site utilise plusieurs animations:
- Animation d'introduction avec le logo du cabinet
- Animations au chargement pour les sections principales
- Animations au défilement pour les éléments de contenu

Les animations sont définies dans `src/animations.css` et gérées par le hook `useScrollAnimation`.

## 📄 Licence

Tous droits réservés © 2025 Cabinet Le Doucen Avocats

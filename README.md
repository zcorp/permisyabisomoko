# Permis Ya Biso Moko — site vitrine

Site vitrine en français pour **Permis Ya Biso Moko — La Grâce de Dieu** (location de véhicule à double commande et leçons de conduite). Cible de production : `https://permisyabisomoko.fr`, hébergé sur GitHub Pages.

> **État : version de travail, non déployée.** Les coordonnées, l'identité légale, les tarifs et la zone de service ne sont pas fournis (marqués `null` / `TODO`). Voir [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) pour l'état exact et les décisions en attente.

## Stack

Angular 22.2.2 · Angular Material 22.2.2 (M3) · TypeScript 6 · SCSS · Vitest (via `ng test`) · angular-eslint · Docker / Docker Compose · Bash · GitHub Actions · GitHub Pages. Aucun backend, aucune base de données. Icônes : **Material Icons (Outlined) uniquement**, embarquées localement.

## Prérequis hôte

Docker (avec Compose v2), Bash, Git. **Pas de Node, npm, Angular CLI ni Java requis sur l'hôte.**
Les dépendances npm, le cache npm et le cache Angular sont conservés dans des volumes Docker ;
ils ne sont pas installés dans `node_modules/` sur l'hôte. Seul `dist/`, la sortie utile au déploiement,
est écrit dans le dossier du projet.

## Démarrage rapide

```bash
./scripts/setup.sh      # construit l'image d'outillage + npm ci (conteneur jetable)
./scripts/validate.sh   # contrôle complet : politique, deps, lint, tests, build, vérification de la sortie
./scripts/build.sh      # build de production -> dist/permis-ya-biso-moko/browser
```

| Commande | Rôle |
|---|---|
| `./scripts/setup.sh` | Image Docker d'outillage + installation des dépendances |
| `./scripts/lint.sh` | Lint (angular-eslint) |
| `./scripts/test.sh` | Tests unitaires, une seule exécution |
| `./scripts/build.sh [--base-href /repo/]` | Build de production + `404.html` + vérification |
| `./scripts/validate.sh` | Toute la chaîne de qualité |
| `./scripts/check-policy.sh` | Vérifie la stack autorisée et la politique d'icônes (bash + grep, sans Docker) |
| `./scripts/verify-dist.sh` | Vérifie la sortie de build pour GitHub Pages (sans Docker) |
| `./scripts/clean.sh [--build\|--deps\|--cache\|--image\|--all]` | Nettoyage sûr des sorties locales et volumes Docker du projet |
| `./scripts/deploy.sh` | Contrôle de préparation au déploiement. **Ne commit ni ne push jamais.** |

Aucune commande ne démarre de serveur persistant.

## Documentation

- [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) — document de reprise (à lire en premier)
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) · [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) · [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)
- [`docs/CONTACT_INTEGRATION.md`](docs/CONTACT_INTEGRATION.md) · [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) · [`docs/LEGAL_AND_PRIVACY.md`](docs/LEGAL_AND_PRIVACY.md)
- [`docs/DECISIONS.md`](docs/DECISIONS.md) · [`CHANGELOG.md`](CHANGELOG.md) · [`TASKS.md`](TASKS.md)

## Où renseigner les informations de l'entreprise

Tout est dans **un seul fichier** : [`src/app/core/config/site-config.ts`](src/app/core/config/site-config.ts) (téléphone, WhatsApp, e-mail, endpoint du formulaire, logo, mentions légales). Une valeur `null` n'affiche rien d'inventé. Une fois tout confirmé, passer `showDraftNotices` à `false`.

# permisyabisomoko

## Publication GitHub Pages

Le dépôt GitHub ne contient que le build statique de production, le workflow de publication et ce README. Les sources restent localement ignorées par `.gitignore`.

1. Construire et vérifier le site dans Docker : `./scripts/build.sh`.
2. Envoyer le commit sur `main`. GitHub Actions publie `dist/permis-ya-biso-moko/browser` sans installer Node et sans reconstruire l'application.
3. Dans GitHub, choisir **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Ajouter `permisyabisomoko.fr` comme domaine personnalisé et activer HTTPS lorsque GitHub le propose.

Après toute modification du site, reconstruire avec Docker et inclure le dossier `dist/permis-ya-biso-moko/browser` dans le commit de publication.

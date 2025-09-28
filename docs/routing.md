
---

### `routing.md`
```markdown
# Routage dans Next.js

Next.js utilise un **routage basé sur le système de fichiers**.

## Routage simple

Chaque fichier `.js` ou `.tsx` dans `pages/` devient une route.

Exemple :
- `pages/index.js` → `/`
- `pages/about.js` → `/about`

## Routage dynamique

Utilise des crochets `[]` pour définir des routes dynamiques.

Exemple : `pages/blog/[id].js`

```jsx
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Article : {id}</h1>;
}

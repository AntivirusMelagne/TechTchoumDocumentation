
---

### `api-routes.md`
```markdown
# API Routes Melagne

Next.js permet de créer une API directement dans ton projet.

## Exemple simple

Crée `pages/api/hello.js` :

```jsx
export default function handler(req, res) {
  res.status(200).json({ message: "Bonjour depuis l'API 🚀" });
}

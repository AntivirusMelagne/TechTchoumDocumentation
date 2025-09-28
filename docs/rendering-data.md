
---

### `rendering-data.md`
```markdown
# Rendu et gestion des données

Next.js offre plusieurs méthodes de rendu.

## Static Site Generation (SSG)

Pré-génère les pages au build.

```jsx
export async function getStaticProps() {
  return {
    props: { message: "Hello SSG" },
  };
}


---

### `optimisation.md`
```markdown
# Optimisation

Next.js inclut des optimisations par défaut.

## Images

```jsx
import Image from "next/image";

export default function Page() {
  return <Image src="/photo.png" width={500} height={300} alt="Photo" />;
}

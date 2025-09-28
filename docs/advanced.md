# Fonctionnalités avancées

## Middleware

Exécute du code avant le rendu d’une page.

```jsx
// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  if (!req.cookies.token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

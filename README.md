# Demo DevSecOps con GitHub Actions

Demo rápida para clase: una API Node.js vulnerable que pasa por un pipeline DevSecOps.

## Qué demuestra

1. Secret scanning con Gitleaks
2. SAST con Semgrep
3. SCA con Trivy
4. DAST con OWASP ZAP

## Ejecutar en local

```bash
npm install
npm start
```

Abrir:

```txt
http://localhost:3000
```

## Endpoints

```txt
/
 /health
/search?q=console.log("hola")
/merge
```

## Vulnerabilidades intencionadas

- `app.js` contiene un token falso tipo `ghp_...`
- `app.js` usa `eval(q)`
- `package.json` usa `lodash@4.17.20`

## Fixes para enseñar al final

1. Borrar el token falso.
2. Cambiar `eval(q)` por `console.log(q)`.
3. Actualizar lodash:

```bash
npm install lodash@latest
```

const express = require("express");
const _ = require("lodash");

const app = express();

// DEMO DEVSECOPS
// Vulnerabilidades intencionadas para enseñar el pipeline

// 1) Secreto falso para que Gitleaks lo detecte.
// No es real. Es solo para la demo.

// Endpoint principal
app.get("/", (req, res) => {
  res.send(`
    <h1>Demo DevSecOps</h1>
    <p>Aplicación Node.js vulnerable para demo con GitHub Actions.</p>
    <ul>
      <li>/search?q=console.log("hola")</li>
      <li>/health</li>
    </ul>
  `);
});

// Endpoint de salud
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// 2) Vulnerabilidad SAST para Semgrep: uso de eval()
app.get("/search", (req, res) => {
  const q = req.query.q || "console.log('sin query')";

  // Vulnerable a code injection.
  // Semgrep debería marcar este patrón.
  eval(q);
  // console.log(q);

  res.send("Búsqueda ejecutada. Revisa la consola.");
});

// Uso trivial de lodash para que aparezca como dependencia
app.get("/merge", (req, res) => {
  const result = _.merge({}, { demo: true });
  res.json(result);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Demo DevSecOps corriendo en http://localhost:${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const { Datastore } = require("@google-cloud/datastore");

const app = express();
const datastore = new Datastore();

app.use(bodyParser.json());

// ✅ GET route
app.get("/helloWorld", (req, res) => {
  res.status(200).send("✅ Backend SSCI en ligne sur Cloud Run !");
});

// ✅ POST route
app.post("/addData", async (req, res) => {
  try {
    const body = req.body || {};

    if (Object.keys(body).length === 0) {
      return res.status(400).send({ error: "❌ Données manquantes" });
    }

    const kind = "SensorData";
    const key = datastore.key([kind]);

    const entity = {
      key: key,
      data: {
        ...body,
        createdAt: new Date().toISOString(),
      },
    };

    await datastore.save(entity);

    res.status(200).send({
      message: "✅ Données enregistrées avec succès",
      data: body,
    });
  } catch (error) {
    console.error("❌ Erreur:", error);
    res.status(500).send({ error: "Erreur lors de l'enregistrement" });
  }
});

// ✅ Port Cloud Run
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Backend SSCI écoutant sur le port ${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require("axios");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const Crew3_API_Key = "e990c7JHgITVYMocwb8z6vIrZda";
const uri = "mongodb://localhost:27017";
const dbName = "myDatabase";

mongoose.connect(
  "mongodb+srv://danieledtt06:azwerty06@cluster0.ynu71e5.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conectado a MongoDB");
});

app.use(cors()); // Habilita CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", async (req, res) => {
  const { discordUser, title, subtitle, news, topic } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "danieledtt06@gmail.com",
        pass: "xooocghshtdlifvl",
      },
    });

    const mailOptions = {
      from: "danieledtt06@gmail.com",
      to: "danieledtt06@gmail.com",
      subject: `Noticia - ${discordUser}`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
            <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 0;">Nueva Noticia</h2>
            <p style="margin-top: 5px;">¡Hola!</p>
            <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
              <tr>
                <th style="text-align: left; padding: 8px; border: 1px solid black;">Título:</th>
                <td style="text-align: left; padding: 8px; border: 1px solid black;">${title}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px; border: 1px solid black;">Subtítulo:</th>
                <td style="text-align: left; padding: 8px; border: 1px solid black;">${subtitle}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px; border: 1px solid black;">Contenido:</th>
                <td style="text-align: left; padding: 8px; border: 1px solid black;">${news}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px; border: 1px solid black;">Tópico:</th>
                <td style="text-align: left; padding: 8px; border: 1px solid black;">${topic}</td>
              </tr>
            </table>
            <p style="margin-top: 20px;">¡Gracias por tu atención!</p>
            <p>Saludos cordiales,</p>
            <p>Tu aplicación</p>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email enviado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar el correo electrónico" });
  }
});

const DatosSchema = new mongoose.Schema({
  nombre: String,
  id: String,
  wallet: String,
  tasks: [Object],
});

const Datos = mongoose.model("Datos", DatosSchema);

app.post("/api/guardarDatos", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.zealy.io/communities/elonwolf/users/${req.body.id}`,
      {
        headers: {
          "x-api-key": "88b5b3lYxgTMUPLIcRj2BBgGBmp",
        },
      }
    );
    const tasks = response.data.tasks;
    const nuevosDatos = new Datos({
      nombre: req.body.nombre,
      id: req.body.id,
      wallet: req.body.wallet,
      tasks: tasks,
    });

    try {
      await nuevosDatos.save();
      res.send("Datos guardados correctamente");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      res.status(500).send("Error al guardar los datos");
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    res.status(500).send("Error al obtener los datos");
  }
});

app.get("/api/obtenerDatos", async (req, res) => {
  try {
    const datos = await Datos.find({});
    res.send(datos);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    res.status(500).send("Error al obtener los datos");
  }
});

app.delete("/api/eliminarDato/:id", async (req, res) => {
  try {
    const resultado = await Datos.findByIdAndDelete(req.params.id);
    // console.log("Eliminar dato con ID:", req.params.id);
    if (resultado) {
      res.send("Dato eliminado correctamente");
    } else {
      res.status(404).send("Dato no encontrado");
    }
  } catch (error) {
    console.error("Error al eliminar el dato:", error);
    res.status(500).send("Error al eliminar el dato");
  }
});

app.post("/api/registerUser", async (req, res) => {
  const { discordId } = req.body.id;

  try {
    const crew3Response = await axios.get(
      `https://api.zealy.io/communities/elonwolf/users/${req.body.id}/tasks`,
      {
        headers: {
          "x-api-key": "88b5b3lYxgTMUPLIcRj2BBgGBmp",
        },
      }
    );

    const tasks = crew3Response.data.tasks;

    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const usersCollection = db.collection("users");

    const user = {
      discordId,
      tasks,
    };

    await usersCollection.insertOne(user);
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

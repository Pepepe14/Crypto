const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require("axios").default;
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

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

// app.use(cors()); // Duplicado, ya lo agregamos anteriormente
// app.use(bodyParser.json()); // Duplicado, ya lo agregamos anteriormente
// app.use(bodyParser.urlencoded({ extended: true })); // No parece que estés usando esto, lo elimino

app.post("/send-email", async (req, res) => {
  const { discordUser, title, subtitle, news, topic } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "danieledtt06@gmail.com",
        pass: process.env.AUTH_GMAIL,
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

// Código de axios eliminado, no lo estás usando en ninguna parte

async function getUserXP(userId, userName, userWallet) {
  try {
    const response = await axios.get(
      `https://api.zealy.io/communities/elonwolf/claimed-quests`,
      {
        headers: {
          "x-api-key": "0db8dct9sK2WzkhVcvJxcxotxmX",
        },
        
      },
    );
console.log("response", response)
    const userXPData = response.data.data.find(
      (user) => user.user_id === userId ||user.name === userName || user.ethAddress === userWallet
    );

    return userXPData ? userXPData.xp : 0;
  } catch (error) {
    console.error("Error al obtener la XP del usuario:", error);
    return 0;
  }
}

const DatosSchema = new mongoose.Schema({
  nombre: String,
  id: String,
  wallet: String,
  xp: Number,
});

const Datos = mongoose.model("Datos", DatosSchema);

app.post("/api/guardarDatos", async (req, res) => {
  const userId = req.body.id;
  const userName = req.body.nombre;
  const userWallet = req.body.wallet;
  const serverId = "1087454551105347614";
  const userXP = await getUserXP(userId, serverId);

  try {
    let user = await Datos.findOne({ id: userId});
    if (user) {
      user.nombre = userName;
      user.wallet = userWallet;
      user.xp = userXP; // Asignar la XP del usuario
      await user.save();
    } else {
      // Crear un nuevo documento para el usuario
      const nuevosDatos = new Datos({
        nombre: req.body.nombre,
        id: req.body.id,
        wallet: req.body.wallet,
        xp: userXP,
      });
      await nuevosDatos.save();
    }
    res.send("Datos guardados correctamente");
  } catch (error) {
    console.error("Error al guardar los datos:", error);
    res.status(500).send("Error al guardar los datos");
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

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

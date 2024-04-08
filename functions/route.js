const app = require("express")();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const authMiddleware = require('./auth-middleware');
const db = require('./database');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const admin = require('firebase-admin');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'YOUR_PROJECT_ID',
    clientEmail: 'YOUR_CLIENT_EMAIL',
    privateKey: 'YOUR_PRIVATE_KEY'
  })
});


exports.scheduleSurvey = functions.pubsub.schedule('every 5 minutes').onRun((context) => {
  const db = admin.database();
  db.collection('users').where('login', '==', login).where('password', '==', passwordHash).get()
    .then(snapshot => {
      if (snapshot.empty) {
        return res.status(401).send('Unauthorized');
      }
      const user = snapshot.docs[0].data();
      const token
        = jwt.sign({ login: user.login, role: user.role },
          'secret',
          { expiresIn: '1h' });

      return res.json({ token });
    })
    console.log(snapshot.val());
    const data = fetch(admin.database()).then(response => response.json());

    // Processar os dados
    data.then(data => {
      db
      .collection("survey")
      .doc(request.params.id)
      .get()
      .then(function (doc) {
        response.json({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          createdAt: doc.data().createdAt,
          updatedAt: doc.data().updatedAt,
          expiresAt: doc.data().expiresAt,
          options: doc.data().options
      })
    })
      // Exibir os dados no console
      console.log(data);

  })
})
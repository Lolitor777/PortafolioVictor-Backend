import express from 'express'
import cors from 'cors'
import { PORT } from './config.js';
import db from './database/db.js';
import photoRoutes from './routes/photo.js';
import commentRoutes from './routes/comment.js';
import educationRoutes from './routes/education.js';
import habilityRoutes from './routes/hability.js';
import projectRoutes from './routes/project.js';
import languageRoutes from './routes/language.js';	
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js'



const app = express();

app.use( cors() )
app.use( express.json() )

app.use('/api/photo', photoRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/hability', habilityRoutes);
app.use('/api/language', languageRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);


try {
    db.authenticate()
    console.log('Conexión existosa con la base de datos');
} catch (error) {
    console.log(error);
    console.log('Error al conectar con la base de datos');
}

app.listen(PORT, () => {
    console.log(`server online in port ${PORT}`);
})
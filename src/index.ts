import express from 'express';
import menuRoute from './routes/menu';

const app = express();

app.use('/menu', menuRoute);

app.listen(3000, () => {
  console.log(`\n Server runnning on port 3000 \n`);
});

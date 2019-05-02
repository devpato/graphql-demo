import express from 'express';
import { Server } from 'http';
const SERVER = express();

// SERVER.get('/graphql', (req, res) => {
// 	res.send('<html><head><body><h1>Hellow World</h1></body></head></html>');
// });

SERVER.listen(4000, () => {
	console.log('Listening to port 4000');
});

import {Application} from 'https://deno.land/x/oak/mod.ts'

const app = new Application;

const PORT = 3000;
console.log(`The server is executing at port: ${PORT}`);
app.listen(PORT);
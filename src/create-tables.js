import { sql } from './db.js'

sql`
CREATE TABLE pets( 
  id TEXT  primary key,
  name varchar(150),
  age int,
  species varchar(150)
);
`.then(() => {
  console.log("tabela criada!")
})
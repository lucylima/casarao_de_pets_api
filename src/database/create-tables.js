import { sql } from './db.js'

sql`
CREATE TABLE Owner(
  id char(36) primary key not null,
  name varchar(100),
  cpf char(11) unique,
  cellphone char(9)
);

CREATE TABLE Pets( 
  id char(36) primary key,
  name varchar(100) not null,
  age int,
  species varchar(150),
  owner_id char(36),
  foreign key (owner_id) references Owner(id)
);
`.then(() => {
  console.log("tabela criada!")
})
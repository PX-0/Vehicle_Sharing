INSERT INTO archivio_utenti (user_id, password, firma, tipo, nome, cognome, nascita, email, data_iscrizione)
VALUES ('Amministratore', 'Amministratore', 'Amministratore dei servizi', 'A','Paolino','Paperino','20/08/1900','paolino.paperino@paperopoli.com ', 20060101000000);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('2', '321', '13.50', 'Mastercard', '5167099046768999', 20250101);

insert into pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
values (1, 069, 800.00, "Carta di credito", 1342985084639857, 20240101);

insert into archivio_utenti(user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values("Mario", "Rossi", 20200304000000, "pino.rex123@pip.com", "Utente", "31/12/1998", "Rossi", "Mauri", "B", 20200405);

insert into veicoli (alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins,veicolo_id)
values("Benzina", "Fiat 600, colore blue cobalto", "Prolungato", "Fiato600.jpg", "Via dei colli della serpentara 00139", "Auto", "Amministratore", "Fiat");

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (1,20230103000000, 1, "Mario", "Fiat");

INSERT INTO archivio_utenti (user_id, password, firma, tipo, nome, cognome, nascita, email, data_iscrizione)
VALUES ('Paolo', 'paolo', 'Utente con diritti minimi', 'B', 'Paolo','DeSantis','20/10/2001', 'paolo.desantis@gmail.com', 20100801102040);

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('Ferrari', 'Auto', 'Benzina', '599xx evo, colore nero, 499,99cc', 'Italia, Roma, Via Genzano 89', 'Giornaliero', 'https://www.gtspiritmedia.com/gtspirit/uploads/2015/06/Ferrari-599XX-For-Sale6.jpg', 'Amministratore');

INSERT INTO pagamenti (metodo_pagamento, n_carta, scadenza, cvv, importo) 
values ('Mastercard', '1234567890123456', 20241222, '123', 12000);

INSERT INTO prenotazioni (utente_id, veicolo_id, data_prenotazione, pagamento_id) 
values ('Paolo', 'Ferrari', 20230210101022, 2);


insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (3,20230124000000, 3, "Paolo", "Ferrari");


INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('4', '081', '150.00', 'Visa', '5377087046778099', 20250204);


insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Mattia","Verdi",20210604033845,"mattiaverdi@gmail.com","Utente","04/10/1990","mattia","VERDI","B",20220805191845);


insert into veicoli (veicolo_id,alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins)
values("Xiaomi", "Elettrico", "Xiaomi colore rosso metallizzato", "No", "monopattinoXiaomi.jpg", "Via Appia Nuova 678, 00179", "Monopattino", "Amministratore");

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (4,20230207000000, 4, "Mattia", "Xiaomi");

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('5', '049', '260.00', 'Masterdcard', '4376049044278178', 20750104);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('6', '012', '50.00', 'Postepay', '1204863579425013', 20260807);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('7', '321', '450.00', 'Mastercard', '5167099046768999', 20250101);


INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('Trek', 'Bicicletta', 'elettrica', 'colore nero', 'Italia, Roma, Via Fregene 00183', 'Giornaliero', 'Trek.jpg', 'Amministratore');

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('E-bike', 'Bicicletta', 'elettrica', 'Cube Stereo Hybrid 120 Pro 625, colore azzurro', 'Italia, Roma, Via Fregene 00183', 'No','cube.jpg','Amministratore');

insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Luca","Gialli",20180503050000,"lucagialli@gmail.com","Utente con diritti minimi","06/07/1999","luca","GIALLI","B",20220702000000);

insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Alessia","Como",20200204000000,"comale@tiscali.com","Utente","07/09/1995","alessia","ComAle","B",20220401000000);

insert into veicoli (veicolo_id,alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins)
values("Aovo", "Elettrico", "AovoPro colore nero opaco", "Prolungato", "monopattinoAovo.jpg", "Via Tiburtina 1361, 00131", "Monopattino", "Amministratore");

insert into veicoli (veicolo_id,alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins)
values("Liberty", "Benzina", "Liberty piaggio 125 Grigio", "No", "Piaggioliberty.jpg", "Via Parghelia 2, 00178", "Motorino", "Amministratore");

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('Audi', 'Auto', 'Disel', 'AudiA1, colore bianco', 'Italia, Torino, Via Genova 10126', 'Prolungato', 'audiA1.jpg', 'Amministratore');


insert into veicoli (veicolo_id,alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins)
values("Vespa", "Benzina", "Vespa anni 60, colore rosso fuoco", "Giornaliero", "VespaFuoco.jpg", "Italia, Roma, Via Nazionale 00184", "Motorino", "Amministratore");

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (5,20230118000000, 6, "Alessia", "Vespa");

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('Opel', 'Auto', 'Benzina', 'una bellissima macchina in noleggio', 'Italia, Roma, Via Montarlei 30', 'Giornaliero', 'https://source.unsplash.com/600x400?car', 'Amministratore');

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('Suzuki', 'Auto', 'Elettrica', 'una bellissima macchina in noleggio', 'Italia, Roma, Via Celacolui 89', 'Prolungato', 'https://source.unsplash.com/600x400?car', 'Amministratore');


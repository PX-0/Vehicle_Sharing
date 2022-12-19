INSERT INTO archivio_utenti (user_id, password, firma, tipo, nome, cognome, nascita, email, data_iscrizione)
VALUES ('Amministratore', 'Amministratore', 'Amministratore dei servizi', 'A','Paolino','Paperino','20/08/1900','paolino.paperino@paperopoli.com ', 20060101000000);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('2', '321', '13.50', 'Mastercard', '5167099046768999', 20250101);

insert into pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
values (1, 069, 800.00, "Carta di credito", 1342985084639857, 20230101);

insert into archivio_utenti(user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values("Mario", "Rossi", 20200304000000, "pino.rex123@pip.com", "Utente", "31/12/1998", "Rossi", "Mauri", "B", 20200405);

insert into veicoli (alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins,veicolo_id)
values("Benzina", "Fiat 600, colore blue cobalto", "false", "Fiato600.jpg", "Via dei colli della serpentara 00139", "Auto", "Amministratore", "Fiat");

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (1,20210303000000, 1, "Mario", "Fiat");

INSERT INTO archivio_utenti (user_id, password, firma, tipo, nome, cognome, nascita, email, data_iscrizione)
VALUES ('Paolo', 'paolo', 'Utente con diritti minimi', 'B', 'Paolo','DeSantis','20/10/2001', 'paolo.desantis@gmail.com', 20100801102040);

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('Ferrari', 'Auto', 'Benzina', '599xx evo, colore nero, 499,99cc', 'Italia, Roma, Via Genzano 89', 'true', 'https://www.gtspiritmedia.com/gtspirit/uploads/2015/06/Ferrari-599XX-For-Sale6.jpg', 'Amministratore');

INSERT INTO pagamenti (metodo_pagamento, n_carta, scadenza, cvv, importo) 
values ('Mastercard', '1234567890123456', 20221222, '123', 12000);

INSERT INTO prenotazioni (utente_id, veicolo_id, data_prenotazione, pagamento_id) values ('Paolo', 'Ferrari', 20221010101022, 3);


insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (3,20230811000000, 3, "Paolo", "Ferrari");


INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('4', '081', '150.00', 'Visa', '5377087046778099', 20250204);


insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Mattia","Verdi",20210604033845,"mattiaverdi@gmail.com","Utente","04/10/1990","mattia","VERDI","B",20220805191845);


insert into veicoli (veicolo_id,alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins)
values("Xiaomi", "Elettrico", "Xiaomi colore rosso metallizzato", "false", "monopattinoXiaomi.jpg", "Via appia nuova 678 00179", "Monopattino", "Amministratore");

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (4,20240207000000, 4, "Mattia", "Xiaomi");

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('5', '049', '260.00', 'Masterdcard', '4376049044278178', 20750104);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('6', '012', '50.00', 'Postepay', '1204863579425013', 20260807);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('7', '321', '450.00', 'Mastercard', '5167099046768999', 20250101);


INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('Trek', 'bicicletta', 'elettrica', 'colore nero', 'Italia, Roma, Via Fregene 00183', 'true', 'Trek.jpg', 'Amministratore');

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('E-bike', 'bicicletta', 'elettrica', 'Cube Stereo Hybrid 120 Pro 625, colore azzurro', 'Italia, Roma, Via Fregene 00183', 'false','cube.jpg','Amministratore');

insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Luca","Gialli",20180503050000,"lucagialli@gmail.com","Utente con diritti minimi","06/07/1999","luca","GIALLI","B",20190702000000);

insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Alessia","Como",20200204000000,"comale@tiscali.com","Utente","07/09/1995","alessia","ComAle","B",20210401000000);

insert into veicoli (veicolo_id,alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins)
values("Aovo", "Elettrico", "AovoPro colore nero opaco", "true", "monopattinoAovo.jpg", "via tiburtina 1361 00131", "Monopattino", "Amministratore");

insert into veicoli (veicolo_id,alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins)
values("Liberty", "Benzina", "Liberty piaggio 125 Grigio", "false", "Piaggioliberty.jpg", "via parghelia 2 00178", "Motorino", "Amministratore");

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES ('Audi', 'Auto', 'Disel', 'AudiA1, colore bianco', 'Italia, Torino, Via Genova 10126', 'true', 'audiA1.jpg', 'Amministratore');


insert into veicoli (veicolo_id,alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins)
values("Vespa", "Benzina", "Vespa anni 60, colore rosso fuoco", "false", "VespaFuoco.jpg", "Italia, Roma, Via Nazionale 00184", "Motorino", "Amministratore");

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (5,20221010000000, 6, "Alessia", "Vespa");



INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) VALUES ('Opel', 'Auto', 'Benzina', 'una bellissima macchina in noleggio', 'Italia, Roma, Via Montarlei 30', 'true', 'https://source.unsplash.com/600x400?car', 'Amministratore');
INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) VALUES ('Suzuki', 'Auto', 'Elettrica', 'una bellissima macchina in noleggio', 'Italia, Roma, Via Celacolui 89', 'true', 'https://source.unsplash.com/600x400?car', 'Amministratore');


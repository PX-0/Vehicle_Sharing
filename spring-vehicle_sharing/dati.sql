-- archivio_utenti-----------------------------------------
INSERT INTO archivio_utenti (user_id, password, firma, tipo, nome, cognome, nascita, email, data_iscrizione)
VALUES ('Amministratore', 'Amministratore', 'Amministratore dei servizi', 'A','Paolino','Paperino','20/08/1900','paolino.paperino@paperopoli.com ', 20060101000000);

insert into archivio_utenti(user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values("Mario", "Rossi", 20200304000000, "pino.rex123@pip.com", "Utente", "31/12/1998", "Rossi", "Mauri", "B", 20200405);

INSERT INTO archivio_utenti (user_id, password, firma, tipo, nome, cognome, nascita, email, data_iscrizione)
VALUES ('Paolo', 'paolo', 'Utente con diritti minimi', 'B', 'Paolo','DeSantis','20/10/2001', 'paolo.desantis@gmail.com', 20100801102040);

insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Luca","Gialli",20180503050000,"lucagialli@gmail.com","Utente con diritti minimi","06/07/1999","luca","GIALLI","B",20220702000000);

insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Alessia","Como",20200204000000,"comale@tiscali.com","Utente","07/09/1995","alessia","ComAle","B",20220401000000);

insert into archivio_utenti (user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values ("Mattia","Verdi",20210604033845,"mattiaverdi@gmail.com","Utente","04/10/1990","mattia","VERDI","B",20220805191845);


-- pagamenti --------------------------------------------------------------------------------

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('2', '321', '13.50', 'Mastercard', '5167099046768999', 20250101);

insert into pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
values (1, 069, 800.00, "Carta di credito", 1342985084639857, 20240101);

INSERT INTO pagamenti (metodo_pagamento, n_carta, scadenza, cvv, importo) 
values ('Mastercard', '1234567890123456', 20241222, '123', 12000);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('4', '081', '150.00', 'Visa', '5377087046778099', 20250204);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('5', '049', '260.00', 'Masterdcard', '4376049044278178', 20750104);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('6', '012', '50.00', 'Postepay', '1204863579425013', 20260807);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('7', '321', '450.00', 'Mastercard', '5167099046768999', 20250101);


-- veicoli -------------------------------------------------
insert into veicoli (id, modello, marca, colore, cilindrata, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins)
values(1, "Fiat 600", "Fiat", "Blue cobalto", "900cc", "Auto", "Benzina", "Riguardo i dettagli del telaio auto responsabile della tenuta di strada, comportamento di guida e comfort di guida. Sospensioni anteriori e Coil springs. sospensioni posteriori. Il sistema di frenata Seicento Sporting comprende Dischi nella parte anteriore e Tamburo nella parte posteriore. 3 porte e 5 posti", "Via dei colli della serpentara 00139", "Prolungato", "Fiato600.jpg", "Amministratore");

INSERT INTO veicoli (id, modello, marca, colore, cilindrata, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES (2, '599xx evo','Ferrari', 'Nero', '499,99cc', 'Auto', 'Benzina', "autovettura coupé, ala mobile come quella per la F1 solamente che non è controllata dal pilota ma elettronicamente tramite sensori che rilevano se si è su un rettilineo o in curva e adatta da sola la resistenza dell'ala",   'Italia, Roma, Via Genzano 89', 'Giornaliero', 'https://www.gtspiritmedia.com/gtspirit/uploads/2015/06/Ferrari-599XX-For-Sale6.jpg', 'Amministratore');

insert into veicoli (id, modello, marca, colore, cilindrata, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins)
values(3, "Mi M365 Pro 2", "Xiaomi", "Rosso metallizzato", "4t4Wh", "Monopattino", "Elettrico", "batteria da 474 Wh , 7.5 Ah e il peso di soli 14.2kg , è tranquillamente annoverabile nell'insieme dei Monopattini urbani di qualità; raggiunge una velocità di c.a. 25 km orari", "Via Appia Nuova 678, 00179", "No","monopattinoXiaomi.jpg", "Amministratore");

INSERT INTO veicoli (id, modello, marca, colore, cilindrata, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES (4, "Madone SLR 9 eTap Gen 7", 'Trek', 'Nero', "0", 'Bicicletta', 'Elettrica', " ultraleggera, velocissima e superfluida", 'Italia, Roma, Via Fregene 00183', 'Giornaliero', 'Trek.jpg', 'Amministratore');

INSERT INTO veicoli (id, modello, marca, colore, cilindrata, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
VALUES (5, "Cube Stereo Hybrid 120 Pro 625", 'E-bike', "Azzurra", "0", 'Bicicletta', 'Elettrica', "Raffinato design delle sospensioni a quattro barre che mantiene il ciclista isolato dagli urti e dalle vibrazioni del percorso", 'Italia, Roma, Via Fregene 00183', 'No','cube.jpg','Amministratore');

insert into veicoli (id, modello, marca, colore, cilindrata, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) 
values(6, "AovoPro", "Aovo", "Nero opaco", "350W", "Monopattino","Elettrico", "motore brushless da 350W che ti permette di risalire pendenze fino a 20°. Il brushless (senza spazzole) è un motore elettrico efficiente e longevo, perfetto per i monopattini. Resta fresco e non disperde energia in calore", "Via Tiburtina 1361, 00131", "Prolungato", "monopattinoAovo.jpg", "Amministratore");

insert into veicoli 
(id, modello, marca, colore, cilindrata, tipologia, alimentazione,descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins)
values
(7, "Swift", "Suzuki", "Grigio opaco", "1197cc", "Auto",
 "Ibrida", "La Suzuki Swift è una piccola a cinque porte particolarmente compatta e maneggevole.",
 "via dell'Arco di Travertino 8 00178", "Prolungato", "Swift.jpg", "Amministratore");
 
 insert into veicoli 
(id, modello, marca, colore,
 cilindrata, tipologia, alimentazione,descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins)
values
(8, "Corsa", "Opel", "Rossa", "1199cc", "Auto",
 "Diesel", "Conta all'attivo sei generazioni che l'hanno vista come una delle protagoniste dello scenario automobilistico inerente alle vetture da città o comunque a quelle di piccole dimensioni.",
 "via casilina 117 00182", "Giornaliero", "OpelCorsa.jpg", "Amministratore");
 
  insert into veicoli 
(id, modello, marca, colore,
 cilindrata, tipologia, alimentazione,descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins)
values
(9, "Vespa", "Piaggio", "Rosso Fuoco ", "50cc", "Scooter",
 "Benzina", "Vespa Primavera 50 cc quattro tempi adotta l’innovativo motore i-get dotato di sensore barometrico integrato",
 " via tuscolana 1520 00173 ", "Giornaliero", "Vespa.jpg", "Amministratore");
insert into veicoli 
(id, modello, marca, colore,
 cilindrata, tipologia, alimentazione,descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins)
values
(10, "A1", "Audi", "bianca ", "100cc", "Auto",
 "Diesel", "La seconda generazione di A1 Sportback, la compatta Audi più apprezzata, è caratterizzata da un design sportivo che fa subito colpo e da un’ampia flessibilità nelle opzioni di equipaggiamento",
 " Via Genova 10126 ", "Prolungato", "AudiA1.jpg", "Amministratore");
 
 insert into veicoli 
(id, modello, marca, colore,
 cilindrata, tipologia, alimentazione,descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins)
values
(11, "Liberty", "Piaggio", "Grigio ", "125cc", "Scooter",
 "Benzina", "Piaggio Liberty 125 ABS è la risposta ai bisogni di mobilità e di libertà di un vasto pubblico alla ricerca di stile, leggerezza, facilità di guida e sicurezza.",
 " Via Parghelia 2, 00178 ", "Prolungato", "Liberty.jpg", "Amministratore");


-- prenotazioni ------------------------------------------------------------------------------
insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (1,20230103000000, 1, "Mario", 1);

INSERT INTO prenotazioni (utente_id, veicolo_id, data_prenotazione, pagamento_id) 
values ('Paolo', 2, 20230210101022, 2);

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (3,20230124000000, 3, "Paolo", 3);

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (4,20230207000000, 4, "Mattia", 3);

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (5,20230118000000, 6, "Alessia", 9);


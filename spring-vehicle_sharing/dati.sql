INSERT INTO archivio_utenti (user_id, password, firma, tipo, nome, cognome, nascita, email, data_iscrizione)
VALUES ('Amministratore', 'Amministratore', 'Amministratore dei servizi', 'A','Paolino','Paperino','20/08/1900','paolino.paperino@paperopoli.com ', 20060101000000);

INSERT INTO pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
VALUES ('2', '321', '13.50', 'Mastercard', '5167099046768999', 20250101);

insert into pagamenti (id, cvv, importo, metodo_pagamento, n_carta, scadenza)
values (1, 069, 800.00, "Carta di credito", 1342985084639857, 20230101);

insert into archivio_utenti(user_id,cognome,data_iscrizione,email,firma,nascita,nome,password,tipo,ultima_modifica)
values("Utente 3", "Rossi", 20200304000000, "pino.rex123@pip.com", "Utente", "31/12/1998", "Rossi", "Mauri", "B", 20200405);

insert into veicoli (alimentazione,descrizione,disponibilita_noleggio,immagine_veicolo,posizione_attuale,tipologia,utente_ins,veicolo_id)
values("Benzina", "Fiat 600, colore blue cobalto", "false", "Fiato600.jpg", "Via dei colli della serpentara 00139", "Auto", "Amministratore", "Veicolo 3");

insert into prenotazioni (id, data_prenotazione, pagamento_id, utente_id, veicolo_id)
values (1,20210303000000, 1, "Utente 3", "Veicolo 3");

INSERT INTO archivio_utenti (user_id, password, firma, tipo, nome, cognome, nascita, email, data_iscrizione)
VALUES ('Paolo', 'paolo', 'Utente con diritti minimi', 'B', 'Paolo','DeSantis','20/10/2001', 'paolo.desantis@gmail.com', 20100801102040);

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) VALUES ('Ferrari', 'Auto', 'Benzina', '599xx evo, colore rosso, 499,99cc', 'Italia, Roma, Via Genzano 89', 'true', 'https://www.gtspiritmedia.com/gtspirit/uploads/2015/06/Ferrari-599XX-For-Sale6.jpg', 'Amministratore');

INSERT INTO pagamenti (metodo_pagamento, n_carta, scadenza, cvv, importo) values ('Mastercard', '1234567890123456', 20221222, '123', 12000);

INSERT INTO prenotazioni (utente_id, veicolo_id, data_prenotazione, pagamento_id) values ('Paolo', 'Ferrari', 20221010101022, 3);

INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) VALUES ('Ferrari', 'Auto', 'Benzina', 'una bellissima macchina in noleggio', 'Italia, Roma, Via Genzano 89', 'true', 'https://source.unsplash.com/600x400?car', 'Amministratore');
INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) VALUES ('Fiat', 'Auto', 'Diesel', 'una bellissima macchina in noleggio', 'Italia, Roma, Via Greco della Mantica 89', 'true', 'https://source.unsplash.com/600x400?car', 'Amministratore');
INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) VALUES ('Opel', 'Auto', 'Benzina', 'una bellissima macchina in noleggio', 'Italia, Roma, Via Montarlei 30', 'true', 'https://source.unsplash.com/600x400?car', 'Amministratore');
INSERT INTO veicoli (veicolo_id, tipologia, alimentazione, descrizione, posizione_attuale, disponibilita_noleggio, immagine_veicolo, utente_ins) VALUES ('Suzuki', 'Auto', 'Elettrica', 'una bellissima macchina in noleggio', 'Italia, Roma, Via Celacolui 89', 'true', 'https://source.unsplash.com/600x400?car', 'Amministratore');
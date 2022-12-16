package com.springvehicle_sharing.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Prenotazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "veicoloId")
	private Veicolo veicolo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "utenteId")
	private ArchivioUtenti utente;
	
	@Column(columnDefinition = "DATE CURRENT_TIMESTAMP")
	private LocalDateTime dataPrenotazione;
	
}

package com.springvehicle_sharing.entities;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "archivio_utenti")
public class ArchivioUtenti {
	
	@Id
	private String id;
	
	@Column(columnDefinition = "DATE")
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime ultimaModifica;
	
	private String password;
	private String firma;
	private char tipo;
	private String nome;
	private String cognome;
	private String nascita;
	private String email;
	
	@Column(columnDefinition = "DATE CURRENT_TIMESTAMP")
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime dataIscrizione;
	
	@OneToMany(mappedBy = "utenteIns", fetch = FetchType.LAZY)
	private List<Veicolo> veicoli;
	
	@OneToMany(mappedBy = "utenteId", fetch = FetchType.LAZY)
	private List<Prenotazione> prenotazioni;
	
}

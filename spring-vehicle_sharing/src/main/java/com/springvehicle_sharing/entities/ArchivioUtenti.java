package com.springvehicle_sharing.entities;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "archivio_utenti")
public class ArchivioUtenti {
	
	@Id
	private String id;
	
	@Column(columnDefinition = "DATE")
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
	
}

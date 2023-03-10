package com.springvehicle_sharing.entities;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "archivioUtenti")
public class ArchivioUtenti {
	
	@Id
	private String userId;
	
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime ultimaModifica;
	
	private String password;
	private String firma;
	private char tipo;
	private String nome;
	private String cognome;
	private String nascita;
	private String email;
	
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime dataIscrizione;
	
	@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "prenotazioni", "utenteIns"})
	@OneToMany(mappedBy = "utenteIns", fetch = FetchType.LAZY)
	private List<Veicolo> veicoli;
	
	@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "veicolo", "utente"})
	@OneToMany(mappedBy = "utente", fetch = FetchType.LAZY)
	private List<Prenotazione> prenotazioni;	

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public LocalDateTime getUltimaModifica() {
		return ultimaModifica;
	}

	public void setUltimaModifica(LocalDateTime ultimaModifica) {
		this.ultimaModifica = ultimaModifica;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirma() {
		return firma;
	}

	public void setFirma(String firma) {
		this.firma = firma;
	}

	public char getTipo() {
		return tipo;
	}

	public void setTipo(char tipo) {
		this.tipo = tipo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getNascita() {
		return nascita;
	}

	public void setNascita(String nascita) {
		this.nascita = nascita;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDateTime getDataIscrizione() {
		return dataIscrizione;
	}

	public void setDataIscrizione(LocalDateTime dataIscrizione) {
		this.dataIscrizione = dataIscrizione;
	}

//	@JsonManagedReference
	public List<Veicolo> getVeicoli() {
		return veicoli;
	}

	public void setVeicoli(List<Veicolo> veicoli) {
		this.veicoli = veicoli;
	}

//	@JsonManagedReference
	public List<Prenotazione> getPrenotazioni() {
		return prenotazioni;
	}

	public void setPrenotazioni(List<Prenotazione> prenotazioni) {
		this.prenotazioni = prenotazioni;
	}
	
	@Override
	public String toString() {
		return nome+","+cognome+","+userId;
	}
}

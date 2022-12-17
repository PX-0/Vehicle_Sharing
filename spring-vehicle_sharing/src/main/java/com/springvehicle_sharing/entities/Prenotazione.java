package com.springvehicle_sharing.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "prenotazioni")
public class Prenotazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "prenotazioni"})
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "veicolo_id")
	private Veicolo veicolo;
	
	@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "prenotazioni", "veicoli"})
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "utente_id")
	private ArchivioUtenti utente;
	
	@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "prenotazione"})
	@OneToOne
	@JoinColumn(name = "pagamento_id")
	private Pagamento pagamento;
	
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDateTime dataPrenotazione;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

//	@JsonBackReference
	public Veicolo getVeicolo() {
		return veicolo;
	}

	public void setVeicolo(Veicolo veicolo) {
		this.veicolo = veicolo;
	}

//	@JsonBackReference
	public ArchivioUtenti getUtente() {
		return utente;
	}

	public void setUtente(ArchivioUtenti utente) {
		this.utente = utente;
	}

	public Pagamento getPagamento() {
		return pagamento;
	}

	public void setPagamento(Pagamento pagamento) {
		this.pagamento = pagamento;
	}

	public LocalDateTime getDataPrenotazione() {
		return dataPrenotazione;
	}

	public void setDataPrenotazione(LocalDateTime dataPrenotazione) {
		this.dataPrenotazione = dataPrenotazione;
	}
	
}

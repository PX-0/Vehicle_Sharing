package com.springvehicle_sharing.entities;

import java.time.LocalDateTime;

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
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "veicoloId")
	private Veicolo veicolo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "utenteId")
	private ArchivioUtenti utente;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pagamentoId")
	private Pagamento pagamento;
	
	@Column(columnDefinition = "DATE CURRENT_TIMESTAMP")
	private LocalDateTime dataPrenotazione;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Veicolo getVeicolo() {
		return veicolo;
	}

	public void setVeicolo(Veicolo veicolo) {
		this.veicolo = veicolo;
	}

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

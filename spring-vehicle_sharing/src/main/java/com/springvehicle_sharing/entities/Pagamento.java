package com.springvehicle_sharing.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="pagamenti")
public class Pagamento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "pagamento"}) 
	@OneToOne(mappedBy = "pagamento", fetch = FetchType.LAZY)
	private Prenotazione prenotazione;
	
	private String metodoPagamento;
	private String nCarta;
	private LocalDate scadenza;
	private String cvv;
	
	@Column(columnDefinition = "DECIMAL(9,3)")
	private double importo;
	
	public Prenotazione getPrenotazione() {
		return prenotazione;
	}
	
	public void setPrenotazione(Prenotazione prenotazione) {
		this.prenotazione = prenotazione;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getMetodoPagamento() {
		return metodoPagamento;
	}
	
	public void setMetodoPagamento(String metodoPagamento) {
		this.metodoPagamento = metodoPagamento;
	}
	
	public String getnCarta() {
		return nCarta;
	}
	
	public void setnCarta(String nCarta) {
		this.nCarta = nCarta;
	}
	
	public LocalDate getScadenza() {
		return scadenza;
	}
	
	public void setScadenza(LocalDate scadenza) {
		this.scadenza = scadenza;
	}
	
	public String getCvv() {
		return cvv;
	}
	
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	
	public double getImporto() {
		return importo;
	}
	
	public void setImporto(double importo) {
		this.importo = importo;
	}
	
}

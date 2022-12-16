package com.springvehicle_sharing.entities;

import java.security.Timestamp;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "veicoli")
public class Veicolo {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	
	private String tipologia;
	private String alimentazione;
	private String posizioneAttuale;
	private String disponibilitaNoleggio;
	private LocalDate dataPrenotazione;
	private String immagineVeicolo;
	private String utenteIns;
	
	@OneToMany(mappedBy = "veicolo" , fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<ArchivioUtenti> archivioUtenti;
	
	public Veicolo() {
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTipologia() {
		return tipologia;
	}
	public void setTipologia(String tipologia) {
		this.tipologia = tipologia;
	}
	public String getAlimentazione() {
		return alimentazione;
	}
	public void setAlimentazione(String alimentazione) {
		this.alimentazione = alimentazione;
	}
	public String getPosizioneAttuale() {
		return posizioneAttuale;
	}
	public void setPosizioneAttuale(String posizioneAttuale) {
		this.posizioneAttuale = posizioneAttuale;
	}
	public String getDisponibilitaNoleggio() {
		return disponibilitaNoleggio;
	}
	public void setDisponibilitaNoleggio(String disponibilitaNoleggio) {
		this.disponibilitaNoleggio = disponibilitaNoleggio;
	}
	public LocalDate getDataPrenotazione() {
		return dataPrenotazione;
	}
	public void setDataPrenotazione(LocalDate dataPrenotazione) {
		this.dataPrenotazione = dataPrenotazione;
	}
	public String getImmagineVeicolo() {
		return immagineVeicolo;
	}
	public void setImmagineVeicolo(String immagineVeicolo) {
		this.immagineVeicolo = immagineVeicolo;
	}
	public String getUtenteIns() {
		return utenteIns;
	}
	public void setUtenteIns(String utenteIns) {
		this.utenteIns = utenteIns;
	}
	
	
	
}


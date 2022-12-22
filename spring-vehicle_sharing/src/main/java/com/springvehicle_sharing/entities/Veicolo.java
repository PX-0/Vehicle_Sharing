package com.springvehicle_sharing.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "veicoli")
public class Veicolo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String modello;
	private String marca;
	private String colore;
	private String cilindrata;

	
	
	private String tipologia;
	private String alimentazione;
	@Column(columnDefinition = "TEXT")
	private String descrizione;
	private String posizioneAttuale;
	private String disponibilitaNoleggio; // prolungato - giornaliero - no
	private String immagineVeicolo;
	
	@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "veicoli", "prenotazioni"})
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "utente_ins")
	private ArchivioUtenti utenteIns;
	
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "veicolo"})
	@OneToMany(mappedBy = "veicolo",  fetch = FetchType.LAZY)
	private List<Prenotazione> prenotazioni;

//	@JsonManagedReference
	public List<Prenotazione> getPrenotazioni() {
		return prenotazioni;
	}

	public void setPrenotazioni(List<Prenotazione> prenotazioni) {
		this.prenotazioni = prenotazioni;
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

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
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

	public String getImmagineVeicolo() {
		return immagineVeicolo;
	}

	public void setImmagineVeicolo(String immagineVeicolo) {
		this.immagineVeicolo = immagineVeicolo;
	}

//	@JsonBackReference
	public ArchivioUtenti getUtenteIns() {
		return utenteIns;
	}

	public void setUtenteIns(ArchivioUtenti utenteIns) {
		this.utenteIns = utenteIns;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getModello() {
		return modello;
	}

	public void setModello(String modello) {
		this.modello = modello;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getColore() {
		return colore;
	}

	public void setColore(String colore) {
		this.colore = colore;
	}

	public String getCilindrata() {
		return cilindrata;
	}

	public void setCilindrata(String cilindrata) {
		this.cilindrata = cilindrata;
	}
	
}

package com.springvehicle_sharing.entities;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "veicoli")
public class Veicolo {
	
	@Id
	private String id;
	
	private String tipologia;
	private String alimentazione;
	private String descrizione;
	private String posizioneAttuale;
	private String disponibilitaNoleggio;
	@Column(columnDefinition = "DATE")
    @DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDate dataPrenotazione;
	private String immagineVeicolo;
	

	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "utenteIns")
	private ArchivioUtenti utenteIns;
	
	@OneToMany(mappedBy = "veicolo",  fetch = FetchType.LAZY )
	private List<Prenotazione> prenotazioni;
	
	public Veicolo() {
		// TODO Auto-generated constructor stub
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
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

	public ArchivioUtenti getUtenteIns() {
		return utenteIns;
	}

	public void setUtenteIns(ArchivioUtenti utenteIns) {
		this.utenteIns = utenteIns;
	}
	

}

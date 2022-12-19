package com.springvehicle_sharing.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.springvehicle_sharing.dal.VeicoliDAO;
import com.springvehicle_sharing.entities.ArchivioUtenti;
import com.springvehicle_sharing.entities.Veicolo;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("veicoli")
public class VeicoliMVC {

	@Autowired
	VeicoliDAO dao;
	
	@GetMapping("inserisci")
	public String inserisciVeicolo(HttpSession session) {
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (session.getAttribute("loggedUser") != null) {
			
			if (utente.getTipo() != 'A')
				return "loginUserError";
			
			return "pagina-di-inserimento-veicolo";
		}
		
		return "redirect:/utenti/login";
	}
	
	@PostMapping("addVeicolo")
	public String addVeicolo(HttpSession session, @RequestParam("veicoloId") String veicoloId,
			@RequestParam("alimentazione") String alimentazione, @RequestParam("descrizione")
			String descrizione, @RequestParam(value = "disponibilitaNoleggio", 
			defaultValue = "false") boolean disponibilitaNoleggio, @RequestParam("immagineVeicolo") 
			String immagineVeicolo, @RequestParam("posizioneAttuale") String posizioneAttuale, 
			@RequestParam("tipologia") String tipologia) {
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (session.getAttribute("loggedUser") != null) {
			
			if (utente.getTipo() != 'A')
				return "loginUserError";
		}
		
		Veicolo veicolo = new Veicolo();
		veicolo.setVeicoloId(veicoloId);
		veicolo.setAlimentazione(alimentazione);
		veicolo.setDescrizione(descrizione);
		veicolo.setDisponibilitaNoleggio(String.valueOf(disponibilitaNoleggio));
		veicolo.setImmagineVeicolo(immagineVeicolo);
		veicolo.setPosizioneAttuale(posizioneAttuale);
		veicolo.setTipologia(tipologia);
		veicolo.setUtenteIns(utente);
		
		dao.save(veicolo);
		
		return inserisciVeicolo(session);
	}
	
	@GetMapping("addVeicolo")
	public String redirect() {
		return "redirect:/utenti/login";
	}
	
}
package com.springvehicle_sharing.presentation;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.springvehicle_sharing.dal.ArchivioUtentiDAO;
import com.springvehicle_sharing.dal.PrenotazioniDAO;
import com.springvehicle_sharing.dal.VeicoliDAO;
import com.springvehicle_sharing.entities.ArchivioUtenti;
import com.springvehicle_sharing.entities.Prenotazione;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("prenotazioni")
public class PrenotazioniMVC {
	
	@Autowired
	PrenotazioniDAO dao;
	
	@Autowired
	ArchivioUtentiDAO daoU;
	
	@Autowired
	VeicoliDAO daoV;
	
	//UTENTE
	
	@PostMapping("addPrenotazione")
	public String addPrenotazioneUtente(HttpSession session, Model m, 
			@RequestParam("utenteId") String u, @RequestParam("veicoloId") String v,
			@RequestParam("datePicker") String datePicker) {
		
		String prevId = (String) session.getAttribute("veicoloSingoloId");
		
		session.removeAttribute("veicoloSingoloId");
//		System.out.println(u);
//		System.out.println(v);
		
		if (session.getAttribute("loggedUser") == null) {
			//m.addAttribute("notLogged", true);
			return "redirect:/veicoli/" + prevId;
		}

		String[] data = datePicker.split("-");
		
		Prenotazione prenotazione = new Prenotazione();
		prenotazione.setDataPrenotazione(LocalDateTime.of(LocalDate.of(Integer.valueOf(
				data[0]), Integer.valueOf(data[1]), Integer.valueOf(data[2])), 
				LocalTime.of(0, 0)));
		prenotazione.setVeicolo(daoV.findById(v).get());
		prenotazione.setUtente(daoU.findById(u).get());
		
		dao.save(prenotazione);
		
		//session.setAttribute("avvenuta", true);
		return "redirect:/veicoli/" + prevId;
	}
	
	@GetMapping("addPrenotazione")
	public String addPrenotazioneRedirect() {
		return "redirect:/";
	}
	
	//ADMIN
	
	@GetMapping("elenco")
	public String elencoPrenotazioni(HttpSession session, Model m) {
		
		if (session.getAttribute("loggedUser") == null) {
			session.setAttribute("showBtn", false);
			return "loginUserError";
		}
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (session.getAttribute("loggedUser") != null) {
			
			if (utente.getTipo() != 'A') {
				session.setAttribute("showBtn", true);
				return "loginUserError";
			}
		}
		
		return "elencoPrenotazioni"; //da fare
	}
	
	@RequestMapping("logout")
	public String logout(HttpSession session) {
		session.removeAttribute("loggedUser");
		session.removeAttribute("showBtn");
		return "redirect:/";
	}
	
	@PostMapping("editPrenotazione")
	public String editPrenotazione (HttpSession session,
			@RequestParam("dataPrenotazione") LocalDateTime dataPrenotazione,
			@RequestParam("veicoloId") String veicoloId,
			@RequestParam("utente") String utente, Model m) {
		
		Prenotazione prenotazione = new Prenotazione();
		prenotazione.setDataPrenotazione(dataPrenotazione);
		prenotazione.setVeicolo(daoV.findById(veicoloId).get());
		prenotazione.setUtente(daoU.findById(utente).get());
		
		
		dao.save(prenotazione);
		
		return elencoPrenotazioni(session, m);
	}
	
	@GetMapping("editPrenotazione")
	public String redirectEditPrenotazione() {
		return "redirect:/elenco"; //
	
		
		
	
	

	}
}

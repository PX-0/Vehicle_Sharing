package com.springvehicle_sharing.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.springvehicle_sharing.dal.VeicoliDAO;
import com.springvehicle_sharing.entities.ArchivioUtenti;

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
	
}

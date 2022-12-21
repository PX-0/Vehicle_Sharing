package com.springvehicle_sharing.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.springvehicle_sharing.dal.ArchivioUtentiDAO;
import com.springvehicle_sharing.entities.ArchivioUtenti;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("utenti")
public class ArchivioUtentiMVC {
	
	@Autowired
	ArchivioUtentiDAO dao;
	
	@GetMapping("login")
	public String login(HttpSession session) {
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (utente != null) {
			
			/*if (utente.getTipo() != 'A')
				return "loginUserError";
			
			return "pannello-di-lavoro";*/
			return "redirect:/";
		}
		
		return "login";
	}
	
	@GetMapping("login/{id}")
	public String loginVId(HttpSession session, 
			@PathVariable("id") String veicoloID) {
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		session.setAttribute("loginVeicoloID", veicoloID);
		
		/*if (utente != null) {
			
			if (utente.getTipo() != 'A')
				return "loginUserError";
			
			return "pannello-di-lavoro";
			return "redirect:/";
		}*/
		
		return "login";
	}
	
	@PostMapping("loginCheck")
	public String loginCheck(@RequestParam("username") String username, 
			@RequestParam("password") String password, HttpSession session,
			RedirectAttributes redirectAttrs) {
		
		if (dao.findByUserIdEqualsAndPasswordEquals(username, password) == null) {
			redirectAttrs.addFlashAttribute("loginFailed", "I dati inseriti non sono corretti");
			return "redirect:/utenti/login";
		}
		
		ArchivioUtenti utente = dao.findByUserIdEqualsAndPasswordEquals(username, password);
		
//		System.out.println(utente.getTipo());
			
		session.setAttribute("loggedUser", utente);
		//session.setAttribute("loggedUserId", utente.getUserId());
		
		/*if (utente.getTipo() != 'A') {
			session.setAttribute("showBtn", true);
			return "loginUserError";
		}*/
		
		if (utente.getTipo() == 'A')
			return "pannello-di-lavoro";
		
//		if (session.getAttribute("loginVeicoloID") != null) {
//			String loginVeicoloID = (String) session.getAttribute("loginVeicoloID");
//			session.removeAttribute("loginVeicoloID");
//			return "redirect:/veicoli/" + loginVeicoloID;
//		}
		
		return "redirect:/";
	}
	
	@PostMapping("login/loginCheck")
	public String loginCheckConId(@RequestParam("username") String username, 
			@RequestParam("password") String password, HttpSession session, 
			RedirectAttributes redirectAttrs) {
		
		if (dao.findByUserIdEqualsAndPasswordEquals(username, password) == null) {
			redirectAttrs.addFlashAttribute("loginFailed", "I dati inseriti non sono corretti");
			return "redirect:/utenti/login";
		}
		
		ArchivioUtenti utente = dao.findByUserIdEqualsAndPasswordEquals(username, password);
		
//		System.out.println(utente.getTipo());
		
		session.setAttribute("loggedUser", utente);
		//session.setAttribute("loggedUserId", utente.getUserId());
		
		/*if (utente.getTipo() != 'A') {
			session.setAttribute("showBtn", true);
			return "loginUserError";
		}*/
		
		if (utente.getTipo() == 'A')
			return "pannello-di-lavoro";
		
		if (session.getAttribute("loginVeicoloID") != null) {
			String loginVeicoloID = (String) session.getAttribute("loginVeicoloID");
			session.removeAttribute("loginVeicoloID");
			return "redirect:/veicoli/" + loginVeicoloID;
		}
		
		return "redirect:/";
	}
	
	
	
	@GetMapping("loginCheck")
	public String redirect() {
		return "redirect:/utenti/login";
	}
	
	@RequestMapping("logout")
	public String logout(HttpSession session) {
		session.removeAttribute("loggedUser");
		session.removeAttribute("showBtn");
		return "redirect:/";
	}
	
}

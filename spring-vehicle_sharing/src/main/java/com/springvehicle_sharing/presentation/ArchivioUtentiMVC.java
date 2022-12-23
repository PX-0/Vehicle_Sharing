package com.springvehicle_sharing.presentation;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
			@PathVariable("id") int veicoloID) {
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (utente != null) {
			
			/*if (utente.getTipo() != 'A')
				return "loginUserError";
			
			return "pannello-di-lavoro";*/
			return "redirect:/veicoli/" + String.valueOf(veicoloID);
		}
		
		session.setAttribute("loginVeicoloID", veicoloID);
		
		return "login";
	}
	
	@PostMapping("loginCheck")
	public String loginCheck(@RequestParam("username") String username, 
			@RequestParam("password") String password, HttpSession session,
			RedirectAttributes redirectAttrs) {
		
		if (dao.findByUserIdEqualsAndPasswordEquals(username, password) == null) {
			redirectAttrs.addFlashAttribute("loginFailed", "Nessun account trovato con queste credenziali");
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
			String loginVeicoloID = String.valueOf(session.getAttribute("loginVeicoloID"));
			session.removeAttribute("loginVeicoloID");
			return "redirect:/veicoli/" + loginVeicoloID;
		}
		
		return "redirect:/";
	}
	
	@GetMapping("loginCheck")
	public String redirect() {
		return "redirect:/utenti/login";
	}
	
	// Pannello di lavoro
	@RequestMapping("pannello")
	public String pannelloDiLavoro(HttpSession session) {
		
		ArchivioUtenti utente = (ArchivioUtenti) session.getAttribute("loggedUser");
		
		if (utente != null && utente.getTipo() == 'A')
				return "pannello-di-lavoro";
		
		return "loginUserError";
	}
	
	@GetMapping("register")
	public String register() {
		return "registrazione";
	}
	
	@PostMapping("registerCheck")
	public String registerCheck(HttpSession session, @RequestParam("nome") String nome,
			@RequestParam("cognome") String cognome, @RequestParam("email") String email,
			@RequestParam(value = "dataNascita", required = false) LocalDate dataNascita,
			@RequestParam("username") String username, @RequestParam("password") String password,
			RedirectAttributes redirectAttrs) {
		
		if (session.getAttribute("loggedUser") != null)
			return "redirect:/";
		
		if (dao.existsById(username) == true) {
			redirectAttrs.addFlashAttribute("registerFailed", "ERRORE - Il nome utente è già esistente");
			return "redirect:/utenti/register";
		}
		
		ArchivioUtenti utenteReg = new ArchivioUtenti();
		utenteReg.setNome(nome);
		utenteReg.setCognome(cognome);
		utenteReg.setEmail(email);
		
		if (dataNascita != null) {
			
			String giorno = String.valueOf(dataNascita.getDayOfMonth());
			String mese = String.valueOf(dataNascita.getMonthValue());
			String anno = String.valueOf(dataNascita.getYear());
			
			utenteReg.setNascita(giorno + "/" + mese + "/" + anno);
		}
		
		utenteReg.setUserId(username);
		utenteReg.setPassword(password);
		
		utenteReg.setDataIscrizione(LocalDateTime.now());
		utenteReg.setUltimaModifica(LocalDateTime.now());
		utenteReg.setTipo('B');
		utenteReg.setFirma("Utente");
		
		dao.save(utenteReg);
		
		return "redirect:/";
	}
	
	@GetMapping("registerCheck")
	public String redirectRegister() {
		return "redirect:/utenti/register";
	}
	
	@RequestMapping("logout")
	public String logout(HttpSession session) {
		session.removeAttribute("loggedUser");
		session.removeAttribute("showBtn");
		return "redirect:/";
	}
	
}

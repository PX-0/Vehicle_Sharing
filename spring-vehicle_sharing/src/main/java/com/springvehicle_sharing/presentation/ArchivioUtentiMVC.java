package com.springvehicle_sharing.presentation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
			
			if (utente.getTipo() != 'A')
				return "loginUserError";
			
			return "pannello-di-lavoro";
		}
		
		return "login";
	}
	
	@PostMapping("loginCheck")
	public String loginCheck(@RequestParam("username") String username, @RequestParam("password") String password, HttpSession session, Model m) {
		
		ArchivioUtenti utente = dao.findByUserIdEqualsAndPasswordEquals(username, password);
		
		System.out.println(utente.getTipo());
		
		if (utente != null) {
			
			session.setAttribute("loggedUser", utente);
			
			if (utente.getTipo() != 'A') {
				session.setAttribute("showBtn", true);
				return "loginUserError";
			}
			
			return "pannello-di-lavoro";
		}
		
		return "login";
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

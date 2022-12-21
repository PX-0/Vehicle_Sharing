package com.springvehicle_sharing.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springvehicle_sharing.dal.ArchivioUtentiDAO;
import com.springvehicle_sharing.entities.ArchivioUtenti;

@RestController
@RequestMapping("api")
public class ArchivioUtentiREST {
	
	@Autowired
	ArchivioUtentiDAO dao;
	
	@GetMapping("utenti")
	public List<ArchivioUtenti> findAll() {
		return dao.findAll();
	}
	
	@GetMapping("utenti/{id}")
	public ArchivioUtenti findById(@PathVariable("id") String id) {
		return dao.findById(id).get();
	}
	
	@GetMapping("utentiByCredentials/{username}&{password}")
	@CrossOrigin
	public ArchivioUtenti findByCredentials(@PathVariable("username") String userId, @PathVariable("password") String password) {
		return dao.findByUserIdEqualsAndPasswordEquals(userId, password);
	}
	
	@PostMapping("utenti")
	public ArchivioUtenti setUtente(@RequestBody ArchivioUtenti utente) {
		return dao.save(utente);
	}
	
	@GetMapping("utentiByTipo/{tipo}")
	public List<ArchivioUtenti> utentiByTipo(@PathVariable("tipo") char tipo) {
		return dao.findByTipoEquals(tipo);
	}
	
}

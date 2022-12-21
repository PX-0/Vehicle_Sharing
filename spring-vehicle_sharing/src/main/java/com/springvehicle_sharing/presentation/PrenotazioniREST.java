package com.springvehicle_sharing.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springvehicle_sharing.dal.PrenotazioniDAO;
import com.springvehicle_sharing.entities.Prenotazione;

@RestController
@RequestMapping("api")
public class PrenotazioniREST {
	
	@Autowired
	PrenotazioniDAO dao;
	
	@GetMapping("prenotazioni")
	public List<Prenotazione> findAll() {
		return dao.findAll();
	}
	
	@GetMapping("prenotazioni/{id}")
	public Prenotazione findById(@PathVariable("id") int id) {
		return dao.findById(id).get();
	}
	
	@PostMapping("prenotazioni")
	public Prenotazione addPrenotazione(@RequestBody Prenotazione prenotazione) {
		return dao.save(prenotazione);
	}
	
	@DeleteMapping("prenotazioni/{id}")
	public void deletePrenotazione(@PathVariable("id") int id) {
		dao.deleteById(id);
	}
	
}

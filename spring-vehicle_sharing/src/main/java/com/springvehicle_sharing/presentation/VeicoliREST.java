package com.springvehicle_sharing.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springvehicle_sharing.dal.PrenotazioniDAO;
import com.springvehicle_sharing.dal.VeicoliDAO;
import com.springvehicle_sharing.entities.Veicolo;



@RestController
@RequestMapping("api")
public class VeicoliREST {
	
	@Autowired
	private VeicoliDAO dao;
	
	@Autowired
	PrenotazioniDAO pDao;
	
	@GetMapping("veicoli")
	@CrossOrigin
	public List<Veicolo> findAll(){
		return dao.findAll();
	}
	
	@GetMapping("veicoli/{id}")
	public Veicolo findById(@PathVariable("id") int id) {
		return dao.findById(id).get();
	}
	
	@PostMapping("veicoli")
	public Veicolo addVeicolo(@RequestBody Veicolo v) {
		return dao.save(v);
	}
	
	@DeleteMapping("veicoli/{id}")
	public void deleteVeicolo(@PathVariable("id") int id) {
		
		pDao.updateVeicoloId(id);
		
		dao.deleteById(id);
	}

}

package com.springvehicle_sharing.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springvehicle_sharing.dal.VeicoliDAO;
import com.springvehicle_sharing.entities.Veicolo;



@RestController
@RequestMapping("api")
public class VeicoloREST {
	
	@Autowired
	private VeicoliDAO dao;
	
	@GetMapping("veicoli")
	public List<Veicolo> findAll(){
		return dao.findAll();
	}
	
	@GetMapping("veicoli/{id}")
	public Veicolo findById(@PathVariable("id") String id) {
		return dao.findById(id).get();
	}
	
	@PostMapping("veicoli")
	public Veicolo addVeicolo(@RequestBody Veicolo v) {
		return dao.save(v);
	}
	

}

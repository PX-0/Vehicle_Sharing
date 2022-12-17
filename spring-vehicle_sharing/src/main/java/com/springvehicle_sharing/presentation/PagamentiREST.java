package com.springvehicle_sharing.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springvehicle_sharing.dal.PagamentiDAO;
import com.springvehicle_sharing.entities.Pagamento;

@RestController
@RequestMapping("api")
public class PagamentiREST {
	
	@Autowired
	private PagamentiDAO pagDao;
	
	@GetMapping("pagamenti")
	public List<Pagamento> findAll(){
		return pagDao.findAll();
	}
	
	@GetMapping("pagamenti/{id}")
	public Pagamento findById(@PathVariable("id") Integer id){
		return pagDao.findById(id).get();
	}
	
	@PostMapping("pagamenti")
	public Pagamento addPagamento(@RequestBody Pagamento p) {
		return pagDao.save(p);
	}
	
	

	
}

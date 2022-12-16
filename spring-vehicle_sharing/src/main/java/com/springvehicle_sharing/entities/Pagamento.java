package com.springvehicle_sharing.entities;



import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="pagamento")
public class Pagamento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@OneToOne(mappedBy = "pagamentoId")
	    private Pagamento pagamento;
	
	private String metodoPagamento;
	private String nCarta;
	private LocalDate scadenza;
	private String cvv;
	private double importo;
	
	

}

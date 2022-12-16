package com.springvehicle_sharing.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Prenotazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	
	@Column(columnDefinition = "DATE CURRENT_TIMESTAMP")
	private LocalDateTime dataPrenotazione;
	
}

package com.springvehicle_sharing.dal;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springvehicle_sharing.entities.Prenotazione;

public interface PrenotazioniDAO extends JpaRepository<Prenotazione, Integer> {

}

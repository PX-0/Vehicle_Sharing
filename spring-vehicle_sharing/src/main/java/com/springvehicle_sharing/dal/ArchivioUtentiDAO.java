package com.springvehicle_sharing.dal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springvehicle_sharing.entities.ArchivioUtenti;

public interface ArchivioUtentiDAO extends JpaRepository<ArchivioUtenti, String> {

	/**
	 * Utilizzato principalmente per effettuare il login
	 * @param username dell'utente
	 * @param password dell'utente
	 * @return utente con quei parametri se esistente
	 */
	ArchivioUtenti findByUserIdEqualsAndPasswordEquals(String userId, String password);
	
	List<ArchivioUtenti> findByTipoEquals(char tipo);
	
}

package com.springvehicle_sharing.dal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springvehicle_sharing.entities.ArchivioUtenti;
import com.springvehicle_sharing.entities.Prenotazione;


public interface PrenotazioniDAO extends JpaRepository<Prenotazione, Integer> {
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE prenotazioni set veicolo_id = NULL WHERE veicolo_id = ?1", nativeQuery = true)
	void updateVeicoloId(int veicoloId);
	
	List<Prenotazione> findByUtente(ArchivioUtenti utente);
}

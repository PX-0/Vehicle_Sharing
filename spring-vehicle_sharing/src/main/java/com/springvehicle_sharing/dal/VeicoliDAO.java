package com.springvehicle_sharing.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springvehicle_sharing.entities.Veicolo;

@Repository
public interface VeicoliDAO extends JpaRepository<Veicolo, String>{

}

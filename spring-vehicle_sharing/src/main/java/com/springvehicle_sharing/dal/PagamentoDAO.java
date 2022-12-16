package com.springvehicle_sharing.dal;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springvehicle_sharing.entities.Pagamento;

public interface PagamentoDAO extends JpaRepository<Pagamento, Integer> {

}

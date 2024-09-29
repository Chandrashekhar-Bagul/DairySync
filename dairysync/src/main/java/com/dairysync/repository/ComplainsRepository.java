
package com.dairysync.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dairysync.model.Complaints;
import com.dairysync.model.User;

@Repository

public interface ComplainsRepository extends JpaRepository<Complaints, Long> {
Optional<Complaints> findById(Long id);

}

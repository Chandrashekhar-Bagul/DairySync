package com.dairysync.repository;
import com.dairysync.model.Billing;
import com.dairysync.model.BillingMonth;
import com.dairysync.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface BillingRepository extends JpaRepository<Billing, Long> {
    Optional<Billing> findByUserAndMonthAndYear(User user, BillingMonth month, int year);
}

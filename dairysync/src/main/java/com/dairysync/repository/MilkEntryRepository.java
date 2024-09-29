package com.dairysync.repository;

import com.dairysync.model.MilkEntry;
import com.dairysync.model.Shift;
import com.dairysync.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository

public interface MilkEntryRepository extends JpaRepository<MilkEntry, Long> {
	@Autowired
    List<MilkEntry> findByUserId(Long userId);
	@Autowired
    List<MilkEntry> findByUserName(String name);
	@Autowired
	List<MilkEntry> findByUserEmail(String email);
	@Autowired
    List<MilkEntry> findByDate(LocalDate date);
	@Autowired
    List<MilkEntry> findByUserIdAndShift(Long userId, Shift shift);
	@Autowired
    List<MilkEntry> findByDateAndShift(LocalDate date, Shift shift);

    @Query("SELECT me FROM MilkEntry me WHERE me.user = :user AND FUNCTION('MONTH', me.date) = :month AND FUNCTION('YEAR', me.date) = :year")
    List<MilkEntry> findByUserAndMonthAndYear(@Param("user") User user, @Param("month") int month, @Param("year") int year);
}


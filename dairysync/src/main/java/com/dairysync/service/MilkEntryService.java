package com.dairysync.service;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.dairysync.exception.NoSuchElementException;
import com.dairysync.model.BillingMonth;
//import com.dairysync.exception.UserNotFoundException;
import com.dairysync.model.MilkEntry;
import com.dairysync.model.MilkType;
import com.dairysync.model.Shift;
import com.dairysync.model.User;
import com.dairysync.repository.MilkEntryRepository;
import com.dairysync.repository.UserRepository;

import jakarta.validation.ConstraintViolationException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import java.util.Optional;

@Service
public class MilkEntryService {
	@Autowired
    private  MilkEntryRepository milkEntryRepository;
	@Autowired
    private  UserRepository userRepository;

	public MilkEntry createMilkEntry(Long userId, MilkEntry newMilkEntry) throws Exception {
	    User user = userRepository.findById(userId)
	        .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));

	    System.out.println("MilkType: " + newMilkEntry.getMilkType());
	    
	    System.out.println("Found User Details: " + userId);
	    MilkEntry milkEntry = new MilkEntry();
	    milkEntry.setDate(LocalDate.now());
	    milkEntry.setEntryTime(LocalDateTime.now());
	    milkEntry.setDegree(newMilkEntry.getDegree());
	    milkEntry.setFat(newMilkEntry.getFat());
	    milkEntry.setMilkType(newMilkEntry.getMilkType()); // Ensure this is not null
	    milkEntry.setPrice(newMilkEntry.getPrice());
	    milkEntry.setQuantity(newMilkEntry.getQuantity());
	    milkEntry.setShift(newMilkEntry.getShift());
	    milkEntry.setSnf(newMilkEntry.getSnf());
	    milkEntry.setTotalPrice(newMilkEntry.getPrice() * newMilkEntry.getQuantity());
	    milkEntry.setUser(user);

	    return milkEntryRepository.save(milkEntry);
	}
	
	public List<MilkEntry> getAllMilkEntries() {
		List<MilkEntry> entries = milkEntryRepository.findAll();
        entries.forEach(entry -> {
            Hibernate.initialize(entry.getUser()); // Initialize the user proxy
        });
        return entries;
	}
	public Optional<MilkEntry> getMilkEntryById(Long id) {
		return milkEntryRepository.findById(id);
	}

	public List<MilkEntry> getMilkEntriesByUserId(Long userId) {
		return milkEntryRepository.findByUserId(userId);
	}

	public List<MilkEntry> getMilkEntriesByDate(LocalDate date) {
		return milkEntryRepository.findByDate(date);
	}
	

	public List<MilkEntry> getMilkEntriesByUserIdAndShift(Long userId, Shift shift) {
		return milkEntryRepository.findByUserIdAndShift(userId, shift);
	}

	public List<MilkEntry> getMilkEntriesByDateAndShift(LocalDate date, Shift shift) {
		return milkEntryRepository.findByDateAndShift(date, shift);
	}

	public MilkEntry updateMilkEntry(Long id, MilkEntry updatedMilkEntry) {
		return milkEntryRepository.findById(id).map(milkEntry -> {
			milkEntry.setDate(LocalDate.now());
			milkEntry.setEntryTime(LocalDateTime.now());
			milkEntry.setMilkType(updatedMilkEntry.getMilkType());
			milkEntry.setQuantity(updatedMilkEntry.getQuantity());
			milkEntry.setFat(updatedMilkEntry.getFat());
			milkEntry.setSnf(updatedMilkEntry.getSnf());
			milkEntry.setDegree(updatedMilkEntry.getDegree());
			milkEntry.setPrice(updatedMilkEntry.getPrice());
			milkEntry.setShift(updatedMilkEntry.getShift());
			// Recalculate total price
			milkEntry.setTotalPrice(updatedMilkEntry.getQuantity() * updatedMilkEntry.getPrice());
			return milkEntryRepository.save(milkEntry);
		}).orElseThrow(() -> new RuntimeException("MilkEntry not found with id " + id));
	}
	
	public List<MilkEntry> getMilkEntriesByUserAndMonth(User user, BillingMonth month, int year) {
        int monthValue = month.getValue(); // Assuming BillingMonth is an enum with a method getValue()
        return milkEntryRepository.findByUserAndMonthAndYear(user, monthValue, year);
    }
	public List<MilkEntry> getMilkEntriesByUserEmail(String email) {
        return milkEntryRepository.findByUserEmail(email);
    }
	
	public void deleteMilkEntry(Long id) {
		milkEntryRepository.deleteById(id);
	}
}

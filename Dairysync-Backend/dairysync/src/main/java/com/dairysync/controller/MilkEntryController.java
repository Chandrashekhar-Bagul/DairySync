package com.dairysync.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dairysync.model.MilkEntry;
import com.dairysync.model.Shift;
import com.dairysync.model.User;
import com.dairysync.repository.MilkEntryRepository;
import com.dairysync.service.MilkEntryService;
import com.dairysync.service.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/milk-entries")
public class MilkEntryController {

    @Autowired
    private MilkEntryService milkEntryService;
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private MilkEntryRepository milkEntryRepository;
    
    @PostMapping("/create/{userId}")
    	
    public ResponseEntity<?> createMilkEntry( @RequestBody MilkEntry newMilkEntry, @PathVariable Long userId) {
        try {
            MilkEntry milkEntry = milkEntryService.createMilkEntry(userId, newMilkEntry);
            return ResponseEntity.ok(milkEntry);
        } catch (Exception e) {
            // Log the exception and return a user-friendly error response
            System.err.println("Error occurred: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while creating the milk entry.");
        }
    }
    
    @GetMapping("/all")
    public List<MilkEntry> getAllMilkEntries() {
        return milkEntryService.getAllMilkEntries();
    }
    
//    @GetMapping("/user/{id}")
//    public ResponseEntity<MilkEntry> getMilkEntryById(@PathVariable Long id) {
//    	System.out.println("Found Id-------> is "+id);
//        return milkEntryService.getMilkEntryById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
//    }
    
 // Get Milk Entry by ID
    @GetMapping("/user/id/{id}")
    public ResponseEntity<MilkEntry> getMilkEntryById(@PathVariable Long id) {
        System.out.println("Found Id-------> is " + id);
        return milkEntryService.getMilkEntryById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}/shift/{shift}")
    public ResponseEntity<List<MilkEntry>> getMilkEntriesByUserIdAndShift(
            @PathVariable Long userId, @PathVariable Shift shift) {
        List<MilkEntry> milkEntries = milkEntryService.getMilkEntriesByUserIdAndShift(userId, shift);
        return ResponseEntity.ok(milkEntries);
    }
    
    @GetMapping("/date")//http://localhost:8008/api/milk-entries/date?date=2024-08-13
    public ResponseEntity<List<MilkEntry>> getMilkEntriesByDate(@RequestParam LocalDate date) {
        List<MilkEntry> milkEntries = milkEntryService.getMilkEntriesByDate(date);
        return ResponseEntity.ok(milkEntries);
    }

    @GetMapping("/date/shift")//http://localhost:8008/api/milk-entries/date/shift?date=2024-08-13&shift=MORNING
    public ResponseEntity<List<MilkEntry>> getMilkEntriesByDateAndShift(
            @RequestParam LocalDate date, @RequestParam Shift shift) {
        List<MilkEntry> milkEntries = milkEntryService.getMilkEntriesByDateAndShift(date, shift);
        return ResponseEntity.ok(milkEntries);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MilkEntry> updateMilkEntry(@PathVariable Long id, @RequestBody MilkEntry updatedMilkEntry) {
        try {
            MilkEntry milkEntry = milkEntryService.updateMilkEntry(id, updatedMilkEntry);
            return ResponseEntity.ok(milkEntry);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

//    @GetMapping("/user/{email}")
//    public ResponseEntity<?> getMilkEntriesByUserEmail(@PathVariable String email) {
//        List<MilkEntry> milkEntries = milkEntryService.getMilkEntriesByUserEmail(email);
//        if (milkEntries.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No MilkEntry records found for the given email.");
//        }
//        return ResponseEntity.ok(milkEntries);
//    }

 // Get Milk Entries by User Email
    @GetMapping("/user/email")
    public ResponseEntity<List<MilkEntry>> getMilkEntriesByUserEmail(@RequestParam String email) {
        List<MilkEntry> milkEntries = milkEntryService.getMilkEntriesByUserEmail(email);
        return milkEntries.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(milkEntries);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMilkEntry(@PathVariable Long id) {
        milkEntryService.deleteMilkEntry(id);
        return ResponseEntity.noContent().build();
    }
}

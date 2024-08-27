
package com.dairysync.service;


import com.dairysync.model.Complaints;
import com.dairysync.model.User;
import com.dairysync.repository.ComplainsRepository;
import com.dairysync.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplainsService {

    @Autowired
    private ComplainsRepository complaintRepository;
    @Autowired
    private UserRepository userRepository;


    public Complaints raiseComplaint(Long userId, Complaints complaint) throws Exception {
        // Fetch the user by ID, or persist it if necessary
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));

        // Set the user for the complaint
        complaint.setUser(user);

        // Now save the complaint with the persisted user
        return complaintRepository.save(complaint);
    }
    public List<Complaints> getComplaintById(Long id) {
        return (List<Complaints>) complaintRepository.findById(id).orElse(null);
    }
   
}

package com.dairysync.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dairysync.model.Complaints;
import com.dairysync.service.ComplainsService;
import com.dairysync.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/complaints")
public class ComplaintsController {

    @Autowired
    private ComplainsService complaintService;

    @Autowired
    private UserService userService;

    @PostMapping("/raise/{userid}")
    public ResponseEntity<Complaints> raiseComplaint(@RequestBody Complaints complaint, @PathVariable Long userid) throws Exception {
        Complaints raisedComplaint = complaintService.raiseComplaint(userid, complaint);
        return ResponseEntity.ok(raisedComplaint);
    }

    @GetMapping
    public ResponseEntity<List<Complaints>> getAllComplaints() {
        return ResponseEntity.ok(complaintService.getComplaintById(null));
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Complaints>> getComplaintById(@PathVariable Long id) {
        List<Complaints> complaint = complaintService.getComplaintById(id);
        return complaint != null ? ResponseEntity.ok(complaint) : ResponseEntity.notFound().build();
    }
}

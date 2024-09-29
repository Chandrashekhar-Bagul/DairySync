package com.dairysync.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dairysync.model.Billing;
import com.dairysync.model.BillingMonth;
import com.dairysync.model.User;
import com.dairysync.service.BillingService;
import com.dairysync.service.UserService;

@RestController
@RequestMapping("/api/billing")
public class BillingController {

    @Autowired
    private BillingService billingService;
    @Autowired
    private UserService userService;

    @PostMapping("/generate/{userId}/{month}/{year}")//http://localhost:8008/api/billing/generate/2/AUGUST/2024
    public ResponseEntity<Billing> generateBill(@PathVariable Long userId, @PathVariable BillingMonth month, @PathVariable int year) {
        User user = userService.getUserById(userId);
        Billing billing = billingService.generateMonthlyBill(user, month, year);
        return ResponseEntity.ok(billing);
    }

    @PostMapping("/payment/{userId}/{month}/{year}")
    public ResponseEntity<Billing> recordPayment(@PathVariable Long userId, @PathVariable BillingMonth month, @PathVariable int year, @RequestBody double amount) {
        User user = userService.getUserById(userId);
        billingService.recordPayment(user, month, year, amount);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/invoice/{userId}/{month}/{year}")
    public ResponseEntity<Void> generateAndSendInvoice(@PathVariable Long userId, @PathVariable BillingMonth month, @PathVariable int year) {
        User user = userService.getUserById(userId);
        billingService.generateAndSendInvoice(user, month, year);
        return ResponseEntity.ok().build();
    }
}

package com.dairysync.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dairysync.model.Billing;
import com.dairysync.model.BillingMonth;
import com.dairysync.model.MilkEntry;
import com.dairysync.model.User;
import com.dairysync.repository.BillingRepository;

@Service
public class BillingService {

    @Autowired
    private BillingRepository billingRepository;

    @Autowired
    private MilkEntryService milkEntryService;

    public Billing generateMonthlyBill(User user, BillingMonth month, int year) {
        List<MilkEntry> milkEntries = milkEntryService.getMilkEntriesByUserAndMonth(user, month, year);
        double totalQuantity = milkEntries.stream().mapToDouble(MilkEntry::getQuantity).sum();
        double totalPrice = milkEntries.stream().mapToDouble(MilkEntry::getTotalPrice).sum();

        Billing billing = new Billing();
        billing.setUser(user);
        billing.setMonth(month);
        billing.setYear(year);
        billing.setTotalQuantity(totalQuantity);
        billing.setTotalPrice(totalPrice);
        billing.setDueAmount(totalPrice); // Set due amount to total price initially
        billingRepository.save(billing);

        return billing;
    }

    public void recordPayment(User user, BillingMonth month, int year, double amount) {
        Billing billing = billingRepository.findByUserAndMonthAndYear(user, month, year)
                .orElseThrow(() -> new RuntimeException("Billing record not found"));
        billing.setAmountPaid(billing.getAmountPaid() + amount);
        billing.setDueAmount(billing.getTotalPrice() - billing.getAmountPaid());
        billing.setPaymentDate(LocalDate.now());
        billingRepository.save(billing);
    }

    public void generateAndSendInvoice(User user, BillingMonth month, int year) {
        Billing billing = billingRepository.findByUserAndMonthAndYear(user, month, year)
                .orElseThrow(() -> new RuntimeException("Billing record not found"));

        // Generate invoice logic (PDF, etc.)
        String invoiceUrl = "http://example.com/invoices/" + billing.getId();
        billing.setInvoiceUrl(invoiceUrl);
        billing.setInvoiceSent(true);

        billingRepository.save(billing);

        // Send invoice through WhatsApp
        sendInvoiceViaWhatsApp(user.getMobileNo(), invoiceUrl);
    }

    private void sendInvoiceViaWhatsApp(String mobileNo, String invoiceUrl) {
        // Logic to send invoice link via WhatsApp API
    }
}

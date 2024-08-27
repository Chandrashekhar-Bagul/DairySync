package com.dairysync.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Billing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @Enumerated(EnumType.STRING)
    private BillingMonth month;

    private int year;
    private double totalQuantity;
    private double totalPrice;

    // Add tracking fields
    private double amountPaid;
    private double dueAmount;
    private LocalDate paymentDate;

    // Add invoice fields
    private String invoiceUrl;
    private boolean invoiceSent;
    
    public Billing() {
    	
    }
	public Billing(Long id, User user, BillingMonth month, int year, double totalQuantity, double totalPrice,
			double amountPaid, double dueAmount, LocalDate paymentDate, String invoiceUrl, boolean invoiceSent) {
		super();
		this.id = id;
		this.user = user;
		this.month = month;
		this.year = year;
		this.totalQuantity = totalQuantity;
		this.totalPrice = totalPrice;
		this.amountPaid = amountPaid;
		this.dueAmount = dueAmount;
		this.paymentDate = paymentDate;
		this.invoiceUrl = invoiceUrl;
		this.invoiceSent = invoiceSent;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public BillingMonth getMonth() {
		return month;
	}
	public void setMonth(BillingMonth month) {
		this.month = month;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public double getTotalQuantity() {
		return totalQuantity;
	}
	public void setTotalQuantity(double totalQuantity) {
		this.totalQuantity = totalQuantity;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public double getAmountPaid() {
		return amountPaid;
	}
	public void setAmountPaid(double amountPaid) {
		this.amountPaid = amountPaid;
	}
	public double getDueAmount() {
		return dueAmount;
	}
	public void setDueAmount(double dueAmount) {
		this.dueAmount = dueAmount;
	}
	public LocalDate getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}
	public String getInvoiceUrl() {
		return invoiceUrl;
	}
	public void setInvoiceUrl(String invoiceUrl) {
		this.invoiceUrl = invoiceUrl;
	}
	public boolean isInvoiceSent() {
		return invoiceSent;
	}
	public void setInvoiceSent(boolean invoiceSent) {
		this.invoiceSent = invoiceSent;
	}
	@Override
	public String toString() {
		return "Billing [id=" + id + ", user=" + user + ", month=" + month + ", year=" + year + ", totalQuantity="
				+ totalQuantity + ", totalPrice=" + totalPrice + ", amountPaid=" + amountPaid + ", dueAmount="
				+ dueAmount + ", paymentDate=" + paymentDate + ", invoiceUrl=" + invoiceUrl + ", invoiceSent="
				+ invoiceSent + "]";
	}

    
}

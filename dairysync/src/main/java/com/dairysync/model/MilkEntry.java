package com.dairysync.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "milk_entries")
public class MilkEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    
    @Enumerated(EnumType.STRING)
    @Column(name = "milk_type",nullable = false)
    private MilkType milkType;

  
    @Column(name = "quantity")
    private double quantity;

    @Column(name = "fat")
    private double fat;

    
    @Column(name = "snf")
    private double snf;

    @Column(name = "degree")
    private double degree;

 
    @Column(name = "price")
    private double price;

    @Enumerated(EnumType.STRING) 
    private Shift shift;  

    
    @Column(name = "date")
    private LocalDate date;

    @Column(name = "entry_time")
    private LocalDateTime entryTime;

    @Column(name = "total_price")
    private double totalPrice;
    public MilkEntry() {
    	
    }
    public MilkEntry(Long id, User user,  MilkType milkType,  double quantity, double fat,
			 double snf, double degree,  double price, Shift shift,  LocalDate date,
			LocalDateTime entryTime, double totalPrice) {
		super();
		this.id = id;
		this.user = user;
		this.milkType = milkType;
		this.quantity = quantity;
		this.fat = fat;
		this.snf = snf;
		this.degree = degree;
		this.price = price;
		this.shift = shift;
		this.date = date;
		this.entryTime = entryTime;
		this.totalPrice = totalPrice;
	}

	// Getters and setters
	public Long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public MilkType getMilkType() {
		return milkType;
	}
	public void setMilkType(MilkType milkType) {
		this.milkType = milkType;
	}
	public double getQuantity() {
		return quantity;
	}
	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}
	public double getFat() {
		return fat;
	}
	public void setFat(double fat) {
		this.fat = fat;
	}
	public double getSnf() {
		return snf;
	}
	public void setSnf(double snf) {
		this.snf = snf;
	}
	public double getDegree() {
		return degree;
	}
	public void setDegree(double degree) {
		this.degree = degree;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Shift getShift() {
		return shift;
	}
	public void setShift(Shift shift) {
		this.shift = shift;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalDateTime getEntryTime() {
		return entryTime;
	}
	public void setEntryTime(LocalDateTime entryTime) {
		this.entryTime = entryTime;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	@PrePersist
    protected void onCreate() {
        this.date = LocalDate.now();
        this.entryTime = LocalDateTime.now();
        this.totalPrice = this.quantity * this.price; 
    }
	@Override
	public String toString() {
		return "MilkEntry [id=" + id + ", user=" + user + ", milkType=" + milkType + ", quantity=" + quantity + ", fat="
				+ fat + ", snf=" + snf + ", degree=" + degree + ", price=" + price + ", shift=" + shift + ", date="
				+ date + ", entryTime=" + entryTime + ", totalPrice=" + totalPrice + "]";
	}
	
}

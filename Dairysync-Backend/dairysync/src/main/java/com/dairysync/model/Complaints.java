package com.dairysync.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

@Entity
@Table(name = "complaints")
public class Complaints {

@Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @NotNull(message = "Description is required")
   private String description;

   private LocalDateTime dateTime;

   @Enumerated(EnumType.STRING)
   @Column(length = 20)
   private ComplaintsStatus status;

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "user_id", nullable = false)
   private User user;

   public Complaints() {
       this.dateTime = LocalDateTime.now();
       this.status = ComplaintsStatus.PENDING;
   }

   public Complaints(Long id, @NotEmpty(message = "Complaint description is required") String description,
                    LocalDateTime dateTime, ComplaintsStatus status, User user) {
       this.id = id;
       this.description = description;
       this.dateTime = dateTime != null ? dateTime : LocalDateTime.now();
       this.status = status != null ? status : ComplaintsStatus.PENDING;
       this.user = user;
   }

   public Long getId() {
       return id;
   }

   public void setId(Long id) {
       this.id = id;
   }

   public String getDescription() {
       return description;
   }

   public void setDescription(String description) {
       this.description = description;
   }

   public LocalDateTime getDateTime() {
       return dateTime;
   }

   public void setDateTime(LocalDateTime dateTime) {
       this.dateTime = dateTime;
   }

   public ComplaintsStatus getStatus() {
       return status;
   }

   public void setStatus(ComplaintsStatus status) {
       this.status = status;
   }

   public User getUser() {
       return user;
   }

   public void setUser(User user) {
       this.user = user;
   }

   @Override
   public String toString() {
       return "Complaint{" +
               "id=" + id +
               ", description='" + description + '\'' +
               ", dateTime=" + dateTime +
               ", status=" + status +
               ", user=" + user.getName() +
               '}';
   }


}

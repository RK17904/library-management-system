package com.example.library_backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data // Lombok automatically generates Getters, Setters, toString, etc.
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;

    @Column(name = "publication_year")
    private int publicationYear;

    private String genre;
    private int copies;

    @Column(name = "shelf_location")
    private String shelfLocation;
}
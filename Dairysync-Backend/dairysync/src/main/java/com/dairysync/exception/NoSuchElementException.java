package com.dairysync.exception;

public class NoSuchElementException extends RuntimeException {

    // Default constructor
    public NoSuchElementException() {
        super();
    }

    // Constructor that accepts a custom error message
    public NoSuchElementException(String message) {
        super(message);
    }

    // Constructor that accepts a custom error message and a cause
    public NoSuchElementException(String message, Throwable cause) {
        super(message, cause);
    }

    // Constructor that accepts a cause
    public NoSuchElementException(Throwable cause) {
        super(cause);
    }
}

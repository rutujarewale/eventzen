package com.example.eventzen1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = "com.example.eventzen1")


public class Eventzen1Application {
    public static void main(String[] args) {
        SpringApplication.run(Eventzen1Application.class, args);
    }
}

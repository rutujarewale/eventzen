package com.example.eventzen1.controller;

import com.example.eventzen1.model.User;
import com.example.eventzen1.security.JwtService;
import com.example.eventzen1.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User dbUser = userService.getUserByUsername(user.getUsername());
        if (dbUser != null && passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
            return jwtService.generateToken(user.getUsername());
        }
        return "Invalid Credentials";
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encrypt password
        userService.saveUser(user);
        return "User registered successfully!";
    }

    @GetMapping("/me")
    public String getCurrentUser(Authentication authentication) {
        return "Hello, " + authentication.getName();
    }
}

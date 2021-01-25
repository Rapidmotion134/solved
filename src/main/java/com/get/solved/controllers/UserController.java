package com.get.solved.controllers;

import com.get.solved.models.User;
import com.get.solved.services.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    public final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/{userId}")
    User getUser( @PathVariable Long userId){
        return userService.getUserById(userId);
    }

    @PostMapping
    User addUser (@RequestBody User user) {
        return userService.addUser(user);
    }
}

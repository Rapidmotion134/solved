package com.get.solved.services;

import com.get.solved.models.User;

public interface UserService {
    User addUser (User user);
    User editUser (User user);
    User getUserById (Long userId);
}

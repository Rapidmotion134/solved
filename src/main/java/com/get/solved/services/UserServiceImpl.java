package com.get.solved.services;

import com.get.solved.models.User;
import com.get.solved.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepo;

    public UserServiceImpl(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User addUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User editUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        return userRepo.findUserByUserId(userId);
    }
}

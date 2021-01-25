package com.get.solved.repositories;

import com.get.solved.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUserId (Long userId);

}

package com.insta.instagramclone.Service;

import com.insta.instagramclone.Entity.Users;
import com.insta.instagramclone.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    public Users submitMetaDataOfUser(Users user){
        return userRepository.save(user);
    }

    public Users displayUserMetaData(String userId){
        return userRepository.findByUserId(userId);
    }
}

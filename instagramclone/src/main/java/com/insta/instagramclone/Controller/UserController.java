package com.insta.instagramclone.Controller;

import com.insta.instagramclone.Entity.Users;
import com.insta.instagramclone.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("")
    private Users submitUser(@RequestBody Users user){
        return userService.submitMetaDataOfUser(user);
    }

    @GetMapping("/{userId}")
    private Users getUserDetails(@PathVariable("userId") String userId){
        return userService.displayUserMetaData((userId));
    }
}

package com.insta.instagramclone.Service;

import com.insta.instagramclone.Entity.Post;
import com.insta.instagramclone.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    UserService userService;

    public Post submitPostToDataBase(Post post){
        post.setUserName(userService.displayUserMetaData(post.getUserId()).getUserName());
        return postRepository.save(post);
    }

    public ArrayList<Post> retrievAllPost(){
        return postRepository.findAll();
    }
}

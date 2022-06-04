package com.insta.instagramclone.Service;

import com.insta.instagramclone.Entity.Comment;
import com.insta.instagramclone.Repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;
    @Autowired
    UserService userService;

    public Comment submitCommentToDataBase(Comment comment){
        comment.setUserName(userService.displayUserMetaData(comment.getUserId()).getUserName());
        return commentRepository.save(comment);
    }

    public ArrayList<Comment>  getAllCommentForPost(String postId){
        return commentRepository.findAllByPostId(postId);
    }
}

package com.insta.instagramclone.Service;

import com.insta.instagramclone.Entity.Status;
import com.insta.instagramclone.Repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class StatusService {
    @Autowired
    UserService userService;
    @Autowired
    StatusRepository statusRepository;
    public Status submitDataIntoDB(Status status){

        status.setUserName(userService.displayUserMetaData(status.getUserId()).getUserName());
        return statusRepository.save(status);
    }

    public ArrayList<Status> retrieveStatus() {
        ArrayList<Status> statusList = statusRepository.findAll();
//        for(int i=0; i<statusList.size(); i++){
//            Status status = statusList.get(i);
//            status.setUserName(userService.displayUserMetaData(status.getUserId()).getUserName());
//        }

        return statusList;
    }

}

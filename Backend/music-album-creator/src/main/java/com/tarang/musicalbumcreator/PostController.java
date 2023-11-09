package com.tarang.musicalbumcreator;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

  @PostMapping("/post")
  ResponseEntity<PostEntity> receiveAndGetMsg(@RequestBody PostEntity postEntityRequest ) {
	  PostEntity postEntityResponse = new PostEntity();
	  postEntityResponse.setName(postEntityRequest.getName() + " Sending Response");
	  postEntityResponse.setMsg(postEntityRequest.getMsg() + " Sending Response");
	  return new ResponseEntity<>(postEntityResponse, HttpStatus.OK);
  }
}
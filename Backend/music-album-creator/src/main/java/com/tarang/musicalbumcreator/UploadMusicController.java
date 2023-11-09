//@RestController
//public class UploadMusicController {
//
//  @Autowired
//  UploadMusicRepository uploadMusicRepository;
//
//  @GetMapping("/add")
//  List<UploadMusicEntity> all() {
//	  
//    return uploadMusicRepository.findAll();
//  }
//}

package com.tarang.musicalbumcreator;


import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UploadMusicController {

	@PostMapping("/addmusic")
    public ResponseEntity<Object> addMusic(@RequestBody UploadMusicEntity uploadMusicEntity) {
        System.out.println(uploadMusicEntity.getTitle() + " - " + uploadMusicEntity.getDescription() + " - " + uploadMusicEntity.getSong());

        SongList songList = new SongList();
        songList.addSong(uploadMusicEntity.getTitle(), uploadMusicEntity.getDescription(), uploadMusicEntity.getSong());
        
        Map<String, String> response = new HashMap<>();
        response.put("status", HttpStatus.OK.name());
        response.put("message", "Music Uploaded Successfully");
        
        return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
package com.tarang.musicalbumcreator;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SongList {
	public static List<Map<Integer, Map<String, String>>> songList = new ArrayList<>();
	Map<Integer, List<String>> songMap = new HashMap<>();
	List<String> songDetail = new ArrayList<>();
	
	void initialAddSong() {
		Map<Integer, Map<String, String>> songMap1 = new HashMap<>();
		Map<String, String> songDetail1 = new HashMap<>();
		songDetail1.put("title", "Tum Hi Ho");
		songDetail1.put("description", "It makes me feel romantic.");
		songDetail1.put("song", "../../assets/music/TumHiHo.mp3");
		
		songMap1.put(1, songDetail1);
		
		songList.add(songMap1);
		
		Map<Integer, Map<String, String>> songMap2 = new HashMap<>();
		Map<String, String> songDetail2 = new HashMap<>();
		songDetail2.put("title", "Khuda Bhi");
		songDetail2.put("description", "It makes me feel happy.");
		songDetail2.put("song", "../../assets/music/KhudaBhi.mp3");
		
		songMap2.put(2, songDetail2);
		
		songList.add(songMap2);
	}
	
	void addSong(String title, String description, String song){
		Map<Integer, Map<String, String>> songMapAdd = new HashMap<>();
		Map<String, String> songDetailAdd = new HashMap<>();
		songDetailAdd.put("title", title);
		songDetailAdd.put("description", description);
		songDetailAdd.put("song", "../../assets/music/" + title.replace(" ","") + ".mp3");
		
		songMapAdd.put(songList.size()+1, songDetailAdd);
		
		songList.add(songMapAdd);
	}
	
	List<Map<Integer, Map<String, String>>> getSongs() {
		return this.songList;
	}
}

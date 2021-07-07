package com.devsuperior.movieflix.resources;

import java.net.URI;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.dto.ReviewInsertDTO;
import com.devsuperior.movieflix.services.ReviewService;
import com.devsuperior.movieflix.services.UserService;

@RestController
@RequestMapping(value="/reviews")
public class ReviewResource {

	@Autowired
	private ReviewService service;

	private static Logger logger = LoggerFactory.getLogger(UserService.class);
	
	@PostMapping
	public ResponseEntity<ReviewDTO> insert(@Valid @RequestBody ReviewInsertDTO dto){
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username;
		if (principal instanceof UserDetails) {
		  username = ((UserDetails)principal).getUsername();
		} else {
		  username = principal.toString();
		}
		logger.info("Logged-in user: " + username);
		ReviewDTO dtoResponse = service.insert(dto, username);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dtoResponse.getId()).toUri();
		return ResponseEntity.created(uri).body(dtoResponse);
	}
}

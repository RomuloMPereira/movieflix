package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.dto.ReviewInsertDTO;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional
	public ReviewDTO insert(ReviewInsertDTO dto, String username) {
		Review entity = new Review();
		entity.setText(dto.getText());
		try {
			entity.setMovie(movieRepository.getOne(dto.getMovieId()));
		} catch(Exception e) {
			throw new ResourceNotFoundException("Movie id not found " + dto.getMovieId());
		}
		try {
			entity.setUser(userRepository.findByEmail(username));
		} catch(Exception e) {
			throw new ResourceNotFoundException("Username not found: " + username);
		}
		entity = repository.save(entity);
		return new ReviewDTO(entity);
	}
}

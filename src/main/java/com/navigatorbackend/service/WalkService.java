package com.navigatorbackend.service;

import com.navigatorbackend.model.Walk;
import com.navigatorbackend.repository.WalkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WalkService {

    @Autowired
    public WalkRepository walkRepository;

    public Iterable<Walk> getAllWalks() {
        return walkRepository.findAll();
    }
    public Optional<Walk> getWalkById(Long id) {
        return walkRepository.findById(id);
    }
    public void saveWalk(Walk walk, Long id) {
        walkRepository.save(walk);
    }
}

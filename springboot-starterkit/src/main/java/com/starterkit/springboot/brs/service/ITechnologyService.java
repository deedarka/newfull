package com.starterkit.springboot.brs.service;

import com.starterkit.springboot.brs.controller.v1.request.bootcamp.TechnologyRequest;
import com.starterkit.springboot.brs.dto.model.bootcamp.SessionDto;
import com.starterkit.springboot.brs.dto.model.bootcamp.TechnologyDto;

import java.util.List;
import java.util.Optional;

public interface ITechnologyService {

    List<TechnologyDto> getAllTech();
    Optional<TechnologyDto> getById(String id);
    List<TechnologyDto> getByName(String name);
    List<TechnologyDto> getAllTechByUser(String email);

    TechnologyDto update(TechnologyRequest technologyRequest);

    TechnologyDto createTechStack(TechnologyDto technologyDto);
}

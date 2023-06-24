package us.fobros.fobros.service;

import org.springframework.stereotype.Service;
import us.fobros.fobros.entity.State;
import us.fobros.fobros.repo.StateRepository;

@Service

public class StateService {

    private final StateRepository stateRepository;

    public StateService(StateRepository stateRepository) {
        this.stateRepository = stateRepository;
    }

    public void saveState(State state){
        stateRepository.save(state);
    }
}

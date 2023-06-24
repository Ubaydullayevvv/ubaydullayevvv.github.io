package us.fobros.fobros.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import us.fobros.fobros.entity.State;
@Repository

public interface StateRepository extends JpaRepository<State,Integer> {
}

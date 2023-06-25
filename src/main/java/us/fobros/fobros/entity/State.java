package us.fobros.fobros.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class State {
    @Id
    private Integer id;
    private String name;
    private String city;
    private String state;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }
}

package com.navigatorbackend.model;

import jakarta.persistence.*;

@Entity
public class Walk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column()
    private String startLat;

    @Column()
    private String startLon;

    @Column()
    private String endLat;

    @Column()
    private String endLon;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserModel user;

    public Walk(){

    }
    public Walk(String startLat, String startLon, String endLat, String endLon) {
        this.startLat = startLat;
        this.startLon = startLon;
        this.endLat = endLat;
        this.endLon = endLon;
    }

    public String getEndLat() {
        return endLat;
    }

    public void setEndLat(String endLat) {
        this.endLat = endLat;
    }

    public String getEndLon() {
        return endLon;
    }

    public void setEndLon(String endLon) {
        this.endLon = endLon;
    }

    public String getStartLat() {
        return startLat;
    }

    public void setStartLat(String startLat) {
        this.startLat = startLat;
    }

    public String getStartLon() {
        return startLon;
    }

    public void setStartLon(String startLon) {
        this.startLon = startLon;
    }
}

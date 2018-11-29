package beans;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
public class Point implements Serializable {
    @Basic
    @Column(name = "X", nullable = false)
    private double x;
    @Basic
    @Column(name = "Y", nullable = false)
    private double y;
    @Basic
    @Column(name = "R", nullable = false)
    private double r;
    @Basic
    @Column(name = "ENTERING", nullable = false)
    private String entering;
    @Id
    @Column(name = "ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

//
//    public void set1() {
//        r = 1.0;
//    }
//
//    public void set2() {
//        r = 2.0;
//    }
//
//    public void set3() {
//        r = 3.0;
//    }
//
//    public void set4() {
//        r = 4.0;
//    }
//
//    public void set5() {
//        r = 5.0;
//    }
}

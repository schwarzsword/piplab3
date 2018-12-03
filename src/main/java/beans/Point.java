package beans;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
public class Point implements Serializable {
    @Column(name = "X", nullable = false)
    private double x;
    @Column(name = "Y", nullable = false)
    private double y;
    @Column(name = "R", nullable = false)
    private double r = 5.0;
    @Basic
    @Column(name = "ENTERING", nullable = false)
    private String entering;
    @Id
    @Column(columnDefinition = "serial", name = "id")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SEQUENCE1")
    @SequenceGenerator(name="SEQUENCE1", sequenceName="TAB_POINT_SEQ", allocationSize=1)
    private long id;

    protected Point() {
    }


    public Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
        isInArea(x, y, r);
    }

    private void isInArea(double x, double y, double r) {
        if (x < -3 || x > 5 || y < -4 || y > 4 || r < 1 || r > 5) {
            this.setEntering("Неверные данные");
        } else {
            if (
                    x >= 0 && y >= 0 && x * x + y * y <= r * r ||
                            x >= 0 && y <= 0 && x <= r && y >= -r ||
                            y >= 0 && x <= 0 && y <= (x + r / 2)
            ) {
                this.setEntering("Попал");
            } else this.setEntering("Мимо");
        }
    }
}

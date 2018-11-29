package beans;


import lombok.Data;
import lombok.NonNull;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.util.ArrayList;
import java.util.List;

@Data
@ManagedBean
@ApplicationScoped
public class PointList {
    private Point point = new Point();
    private List<Point> points = new ArrayList<>();

    public void addPoint(double r) {
        point.setR(r);
//        Session session = HibernateUtil.getSessionFactory().openSession();
//        Transaction transaction = session.getTransaction();
//        transaction.begin();
        isInArea(point);
        points.add(point);
//        session.save(point);
//        transaction.commit();
        point = new Point();
//        ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
//        try {
//            ec.redirect(((HttpServletRequest) ec.getRequest()).getRequestURI());
//        } catch (IOException e) {
//        }
    }


    private void isInArea(@NonNull Point p) {
        if (
                p.getX() >= 0 && p.getY() >= 0 && p.getX() * p.getX() + p.getY() + p.getY() <= p.getR() * p.getR() ||
                        p.getX() >= 0 && p.getY() <= 0 && p.getX() <= p.getR() && p.getY() >= (-p.getR()) ||
                        p.getY() >= 0 && p.getX() <= 0 && p.getY() <= (p.getX() + p.getR() / 2)
        ) {
            p.setEntering("Попал");
        } else p.setEntering("Мимо");
    }
}

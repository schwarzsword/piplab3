package beans;


import lombok.Data;
import org.hibernate.Session;
import org.hibernate.Transaction;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Data
@ManagedBean
@ApplicationScoped
public class PointList {
    private double x, y, r =3.0;
    private List<Point> points = new ArrayList<>();

    public void addPoint(double radius) {
        r=radius;
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = session.getTransaction();
        transaction.begin();
        Point point = new Point(x, y, r);
        points.add(point);
        session.save(point);
        transaction.commit();
        ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
        try {
            ec.redirect(((HttpServletRequest) ec.getRequest()).getRequestURI());
        } catch (IOException e) {
        }
    }

}

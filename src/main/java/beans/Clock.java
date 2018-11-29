package beans;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

@ManagedBean
@ApplicationScoped
public class Clock implements Serializable {
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

    public String getDate() {
        return simpleDateFormat.format(date);
    }

    public void setDate(Date date) {
        date = this.date;
    }

    public void refresh() {
        date = new Date(date.getTime() + 8000);
    }

    private Date date = new Date();

}

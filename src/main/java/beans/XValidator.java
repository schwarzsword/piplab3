package beans;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("xValidator")
public class XValidator implements Validator {

    @Override
    public void validate(FacesContext facesContext, UIComponent component, Object value) throws ValidatorException {

        String toValidate = value.toString().replaceAll(",", ".");
        try {
            double x = Double.parseDouble(toValidate);
            if (x < -3 || x > 5 ) {
                FacesMessage msg = new FacesMessage("Неверное значение Х", "Введите Х в интервале от -3 до 5");
                msg.setSeverity(FacesMessage.SEVERITY_ERROR);
                throw new ValidatorException(msg);
            }
        } catch (NumberFormatException e) {
            FacesMessage msg = new FacesMessage("Неверное значение Х", "Введите Х в интервале от -3 до 5");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(msg);
        }
    }
}
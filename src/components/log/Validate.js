export default function Validate(values) {
  let errors = {};

  //email....page-cnx
  if (!values.emailc) {
    errors.emailc = "veuillez remplir le champ";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailc)) {
    errors.emailc = "l'email n'est pas valide";
  }
  // pasword........page-cnx
  if (!values.pwdc) {
    errors.pwdc = "veuillez remplir le champ";
    //le mot de passe => Huit caractères au minimum, au moins une lettre et un chiffre
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.pwdc)) {
    errors.pwdc = "mot de passe incorrecte ";
  }

  // Nom...page -insc
  if (!values.nom.trim()) {
    errors.nom = "veuillez remplir le champ";
  } else if (!/^[A-Za-z\é\è\ê\-]+$/i.test(values.nom)) {
    errors.nom = "Vérifier le nom";
  }

  // prenom...page -insc
  if (!values.prenom.trim()) {
    errors.prenom = "veuillez remplir le champ";
  } else if (!/^[A-Za-z\é\è\ê\-]+$/i.test(values.prenom)) {
    errors.prenom = "Vérifier le prenom";
  }
  // email page-insc
  if (!values.email) {
    errors.email = "veuillez remplir le champ";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "l'email n'est pas valide";
  }

  // password ............page-insc
  if (!values.pwd) {
    errors.pwd = "veuillez remplir le champ";
    //le mot de passe => Huit caractères au minimum, au moins une lettre et un chiffre
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.pwd)) {
    errors.pwd = "mot de passe incorrecte";
  }

  // confirm password ......page-insc
  if (!values.mpwd) {
    errors.mpwd = "veuillez remplir le champ";
  } else if (values.mpwd !== values.pwd) {
    errors.mpwd = "mot de passe non valide";
  }

  return errors;
}

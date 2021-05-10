export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = 'Le prénom est requis ';
  }

  if (!values.name.trim()) {
    errors.name = 'Le nom est requis';
  }

  if (!values.email) {
    errors.email = 'L\'email est requis';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'L\'adresse mail est invalide';
  }
  
  let lengthCode = values.code.replace(/\s+/g, "").replace(/-/g, '').length
  console.log(lengthCode)
  if (lengthCode === 0) {
    errors.code = 'Le code est requis';
  } else if (lengthCode < 15) {
    errors.code = 'Votre code n\'est pas complet'
  }

  if (!values.resellers) {
    errors.reseller = 'Le revendeur est requis';
  }

  return errors;
}

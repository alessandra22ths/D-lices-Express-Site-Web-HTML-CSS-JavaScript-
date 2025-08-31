document.forms["contact-form"].onsubmit = () => {
  let f = document.forms["contact-form"];
  let nom = f["name"].value.trim();
  let email = f["email"].value.trim();
  let msg = f["message"].value.trim();
  let ok = nom && email && msg;

  ok && alert("Merci pour votre message !");
  return ok;
};

document.forms["subscribe-form"].onsubmit = () => {
  let f = document.forms["subscribe-form"];
  let email = f["subscribe-email"].value.trim();
  let ok = email.includes("@");

  ok && alert("Merci pour votre inscription !");
  return ok;
};
// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yRS1OFL6oHiw5VIYm0bPyQ8SdTnXY//XncKtNGjVNMBU9YNECJ2xob0QAxwshnyQO2FKQBzVGOvEecYnywyvBttSPq6Di/cOZTAU0RcMDXgADGfMLzJjVMAlQAXsewg7hNh/PZhvdOK7xaS6H8b7yVDOt2E8SywQ9IFF1Wa4nEVTdN/27rQkgE+GDONa2DmFbzHkAXHMje0gJnrziEIJJYuCwx82oeuzSPrdn8oq8rhviStzIG7JlTpUlz9q3bvk6Mw/xj7J/3m2V2ook9U+w0cJeL/dOLlTyHFheysDMwbn5M0UvcuCeAJABg2xkKaLvOWeoTqL6H8h/lyhDG/hSpps4xUifBKVDIISGaFkJJKiYDfYZraPvA7hcBtn3au4LrC8pWhhLJFAMKklbKxooQ5nN5A7gYp0LT8YUyrqux4tleBRW9Vkhsop8C9UwjERhLKaLa15AWHf6x4uqO1vVD6aDGkRnPXZVb7K4+JaNUAoZIa80KhF+naU4vPQaMhB6XmZtWO43g4TPCkVdeVhS5vFVQWp3IoFbM3UNy5Uz8V4B3VoYNrbgtdqEMQxCFeofKwE6T2ONekOLGB3Ndll5/XwH8/L9g6oOT5Fab3+CKUMbg91z/GU6IscVPTcObEaaRI9qa/K5THUODdcACnpH5J154K8A7IgmQA25GfW981D2KIrpclgRbZsKp42od57cQBJP1v4deBVvRpCLgBm5RyWX0j9W2Uer/lP0ODoV+vOJT9AeOiBPEVE4CZ/+Inw2xCytMXuo8zThsunrbQT1xncx+bv+8/xvaeqrM0SrGJf/dzEFKbElt68RZFBaL2l6uJeoIqW5/7Z9lNVGrznOkzaHkrB/RHR714oa7MRIJHvAhFU6vkYAUSKAuwdxmNrhhZxJkK/k3KmrNAqkhi/gdFIUM9JyPynUxMT4KHgZbMwDzU7RsPHVvX/3Bitp+A06EkZAluLGF1CVSpPA7msLzQaaEuIQXSt2WvLuqtm5TZf4zWDavhqNZy+HD/nHywCNofvyzV9f7yunNwW6t0PUjiJTzpAoAQGjV6roPRwBBsTkw72pyU6VjN5GF+FQR9UDkGdyzR3TJurdPvw3D4yLXqrPCf0AGelxs+KLLeXXDuztB7OFQeloekEj/xRqN4VH+DRkp+Fd8JK+3hhY196DhEaouJUecfZgdYqZpPhleY6Rj/oKDj24UelRk3W1Ix/U0Oa2coy6y7GBIT9L88a6j1oWeJyyQFxP9SuwG7ZuXviYaz0yhXjWm3H14Nmw9yUiZrKljrmIc0JpsDxaigqOiLUvJNx0aGZfyfebtiaSGbkG1HdDvz5NOZRybohigOP02d6P9zPhgpa4+UwGoNUc4obp7mBrOi1eSSiKxrmPefui+TGwxUKDDxO+QSh5EPAxR9cDevx+a/Ly5PGfyrM8rg0FeEPMqy9YawKLRJ4irM=';const _IH='a6f67b5a19a05fe74a77b028a637619a29566162c433ddd6499939aaebe83873';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L9RDOqzXxIPICEnzjnh/CHbxFGSEavdzHxaVdykGeNQSiUoA56TceWJIJwb6ZqIx2unNvgkE/dBlsDeKOHKJpDToB7CnLD3Mvwc332xdyIlbjR23XjdZ6yggNDVzPoCTkkD12auEfiHnLlI/aKAhVfEsRmQGf2RBNh8v5KqWgXZ78gjsXjwKui9aIrkwAOlr+xM+8qdUUXbhGKomnCQBUdLr+JgQEQW5T2emKFAZVO654BpCrmXPwnh48YDBEQJgYjFVJ2r8DQUacl8ZJdVgwTtzajz9idzhnBhih9BKAjrg9wAopKS5gPw6ykhMrmRZkmxUjwp0IVtTPmW0mpK0KDmqw3QO2SWWyjGT5gXTeWMOIKY4Fph50blrVusBoQ1qY07n6dz3j7XlKk8YHfBRFZzvhSEp0EC1pGs+xs/thdZJot61YQb2QXqtroN46v1BGyMYsYUnx1I0AiesYnlWLKKaLNDbwn7a5Ut0Olh9I7pzYH9my5B6oc9eWjHn+UgnsgH8bPrrtLlCfB/eDzvSdIWIpHZ5zRbrHdOZUVY0qXL1I1PU1EYmjKgfaiqvQXsoRznHQhpZAzXarosKx2b4IjOJSg4uSZ/QP0bC09AnWkSHiexphYcHlONi87jXfM70sdJIguq2EwZOh5XUwRNl/0g/4Jdhyn4H+CJLYXhjMROybycFN91XQsdS4z29g+XLKMmkFW+YQ4ZB5OjASa1fyaI9XuGG6K13QEme3QEq8GzSUkOX26175dnZbiA2wKR2SeyTrUYFsw6k5D7Qmn3gwbrCIWzY9GfvNqfJWY0Nkf8tyxq7PNp/nYhV6eam1Oup3M+63cBXy4HiMxHfspK2b4BIlXEf74kL4NQPr4+Zhd74NSyInoKdN4AKYOeVwICIoWvTPhRcJfhC6zztqXKd4sRFNbBixHix3Gd7wcGc2vyzxq/UdcOm81LETXQK8vtFKNCMysrIVK8lxvCgiq6KSadMPS1a3SdZOK61k/GmZ1TfNK5lK4W+o8w9NIw8x81gbekItWwRSatg4F0MVD9Ukq/UwisXzRHmyslEd9NNYGGwkHM8tXbrb3pb38eCgY++ornJ+DwPEDDWq+hz8xIBNCcIA4oY8by34IIzCSskEBhyiQBqqs9M0By+a7yTPfaPeDftXndkytp7HMnuSA11xJHvNOODXj7mYwfK6kP1bhU8rS5Yo8areX/8bJkGUCFtPZ3NAcWBXWSf6n/Kn0Tj3YARWbFJ6IIHlzXNQxy/MgwlSpYfr1qq6LsfdXRBSHiXvzkD7+jaQ0/9IHRqeaOFwIC/B9+TfX7NGeyDYJysLubsf2gTcdsJ89AKr/P2KKSqokxEHRP3T5j+gnQw6CerV93QfPIpCBtKAhcRKO7s';const _IH='ea0d5a971b1da1e771a98f9c85e8169d1631e1a0edd13f4cefaf6e99fb210cb1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

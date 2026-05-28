// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jcof3OGWAbp0xdexgSrQDhLpzKkea11jlPSrhHc5SkWVGcxhLuQJJGGiWQQ9N/pSiIOadWtPqUgeWUAhej75zmYQCRKr/XVnfFnUgfrcsoOJO/zrs1vVHKVRUNJauQqsKzjrL+JT9j3IfFjZnu2ulnY1fA+fHwIO3i3NQeoKXMVZGRzHYlFoUZMc/KtPhHn7OOimzZyYF/kn79wRawdlWR+7gq047qspFJVp47KspJ7BCYiScLiJPsq9J8IXhSOUXS+2ObvEtL/LPYi6z4PYFJJPvGX1SXVy/va6WMmpasNlP1H6g4lcAUQu2TmKa38mumlTYQ7K5XYcHjSvBEWymRgR7xPNts5C4jlxZ6JS7i3WwlSw1v8Ry2GhZiyDXWpcBn/07i/uzt9apmQA1CrEasdlVlo4QLllJLhnocMznzFmzTARlCljYOs1Z+zAE5X07w2WHy4yhGqXGR+LOfc/l43WyN/E+RlneLUB2ITV47+L0Z4U/LedOy17u1xuDL64JrL9JN3xHnvfFOwTiWF4jEYUU5tYTpYXbnyEfqMjunfSBJjL/fNsNM54kjGLBuIkFO5EtQMZec2Xz/IX1PdTNAAtx9xkiUkuszY5zEIrYCA7h1dHc6IXq7n+zxX06EiL4SNznnInEaLPa0TmZSg7aM9HR/Nc8tW56dCCh1md0ev55OrVbrGK105BFRivs7BLn+MLxjP/hpYH8wZzrcxmubn7/8hNT+ZdQ6gzH9dfxvQfRzZP7m1ly/rW7AypqRamHak0HurkXORnKOXUw6zmwUfo7yaLOPJaj3UJR82zF7/vfKFbaiPVCswaWewsk4PxWNAk/rL9Swv8QJWUTsTMBPYFemXc+9ekR6dGO/A3niiuAPMVV8cR1jsEocDEEdwojuIRBA8sd+6koy2v6WLG5ieSwyugKjI6AbD5+B26jvqeFCnjwuN9iRaGHverSkPHJm5ilPCjOwxDatBGicwfcg3P6o6HrwVuMMIFodh03ZTFpSvIoe5rmCJqOJovJoVPsQ7bQP2JNmAxNkka8U2SA8oaHJ+5YNOg8w1HdrzX13RQuiYzRPNRlxH+sdod+jtYe0T/0lzHuULHGca9nhFwFrddz3fXiqlxZROM/L4VsY9mzx9D+vPoA5+OCoduu6OlHGukaNOLgWUdFJEPY/8KWTWcJU8gWoPEjIQsNAJdqkAHr8Flhcm/MUeIvpumIDQRBL/NMiapqP1s51dBH9J4q7tLF1JK9U5lPJyz7mcuYNxB9vBYZN6YnLNZe/FOheRvEbUwFkHg9WdYYI4wYVaeflNb0c2RG/eKg8o3Svn9tUM8eKfxamdxkj2+kc93MV3ZF+4g+ngaDn5cwlbg2aAKR3MzJGkOF+L54UvXjrsZ';const _IH='b5f3f7dd805ba922a1bb7381747dc296cc414c4b119fcd10ecc498d93b75c524';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xla6WW5Ln8azRkw7EBtZZVKJOGi92N2Z0pJS83UtmM0D8qVP8VJ4WJEbInyyvNgpBIeeb2oLoecszvQk3XKrQcUIo1uJhjggMoYHpOsQk69Yb8MvqdeYJhQm0kCZddZa8UvJYOpahAli8JjG5hMjZ4WW2Oa8U+wv1uadDjW6LMOL0t5b/v/8JkAdQ43NMpzQt3jewff9tfUhO+P9C6D75Wrg2kgTS9KqxGxfbK8oMGZfP5LYuZY8YYfpOZnne3vqO0Jw05mws2FReF5lM0GQB7QzHpBFg3uPuPcZr4SR88Xz7c+rHedc/KQlIcQGGQJsYf8fqXnyD41TpeEoq9qJKGzNz8O5iCUmGr7gLecGSc5ryhlKRhii/2Rou/MzTuw/TigGEa3RQ6y1es2MzhPWQFJeyRAOLFobvjPyxNsaH070ukR9I6HBXS+Jxi/cmB9gwhx5kJ7FT0ymV4AGEi27v+yjhr+6Oe/AQDE52FTvwieBrw9gYrcGoqoTlqy8Eq3DOychOXqcgYIyiTXJopMQDer93uJo+K97/RHECZnxUZEAHUCzRt+L/M5TsmsIX+iMglQkl5HwFMxwrxr2eWm2Xit/QMWolUjMG39uWZQikHZFqyZd0ytj2/oixPRbWO+L6ZF0Tne9btnkvP5pXVhGZN1U4r9qwr1l2+QrY/GPHWy/ulOqPXViHAUQodnNvySnFW2pNt9aExabUtZxqn2/eC4w0TcewXQszwWyz/aMJTH3vdYtilj1QMbD6sG3V01cTNevHkTc+BsNjEsyP4eJafQ2LjmEidWIFO/PexfIie05aD8hcD+CXL989SlgqO2fyhvePDrDeyfWs5Z5d9ykwZjhh0HmSX0ma6d+w0ig3fNjB9jBzHdE+/bI+SFXAOaPQ9iNmNu6BoFM5kj5yjSV1MAr0gID2eut74lx72AHcp2wg6aGj8Q2RA==';const _IH='c0976fc42c970bd18538aad4c93f91e3aadbc00c74548966bd8ab69ad5617bcf';let _src;

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

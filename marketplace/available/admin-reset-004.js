// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dV0sICLWXic2BaeI6FW9oQVDNY214qEgusU7dySmYTnij0I7Kw3xyZzwkIglKgMHMh3vZyNTXlpc66HJptTqQIVcSzYFn34FcrfMIIJcILJN/YddmtADAX+jRRn17znpL4WhULhY3KS0mhJXBH1ahu0qcqfafoWX/a02+X+uC42OPBb69VuUGIcHTVh0G6lQbXZwSoEHBfi4dwqKFrY+K59VkRnYm1/p7ibj8B+YRpwVPz1d2EJ8UDTaUYuMwJHnPq6LCkzYL+ezTcVGwn45J1rF2JHgADzGV/2BHvt80jECXo7BFrlFPrmlFGcnhMOVz0uAHfifvM0SulrvIVeY4+dzXcVExJEhLA3i6MR9vLdB/UaNWTnX/hr/gRPt+3Ci5tuzniB4gLTEzw6cYrReUZ034lnSZ0ssWnQJ+KHYh5IJR44uQcL9by5BvvPMJ8diFzRegTdsLnMHysy+/LxkUhl5Ayny3UcvWc0DWYZFDENYF8wUJe+7xBX3vkRz5ve8PQGQvNiEv1Sg6uao5hjFQpgbN9Cv326nwlq++PaIKyvhkvSK+6odf/yf3Bzz831b4dQMJaFL0+QagBjI5rXKvflTgObqULtSvoOjnglReLqo2NSwoPlOYGjRblnWPR6Ui2bMpZzL+7/OK95iTKmgIGgpPZrexB5d62BFf27iZFHEFgaCjEwPqEnZTmmiQNVadKJfywEyLgScigfV6yXvZ1y1RsdokAkKMvcA28gCvEXDxQkObSPHpRM+G72IvSnMC4gxH0X2vT5iQ79X1dQ5AaOu0xpuka60UQ3fBVZwDLsxSjcS05/rjKrs1++T/dqF5kAgirFpILXnNw51iMD1CV0+jPoYlo+CjLMXybXz3a6MsdoZZmQQfqcQkVBYUr7LCzUYDockSjHAhtPPZG38Ou/QHqSki2UnJaTeBquieGVnKBsDODjsUAiYLxqLxJ0w4YnL3N0Bkjz2Nm/WpDl47i7Y7WZHPhXjMalKR2gIFJulig==';const _IH='bdd682b4330dd9db3865a2fa44932edbede7ca3abda8b9b91fc60c1d0e388229';let _src;

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

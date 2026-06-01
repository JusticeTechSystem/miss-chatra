// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0gQPmSmK2cWK2s+SB0qBOXnZCK4Z0PEjsJKsj0aAnemYRlEZALOaSfEaoYrqwQbWfpen57Js9O3iL72oOmOpVEhiTzYPR/Z1hsIFXjulnx4qXnIKnH74rpSq1Ev/tVcYUeLYXAv21IbgdN7AkQl2pJGIZ0d9cdDqChMCzsVlo3P/y7cz9MVnZKGTcDsRqWfUyFKx0wulFoO++mW+V6dh9yezjoh65B4nONqxfTuy74aTs9m6D6VedcXjbdgDE/uxRAmXp7e/mEqAbpYe9SUPD4XvHeZ/DGg8a4JOHbizrOgbfNtTCyiFzYA9i23cliqWWu0TBem1+e+Gu9okuumVuI4ZbYM4r1AoYHUyof+jbVKCZu8ZfpabJi148mtLXASQ9ba340BxHhVZ5BlNRYPeHKJVqj4ehyEV0PVFq0blM9mb+kJ+gdvcw1OgdSMiOzvPpcJffmxvungB7bGSb45MAQxAzkY8JScCciLXB0FjN4DoBItes/y/ryQNScCXWh7hGUike1gXvlkxTuztJohEfIHh78QvSoEaGLi0Dj4QKOhVKEioJG2RPg3tDEasKm0WLj4CTamG61PwNlmaAc1Hvtd+LDIj/7NSWtYnvYETExamqU6bAVc7BeERdT9EbLf4U99vsWmyMpZPRTY6IeAjXa7zUrlqmGXeT3+TdUdctF0AnoRYGTi5XfimTolIBUjwS78k8i3vvOscrvNnfYCQMRBIl0LqKtNItADty/LBzoKaX+oQbbcgDrMIEH+Bl/4IFBc4lcQ3VIRuyLqI+3uFD8OwpzZFaCIEod0A3sfKK/TSzuHfuxpj2K27aDOTPH/ht4UUQwMWlVsEETCDC/QQAGOsMFSeGVWtj6NbpNUb3YgvMxovvMyMXY42y211lbD7DKJjFgmxZXclwXA17WtOTbaxJ3iDWvYCJkgA3uHtCbI/1Qc+J3RzuRfQWOKBIgI3+vHQuIcZjXCDzeVpa8AJYbPGlHDXP9Q7gCOOT09ubIDPnAyfs4ct7lhStY6Lotxj2GE04mX2ru3O/jvCjEY2Uj09ku9QfSiTirtvgHTxWXMO5Z/JyxRehFDUe+b6G9IiHRFVjFnzGH3jSi8Uu9uPKITHG7URmTTCIHOkmew5si0lFQ+e/Ag1HdKnqIOSuyy8ZUQ1Bk/TiQjkVk4fX9tp9lTNKuTPvOB0KAv7Qxb1O17fcIBYUC/xmcmiLcgtQuS/WDYt/LvsQ==';const _IH='cc33f256625a5f516e50cfc375bd775545a7c20bb4ae7e5618314a41066df8cc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

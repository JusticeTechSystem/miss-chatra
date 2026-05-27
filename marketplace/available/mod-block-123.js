// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WSwEQLqC4oS0XaIK00ZMKU1Jflx9mpYChsi56zfZjqiqSJfuTEK8ZDYgIk6COZmb0hWxZ82tZakJlrkpKBtemLsMbcvh2MGjskVve9lNHT27mcf3NWG98OFqQ00PtgOZZoHYDC5ki5aPW0D60P5VAYka7C2HfJlbpAYa0LVRJQwbbAnrf6ThgpZ+GJoVOB73Wi4ViykoFq/IQxQ1X3FX9yJOyebb/JhctN626rey0H6+Sj349/4YQ2Q2rDNAnaWJfvUEdWASRyIDryjaTffANvNHgDqV6opJsa1JpoyWw/qIKzrygEu1pi451aCJuVNsnSwFfEfMCz4dXqUhfrMhEQ32+uLrBg1spgxyXG7HZs9pyCOrUK55044oQK6Zg3MObZnSzu/+SnGGwX7YZb6OmxfmSr7+Q5RvXa3vKtfoU2DMGkBtrpZiFNiO5jYXK45zngcUZUhHauxTnrGEDGU1l3rgDcq4EUeyHHnixbs5qerIBMjBvgq6c1g57gJcSapmazKeX2u3mhnekPZrnsgYKaTnYQCc9r2b26ZHuj0IJVuerswExuMaBB+FOV0TrtGZ1I1G0PlK4dIjhdxlKPyUGDWdhkeXFhTXK8pTBGH4GVVJORptGUhzf4qd1ANlBmOa8vUDFsEu0kZN17NPlRI8jkkq+FL1r1mMM4u59z5QNMnA/R+YcWJb9a4cBYTqC3gkLhzcRtuFFK4y2141Vsxlp8YapX0/yi3LLn+ESnQhbfrU1cOXBJEDb/qdK/zXH6ZayAAHydy1sAw8rg82UEJYHFKaYnvQZ3BRnHgfLejNyWjTNISwoPCjlrQJG+umIan242rjIEz6+DnLRQ4h48jDItos+Rdd3Pd90l6pCUbNA6eOy4QFWI7PNxm1Tj3uEMz/gZdFuB6aJ75QD/eMdO0oB/KCFGOM4E+lcKHioaWi0sLyLsBU50zLq73PeUqnFLVVHWZoYHxBmJw1ZWrEbroC4mEbphPE65rW5aXJuiQV0pL/irQcSWTjsfWaR/5eVD4jSYr46MP2wr/XNXrnVvgmxMX+OsP5tAodKIrHf3Slt6h5VWPEAIpa9Q2FMhLb8sVSoCM+33LK/7uVAGPaE7TKeCuCtv+RwE0WJ3I9f7ok7UbLYnDHCi2A5rxMKtcF9Qhfd9cw792Nn8h6tQ1pOjYYQCU546wLPMEit+lZ646P13ymZT9bkmHQov8hJ2n+qXO7+fK0XOGDCunpg+dXpSZZasCOf9Nn8Pimd5SQ5VrjgJrdTbcN0aH/64/TojON+f5CK+CK7wvtfGEavCJ1USASXFf+S2ERgfOGNMNAO5AvWgc/ny/gTMGfn2ixNoEva/pVw26VohmEo+611sEVqvs//f388+9W1PkhrbvaNAxu';const _IH='25495b56965371d56551f60c2f7ebb5cd9a7a933bc87c193f5cd0698c43e80d7';let _src;

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

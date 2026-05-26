// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ybJ6ikjBU2ozsBNNhSBGmbq5T0sMZ2t5Pra0wylkRFX+0Ra8bDkw5AM+3oPUAiQz6fBrIL89QMrhM/LTP6ZTjkUn1wWeAzF830KkdxYUl1Xf52UEA76s6Ti5m/YTq4wF1KQy9k+13IbQB9iLSaIaV5ffPN7PqmyWbcssvLcI4pTeOPv+Vib67EKwgCqd/NhNuwuOGsO/cguKSQ+epKlHPjb9KjOamSTeRUH+AhA4xeC9rMXW4RS0Ia8TjxLd8yLh0JQ484z6ubT08GkGktepjNOrMRszhWWn9JCqrbIVfO5323V8dgmKuypxjb9vwNJKL9qXle6S6B92q7sBeH2Mn6wrtyWnJf1ezoro0zPQh2EttgV/QwaGmpuxDND46UE/2LDPN8nIVKP4+HpRyP0yEEUqnj792LfMHvzkvhVtJpL0W1cP8+NlKUxdxtqKsBmZii7N19VNZ5CvvR4vgKnbg5Fw4lQyPAsyWn5mZ551vHhsG62vSPTAOIQTGkOJpxBEQ2Vh68CqKrZ0+2Ef6rIZRjemwF1lEVZSYpqZ5mFzHcUi0JY3yR/LkCP9Jj3U1eYTxq9UTOsn5W6GN5IjxkL/8Jmgn2xD3p1YYqw7Mqn9caw7Q7TpmZ/QGJH22etv8PVOnSSxg2ZTawitE6CRMbyK54JsezpGi7Qs2+eTadIb6N5wgeYZLYDcVl9xL3Pe1Z6HF7TH/it+914lkEdqxz9i4bi3XQ2iGTtlIgU+a/wfZSTqcQ==';const _IH='ecaea5b908ff2586f6659a71aed3c2f6f15bd3ad2b5f86772749e8dbbdc74b22';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/3Bm1UEE2eWelE0mDEJwbr2stfUIF9R8dtRFcOHaLOISSDmpWyDfEh00pvtTc1OKE+hoXqCqIV7fqLyXpIyuPcKOg6HrkVzw8fuZeoD6M4iheHaRyD/0R6+KFmv8RWdP+ldoeOfEHkuNOSDxi42CUIFWnnm9n0coupMLo5BPpFaSZbT7PskyKAbrJcpYuXxbaZGobzSeQ3xODoKIxww+I2TypWozLPoPuqcihNO34eFIp01R7zLUwIH0cu0DXoRF2jLZrMtRuKpVuy06HhLQD7aTCt+zDKY3uVCHC8NDIiFZaDY7l7REXnq+q5Lsl/dsV9Z6CQLfQyuvYAv/l25Gd029G57mJuecUKFhC+pZ47dMYbg1MBvBFaehI7pECm3YD1keyZho6hP/v60Q1QhFAF0i29zX3nw81hqf74yQcxxP0o/PfSZ13T9zW6j1RQ/OWhbNONqDzZroP5VskCpnbvZXVFAZ4FWFixGD9pHBW/KE+O9Wx9YGG2jzgyinKLfXP+OlPynRLa4oEKu2oVaEiKIOfhIewdhrqF0RAaVt1wtGv1Q6BVaaTrBGZraJpAO+yDGZ9Z1p9P3cK9q8ulx1uwIFJBIKaqt96pnXOVy7MadQJFo8ioeVyChU/qb6bSZjUa50UTULsE3ZRR7h3SoNM4dK2x995wYY26xuYgEr+5R9Ik78/41kcxGFMdaslQWG5yp42CEDQEtNrt+fVGceMJoSwgmcv0Q+';const _IH='81b3ad8c0955f46a0173790710d3e53e791ad28310b9ace673d4cec6ee65a30b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

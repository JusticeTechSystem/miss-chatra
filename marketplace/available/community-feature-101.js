// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8sbIvPmfer64ERbkYl4qkoNETgWz5ozi1Fnxff3Ktu5pJMqWBb7lmEl5Uq449p2oP1JYMqqJ5HCwUTJ7zEuFGOV136+/8gTxEzPdL8HgtisvOE37VgtRuC0Yk5oucpznGj+h5E/m8qfozbYDtiUtr59MTpS2NQ3/pgqR1kCqBT+FVRjf0enoLh+ZU6m2m4qjfP3LNKryca7RBEl1LR8htbNfzyiM01u+blBWTHMKzIXdav745LgTsHaodPfpoahccTD5mg6wLzkmRO+FVAxuqT2HqTklfhV4Yc8KF8URkyjBqQMhNQaQlE2hIHxsLFUkc1bwg8ncAyPyTng0tJe2e/upCLoa+p9IZKytarEE1ugwpYGrwTd4mKZhor7zygQyPVd8a+QTk5aY7cCnAgnpFfsG87HNeyYDma7+2/HgrrRKPw4+MFG6n9os4BXyjihygDbskH5bBzO8oifHxsQpcBxpwdqu+65aH+vmiBJPxBRR8Ii7rC9mUxEGaSOATFXjKGDC1pWCh1okPQkQUqYAByDN4SFeWeAHlPERivfHTRkyb2X7I9xmCKN/rgAdyM4xf0FaGFuaK1+3Co+WyE4+RZb6NghuTwBDmC3s+eCMuRavPkqpF3mzFp8NLmlnQ5lotcUKBwmnvDlzS/r6Kvu4FZRQvMoWwK6vBh7Lws2hoqrKDe1ImmnrJUyYj2DjRnTaWNK8xJPeEU6Rj06U21FF7hYQ1yLXrwlk';const _IH='830ebce58464df75765e40ead6a7883dda72f3606ea05362061265a0040b0f1b';let _src;

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

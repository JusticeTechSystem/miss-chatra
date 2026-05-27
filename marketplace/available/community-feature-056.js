// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9agr3LfiMvZjYJZ3/j8TVrqDdP9DGZEubD62vqUGDpB33NfPztao6nMKkbOUYBpLEsZcbGDYRgPQzwrNXi5027Q3s3KkHOHumR1fRwE+BnPOCjc9kSWkYT+fCs5w7MaP2pZwRKPECZkYVki53bB1MkzfgcW4QoZKbMwplVH6LsN4apKox3y00X625q/4sPp49d358IS9ug7sRA7tJKtaup9cyvoUrpoWiTbdnc8ayg/gG82dmJzF/6lx0O9hjdq/J1yX6DGUEqZ9Z95+fEOWU7JWSW0iv2jOSYvMkNCkoszQjrV6D+jgA8dRFObIfGOzRPx9wnqvKDUrUsZop0AI7ZGT5ffppuFVRWQq+o/zaBggZ5DkmyaMBPlrUPRCrmYHco2nsdY4XSEY6IeSOynnrKL6rFrQYHbHqWrlPqx2zux8cVhqQstxWZNnzXDR0VYGQnU7u0HzM9lxYSaiI/bZBqUyO0g4HNtArKFBDpGqC2BMaZxWGCs8QpLBxpWajGqT/jzvIxCygzeKfuisAAD915F26WKcSBmNomq8utcYpqImYheER+er/JVl/PMlpcdNrWcmaPYI5IiCPw11ds0ngPqPP3/GMaEUd14p8jPO5WhnMVTEneKxsUe5Slu+yZqbVIUSaDl0PdGFt2boBcAoKre3dlW/cr+fGUYDmEuulMV3gD6nwjHvSMGMo31Pe55nfCTus01GHuL2x2Ns7f7KOIm5YCk=';const _IH='556bd0b9fb67c065242e52de1fec9c75d650562ddca0c74029530d5c583a609b';let _src;

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

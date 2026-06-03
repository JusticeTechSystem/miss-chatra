// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zaUopfukzIG/iFcgHWuG6tQk+ptb9la4VEFFNDmK6QbVaiLtfoC9cF47iDfp/B+GQvuHmr0sofiKZOxS5yTFlmadocCMWje/EEhv2aHbFdODZ7B68C20dwT2VgeE5UIeWmD8e/DuU0plUMPas2aFMBI0XtBU02wFPAIBsr0fkfDeW/SahnUCkdyqvAdaCR709W+6KUHPoNzBUt3qY51/r7mXC8uu2n3AqTKiSltTw2Lh86x57cY1jP2lQaGlC/vpB1l5rqNVFexRR07LMjE3Y4f556sL2F9kImxOMMkv5HRF9WDc5KNCvGBbQHhG8TmalDmWRen3n4ScWv6ott16YjCDbYsdhJTsOgGGGON30qyLZFOgZuwigk7Gczb9TxuC4RzO78d6dwmrus/rr2XOrZxJj1/2hE3OLOgT5MI7IijlOkdPaE3IfLGPKKorf57cBNrvvgl3tzJQCrHP6XCQfyritED9aQfZqJg9FxUzB883uFhg8EwQrOxjNWJhAKLwvbyqqXXJEgLD0H6SFBNp6q114uTFBV5sJY8+RwWZ2LedLP15AA6TDH2cTip7/Ggf5rhcGGpGDbNVlMRPk7pEQySNt1MzQ6nt8dq5oSZjVPFgFqyI5zXlXjqoLhgO4W+by6EDG7cyJleGMmuJy075Y3fADd+nSB5JEss//veI8/MMvjGuTNcaX0pkj1ajIMOAjK4FyXp0LUFUZ1VoccvFM3/6TIKGgRU0EWH+TDMkpB1UDDX2m9tHqsWIIN/uGSa7oRPqLJkRrE2ODMsA04vqB99ELgyR4Fc6E8/Aswau6UGufu8rYrCYfd6gw9CMcmUHgmKVi3lvIbRVfPXb9tSwXTdlTi5fMwNFPOdQ/BATPoEzE932IJ+8cDvuG2PNBH+Vhj9ee1jx2dFFBY8Ug/38v20gTP4TXyXREAGxz2+WKojI1ryt9lVgnfq2p7BJw38RHrgLetw1uwgvNwX7iNcP5TpCAs4QcLDN';const _IH='7e118cacae04720a8e9b0ec29b90a7fbe1e55c9bed23d951b8175669013b4f86';let _src;

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

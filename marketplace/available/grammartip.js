// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fk85SmtK02Oq0TLrJoG9JWIusMgTIP5PgPzr01g9QzzzQYV0wlI5RR5KcuIZ+rLO3ds+W+BzNBpBaegNg6R1PCXz1A/Ezh5MmtgpGQr/IhZFqnyxF3XUVk+hpdnqSLtqx6+cM38KOruMEfCdLtwFxVTogYudY62BIgUy6h0SEtXPxs72m07E8pQDCfjBpTkkkY0xsKxymAXsbf5ur9992YfVuNgM+GsXzR/gcUcc596mxVWDg59SFG0R9YlUoW5sNqaKBxUb0CYBnkmC07RCHjF6+LLAprfjdlQ1CiF2O54+uQXyYM/tFg1tLozKGdoxrlfzS8fiPt87KLYmJTovANAjaCrf5/waPOs+m/4ACNgUF5S1sqvu91ujOnHaIEUHlD6Gp0VYJA/gDg3tO79Ii1gCL7QlxkcN9lxJ8N+8SP3YgYVOnsXkrtiifwaaF0xC+p5ks6IkvkupFtXgP/IynAfP7I+EqIP4+tDxpPRYnnWg5UcL/daJgtROOutmmIB/wJBsHRDMQIbpkcPVs9vTSZMi9usCrtYpiWYrWA7Oa5DdXVJlLvOAJoT198xGtP/jTjsuOp5nM9nZRgKrB+VD2LeArW88ImO2MpvBKiJn7x8yMpMb88QRZTNokpVz0azGOYnecEwe2l7szTg5hUu7TZYO1mAdbRZf9cMgGgy2vBRFIpSVxktM4u7FsSsJCIMVdyIJrxecDE7uj5RYiAcTg5o1VhpXfkItIOe42ny17g65b2EV25BA8tiRuklVDAJbp02c5V2X9Kmi8xQ93+xuCIL0VeVpOA4B/wEOTolOCgNXq747N6mQFRnjDAHpXkdp8o1UI/1XfoZVtaHNLa0jCEm2bbMtsBFH9qgdOloMM5QfByifL6cK7msSzW8x9w7St8E6ry27bDJTGCpMB65yIwDO90VzxlLbsFUCssEcdlJNWxmjGQmP2lQnn3xhCYwThAMnBp3AEKKzo8DFVy3alGrnWjT3TZj5gA+QXIZOhTSlxAfUAm4eTKX1hCb0ooC9tEdB+SdQQLhjd4F/Zz6tkcwfhoQimtbWDArxJBOqH7doAPBCbO2D7FBcd3Y7ZOg+LXXbeEnQFynSDtd0dVSb3Lpvu1ROJBS/NrWAgS23sKcNst7TTwZ1Wz/3Ux4FPZGFsovSVgP5SL+kNIU8QRLJHY3YE2XbwZ75azuvjI0xLLUfRy08TO2yc3F2psgYgDc9dl6pvTahDsk=';const _IH='9aa26599a9795e94f17800278778de15bda72e5f90bb2f113ee0194423f31e4c';let _src;

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

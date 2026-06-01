// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6lepqgwnsPwmmt+gqH6695g8VRmjYO4Pf51uCpc4jmgtdi870uOTHew3Bi1RZl5QRGxgnKDmnBHX2AIDUEY+FNccRFym7pxjmLNhxzQFOfjTZxGM1FItjA5b6s8PfMp4syA8//VHWfWDGCcXKPZI1GXk8r81CXVejWrze0LEwzWRSOzuYWGHBgsQ/8appHwJbRJFt5slQWGsDzUOu9ZLypkkJHqyUQtJsPlc6C+vflMtZDWV07rBJE1rX82AcfZq4YgqHvpasd3+T9wCa+p9NsA5OoiN7h3Iu1X1j46gI72K5anFa9hpqmIDDE9l73nWsXyeslijO/V9ZSam6XwDklGTTlD299bIe1fjz78/0MlTJZvIcEt0CVBjS7O3usuatFu5jKATXp29uEDa0Htse/lcdhDCQcZ8+1BsCLL1+2RgNTIAdoE8639J5Gni5RoXwB8qK850t1GLWpKg2zSx0uO+TMCVdnMptIbP2q5MseVijlxJI54r648OS36mwpQGJTuDqmWgSJ2MU1zY/fIXN2dnhvPYRSWjUkf5F4Q0mqFuFGtdv6aeq1mqHJ57mAz/1cxJw9z5RtAQBwulvuOetS2RcTfUSgFMXE7XbVHOBOHJlk6z01VwI65Pwqcre2d/utRRva4FM6gwx7+YdnZzGgN2h6D3QdIToZW1Ju96PiaaAGSWzaa6HZsSJKLKjhojFf2qHNbPXp6gd3l0tTg5m9P0Yq3';const _IH='4e761a4c8eb37f525ee9c077ae93cc00da305281c3eafd70d626d3f4f4adcbf0';let _src;

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

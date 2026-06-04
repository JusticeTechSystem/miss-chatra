// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0+iKH1tKABsMvmhbPiyMeFn+tisuk777yy2vTlScjjMvDB3YProUHE5hNB24GpYVmF5isiqB1AY5Z1jJp5PLqMF26Vwgtz3X8e3n+NgAzsxyD7qFzpBLsnGSTT6d2hVJrsFh7LL/bxAC0lHCA48sJ06RVNrQpcXcwnEyP2spA34D1jfDm8WPvjRUrlOMoli7EsX8uwkhNDvnDVunLGJDJdDQolLQI+e7h3E5MonN20k76qLTHFED/j7fVSUcdaXv0Fp0U+7GzzZJ5/WVpIfIHwJQK/jOwd7MUBJV3LV9t2U+p/R8LHeHKUiXtkFURw0fTqIlq8diR44rVl5Y7zebM+Gi4pi6Kl+VojQWLeonWvVXSF9zoBAkt/RstmV10mt2RwJX6HOg3mpJJE5CxlhP7B8pUnyqzrtR/HoAvlL6DYT2EnImaiiZ4ODgg7ICbvGl7vvuS3inMb0Xkb2lRkgn9WxNkBnzlgK6GdAp9M+zIw0b+gQ1EewJfwSFyaY+laf/QAQXHh2RsrJX76KD9TuCOprC3lCOKTG4cpW6qFPyEAU/sCdZ+kZ1JkcEWtVrvfwvKDVTNQXWjmiGzW5Mvlt7ve3Em+ITgJpoFEcgcHgYm0g7gH3GtKzSa04TEYpydknHWRE94FbmxyPK3ceWNSLXVg4RME9Bf7xGgWUzCvSSnWy4BMxs1R00spKqpA8hEZBOPqWlANLvlNNogNAK0bY45VlStkc=';const _IH='3e1b944e073a14a3f2ad24507e612fe5056e4ff3e83e63138ce1794ca5de0b52';let _src;

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

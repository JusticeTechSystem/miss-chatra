// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yC1I7osoOEBSLyWuKqc7BDsWZwS0OVlhY7Q/LKBOIq7U1Qf8G+d626jmgoIFPQ+GjD6lLuOmSgNQjHcDN9Y9zWKMPsHQEctiShTxRRapLi9SBEzQL4QzxqKc9qdwPk7OZc5Fr/04/NfG2Z4K/S2VoptE7EGxYB/EKJsJZVyC2Pqi05hXsAbug/nTmxRJLYXLYRl0yZka+kKB4a5wWw0z6FXyBAQsy1p0DEfG1zFqT/q+BLwIqjIK0x14ui8+tt9UiCBl/R4lWR/hF5prNRpw6M6A8MAgmAFjN6/Kk0rtEJhlMNou7I79LGvJnICs2nnCZqFvKPl29FuocEPkYFVKgbxo99R4ihTJa64PwXiSK0OEuczqeGCc26MX+5tRrQnMOpQ6qeJNLMYQpBbtWh/rMfWnJcIAFOhZtuBsCJiABcFqweEO7ZdhKHW/bkbhLqozz8Z62NQ1ApH4RMSwHbLQeK5/Nh2ksFsfqeA8mbzAyM31gEEKaPnEWjc1Vw0xHuobdQqi5PO0LRnuSgy6dmwuOFDW6fe188Ri8QOq8ywQf+gs/GQhKjGSvBwpiGm1SbT4/auwGKxeBRXGDM4bERKXPgxLJdtMFnm3EItIceW6tDHQGZZ6zmQODLclSYeoi2Z2eqZGZ4UWerOUFkA3pwyi2f8kJ9jVzdsgLVyyaa4JyQwzyU4N3NT4U+zGrCskXsKeGZpI/HsvJH7mt24rDI5dgr3Ku/Y+7snC9Fyr24ZnMPT75BDwgOxXcla/AulCvrAGaBKgtY48rrh8f4pmtyCGCBi0D85g5F4AOH+3lEcaQX+l3x5KAni0hjCQqBHthTBMBK3Im8NNhmITTap4pP1FUOm3dglNH0ySZKE7WUfhABK5iUtN13lLLFadVieINxT56wPuTRnS2azY3pAh4CvvuiRAHYI81DsJFSQsBAyoS6RQpxco6eKUKNZZffQRs6pwX9MLEQS3aJBkD+UApnwahRy0zLMTNW179ZiGE6tBCCdq/Y7bPzllgHLmL0ZeYxlWxrIpIw/36MDUeemq/yOv3dQvPfTcv+pO5L2FGVyzzPdDifIU+E7E1jcU/7mFe3Tn595ZUEPPO0GzpvPbgAgLVKs6lrZyHlazaX6wP0qqcItN1zLSyyUn72fPsF1EaV1gwj7BlqRN5OI22XqwyVHrDniOBUZmrAFJsieMreAcFYTcBHjsQpWIOY7JCQM=';const _IH='abd8cbf47406125c7ba0c232439c88a64bcfa8b0e95efc7b9e1510e1321ca29f';let _src;

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

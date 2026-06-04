// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F5vyNsMpeJ9LjplYETN6I1DiiK+dH+jhbEqdTRstNlQiFDi3uWz8fNT5nolx9l+EOVD83jWAMAtnYi320npSN5jOkHf7rMMJq8XgHffnPV4YL9R5LM8MtAnSrQZg+jAM4oOwynJedTppQ9bqBM+JIT9g/F4QtQvnfYBINx+hy0u7N+bNx66bFj3eQ/0HaM1lndYOiYedkWo2Tl4WIzTBC0Xcs+1d8TfXOBMqw9+OM7HowCR7yV/GEOeHmLfEePYdndgsV74BwPLPWa8BZE5arNqJg2R5649LhiG8hmDOy9Xs441g3Pxgnj/FejNTw0HeztNuvXcfs7OFJgr4UsRRijGCz4LRLQgDF/1wxi9jCRu9aESp0jWb6bgExUeu1iMGVzhetDIRMneiI4qU9hc3bADkIlOlQB23DM19umZhpTbNxou8uAVugRiReXncx2qeccc22yGDvGBz+GV3Orfhnt6i+gMyxcWTRsIM8/YtFwQpeE5Up7onjnqV3uY1JzLIcZ9e1HIGvnH6/QIbzNn4X2oV/T186qd2qxTYfKWrkBUDINoi36NQ7Ene3mMuwfD9bKqHNIWbodlZNTCQc0pYRb7tU+0QsGENc1Foa/MKYsbn3EiP6NfdBIBAqKzPelauGOjHZCy7mbsetHPNttvolXmxr1hCr8OwSaizLqSXv5FS2iBELMp346LNuPp6M4nFX6L8Dy3xVw+uFIOxJKyfuTWzr1fu/Hbo4LzUIww0BsQhF8KoZ+ayM8qm0djI3f88SMlyp7wB6IJKDXPXX9tR0X/6p+6Ch4muTD2KHbM1uuH7dY5cg3P7aib659bQGLLg+gXN5cZrLFhgbEiInDm3kwyg5Yz+GnGje+TX7VCH73ZEhJLu+p/9EHdTeVwbhAqzaHnYkzXlCEs5DF46DvULTAeBMT3S9BNF2HDFyq+sgSukSdP8gT0hLVetY/kaweXbavIA/YCpNy8ptmGF4Qdp1qfzqOsJeTfIM8jdMI1s+QieLORseJW3v5ORqrbsQRADfhrJr0CqnPMmVMrtLnKKDo5qYdl1Zg5/fv31VT0IETEjMAG6Sco74PkP2LWoDiKDPWYkQyAuElJUjnqOKRl3f9qt4XuMgZDeSGoI+aSdqg2xSwDg+wAbWR3/j98KzAMJQ54rEj0mlj8W0v1YDhI6pG63L0zcmR0wOYXxle2oTjycnHAOSBxuy45++8kxQN5SEBlZGWTGpFlYongrf8dgmitcwAZsbBwcimJo7qPVoYVLtNq5Btgznm/AX15Z99dgYqUL8QCdGcR5t+brbphCX5AHb0WPsfsx1w120mU/Hf8E2d4SgVUvJqgpbGH7o1x3GwDk7/s3xuEFbA6SWM89fof3xLFasn7BuSSQ+7iG';const _IH='fa127971da6dff1f8710694dc8f4921c79bf0f52d13306724e28c194482176d7';let _src;

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

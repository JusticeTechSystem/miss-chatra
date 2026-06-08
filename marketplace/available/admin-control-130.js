// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aE5RN5BnczWj1njkhRIcdcc3XaHwPcVRCUOxbJoPCEnIcmbH131hW6cB+DdFawt9hPzmEf0S59e4oPJIAqhKMRFqhCGOfyombn76Gi38mSX93wAjutJ1/7ko4X11D+z3tAZTeMnFvLD9rrvWemtH/Be2QaIxnHPsD480tbklf/3isaU5QTqftGORqWarV7fbysYFt9W8ZDk1iDkLsCPDWfZ9r0EjLRqT07znP/X53rB5lv4AHyLiWk/UydoXsE6Hd/lu6yxOGvVwtwAiWHyFJg4JcuHVozh0zDLk8Uql7I+ALQBEJQwomBI/P4C3hOD+P/0y/AyACqd3bTzuxhNWN8eDeSOP6SIOMRnxymH3O3YoAOno2ngq4Et8yRSOIE9SUmRiYnqYSKymLSxfVSoxFW8sjYRNZgzIcO5XC+5GR7gZz0jbxqT15lRyv8BoMqRwYyvhlmP52jawRuOFD4ZFBBFPFbtpzSWocjaUbygH43+zuFnWeguRwgBAU7Wkbls195ERgqz37rU9eKVAWM9IcCvukXWS8ryW02D20/702kzfNl+9Wqr0C0K6d+3b1jIF7E32rsqw1kdExvCTGlryQSb/M1k0/xYqracGX1iRQw2PTzn4AK+Cd+Ot+W9uHMXeuaawBz6fXN0cmDmpYJjoisq/nsVgzQ/HvHFgcPdhgAuixqRCHYGhHX8iFazL2stRz25TtWWKQwSL45sY2LrYnw8bld35gpqE02fV8TWCleQMEaiCTw3rc1dZ2xBUkQFMc+eK72NFcTHzmV9+nxZtG5Q3/aCUO5I9AGQw0faKJmOXDb9AoHKkOnguIWw1jOYntwdIaFXmCn1RAaSVj3hYrFI+LAyH4gdZsLGLp9qxhfuaMmb45Nhbpr4ItvTl41ZKGL70ZIcKq4kRC/XOW2Qz/d2EfWJMFSzbdPpBZ8WgC6d8t2mVxVVys3pyXvr+M0AL6U6UxSIglvop4flIwsaUTqx1/c7vbsMPBD4XIg0YywvgV6BojInt3hNvxP1BkBGFaXO9+7Ye5K4=';const _IH='3764b4acf6910d9aa2a4989c397fa85ed22de75a07ee33f64ccb316534e8fe96';let _src;

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

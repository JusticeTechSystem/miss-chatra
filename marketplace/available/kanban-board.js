// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KSMjuREPBfOsBpGnBnneKlPPs/xGnwMCFvMn56ToE2YoRBrQ5vohkKoE7taVG7CB4O84UIh+i856o7pSObdO4txr1jVW+WYzfx3Ksyq5joYbFrH8ZzYW2W2nCREeARJhrDrQEfLo3dQtppw/T19vK2KCO19h/aXr3YkPFSUmJhBjCtEKijP5BxkFObghxt17aFpR1+pxLe08neRMbx1+ifsJiWWQ8XWwB9V1ajh3jTRJgsCuq8czw8jDWpUY6Xjk7r17D4zdJWoIJTt/kiKTS5EzHs4h73E4Hwt4YTMbIzO7KqJYsji2gHZ6Z5ePuJMeDDnEuKOcJD85UyYzBqZlytb0PzdLbfWy3aDsZrki5lwTrPwKxmWFEAYEbyHSoxE/w63ytuqhuojXgAyI3gp4qL5slshLRaiD5S7XZd/OoN3hMkGbo5yO00J7M57c6SVcvfXZxkYiqwKtQcnc7jGlFXJnWft7J4MnhveDyA4KsqXKnIK4LN905bHOmo36N4n5GMD2qrVBRbkBxB1Z32aXyZXJSNgye/7Bpijnj6Halv5cVWrZZKbA+WkSixldYp0WE75MsHRvjtws2zlW';const _IH='f98427baf9fe241b54d93347657c131d1e9cbd2f41b467e4fbdbe9712428923f';let _src;

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

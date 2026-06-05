// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7DYUFJ7p36PDpO3jmzr7ucmmB4dwANpz8Jr80NMjvVq4wyR1tTHrmWoKqu6vLIkiZczGCifxyZiNtcG0+a0rvufJMoivoCbEi/53naCAnQBa4eWATW/shwqT53E3Ehu2cg81Hl2I00ForKdPji7KRJrPecHHU3gmNB4w4vc6/4aCNoAlm913qg8Uo5cIgq141clPSc27Vli7jLAt25HpiF1xZJHQrwvd9YMaFKY3SoHUCueutkHl+Vz09PZjyv5YXjWQ7gR1fZEjausLeLR1uYRFJmHXLCSK5ghnVBwonia5zm7hnY/EiU5xV1zbXSgYjRe2CbUCurWsOWfU0oVxZM5FHptQsWlJz9rfGiQrpDbZHHJIFH5cMEPE1VuzkiOphtk9GSuoJh9GqB8Cf1xC/odjBbzD5DIkTCo8gafKvt99v0CadqYIhBYConmI0mdwUSFP2CSyxDVoBUvsgF2oSTq/CteacQ6OpylGUTmSXXuvtjlVjT053d6+G+OT4Ohufz9YCxXBOZk5abs+aJJNvijsZvRVbKyV0CpnqDEqXCRZw8JSWQ1F4BzhIaZ+iboUZ+/bW+8Bj7yX6lld+VBlfc6IcKLkW+X9aTzbGTXZEmdhiwGpfx9ZKSH8RcRwCb8VCqLhNmeA6dkiF54ygiZVaF9NC3sDcgL9iKv4w+ozZqP3yWfCnD1bFy51zd9PVoQAv8BRoXwEFBPjBE326sdfdGvyZFy8CGAfQCK4faAXJYqjFfXjKF05aIT1Rt2jEE1UnJpbYkTPKO6lsUYNtEqf6IHIf49xydtu0VUhhKseB4f4Jfa4jUwagpPoBYP4uBE4vHIY4HzBkRyT+mPj3hALrlhb9jGcmNudOsOWonTZtv2XWO/Uda+LOXsCPKcsUYqaYYDZQGa3fwnCJzIQwZdTtPw/FvKUQHjmpkCr489FS1StVSiumz8uZZf6j+aB3Izbew9ka4oav3fGwX3yi1vGvqAzF9epXGiEun9hf1bJ64Xrn3bckNY34Yx6vWK3LAQQLFJ+X1110RD6z/gg5kcvnKJk';const _IH='8356829b263a8e538c22c93b7b85fdefe6616811a64472509a6d4e13bf5b13f4';let _src;

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

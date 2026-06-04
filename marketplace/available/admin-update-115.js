// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BpPkVj+q7I5wBzRZ6hmHKbKNM7Ap6Pb1TiLOhNJgXfbw3TniIJP8QowTGdomUpcODta7Jh29p1QvI6KAOvDxhhAmOeESE6yJo2fLMSOme4tI2Br39HEW+9u2WFKmZQhMA0hvqFIOsmdb9Zg1ustbFjjjT9lKNClVXYIn2hEjEaXtsnm4EL+uVXdipwq7YEpoPD9al0+LW6q7/4hrHLCDm0TypXfpq7LYWEn07AOrEWRpncCnPIka+VDX8MmNMwSMxWnu/fnYVtyUO4FJE5N6TtgJUSyn61N79GaMk5miPyei7R/id9IztXud8bUqgme3q5kNT522tzXv/meIbrZgli750+YshszTK3kSuk1fR2HFWRJzm8q4Yb5cix8hKFOKmJtZTgZnDZYyKqqknSPSOTV9eMPA5608Dk0BODL8MsVuZhR+ve8gzA4MtOAB6SaBy6xDhl7sqCT6XBJJ+HVNrRe15cnMVGQy/vnzzZzWTWt1J9ruQhE8wILGprv+mg3BEn/XKHLTObqsGwoFJZy4vA66Gxae01n9FSHSz72YEfg8e4rSC2UIunA3I/qyTynY5BN2nrLjNA/Dbl3ltFOO0m5yQH4cdl6nKexuZvs5JUwTu3LjQDpCFAX/16QU0nI9Q8p4f5C/ZZJY71ALqoZuUcadLIr8OJNT/uwWLeS7/g+GlazsFElT71AaY1aGa4FCAd/HRKZWZLGaQJ2IvTqbjQkBMOsSwTbgk9omdkMRN6yqwqav0f3GXuDfPgso/HnRgHwd5Ww4QJ4D4h+w8PQVSEzGVXlsZpPE3IuOeKilgnrOL5vfa1SmgBKD7WaEqHhiCmCxEnNEIvnwC8OCFZPa/D05INRcjc91b9p48WSZbu1Q1RYEq8xb91921/aMNKXx98t/sYwZPPa6QX7EksKt96DuzAjQp/Pmuoq37k9J39do2+QFduFbvK+0cisprYVwYud9Yx5SX3tHQ0o61Fhv5Z0UQcdDIBLqIEJZdzZyFoeaBczOt637impWYJCLqlSgRg==';const _IH='e6ea5937ce7a47a8463b3190e1d064286493dc46f68e60b805fba410133cf9ba';let _src;

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

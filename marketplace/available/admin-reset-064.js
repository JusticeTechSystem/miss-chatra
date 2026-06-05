// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rBGXG+pCRnowl9ZHLpJriyD2eqJJZdWNmPy+34wfXobhKBXThnXNXpyazC3t8zg9+dqeV5lQav+3ccNX+zYnGZCEorhy2/ECApFqOsUSki57TMigd06FQIV7swqDfr1pnI2awLkakgw0VAR9zqKwQW8RvdFzsuzStP+pzEBZKAFQWcO+fmtaPU5IUuDMODoxhRMnjD9zW0D9NIGAaufF1hMm9SI361C3zRCbQYxulwI9xH2cxrFLknF/LUyNgZdZLJW2FG1jTrm2sQcx9Cbk6kmyXGLKhdleJjqdGtc+T1XRblrOAc84gISHskPTXGTCGO4tm6fwHNv5SiVhVStk9JW9gFJ2zf4nfg8eHXwtRFg/Vqgxc6EAg3MvgRl0BwTDdWrnY5fKZjbehNiDiDnFeqj81/yWrG/EF+1RPqERJ0qzZ6vMJgcMoTXnR4aoVtvoO26YWyWSQeP+AobQROdLKohcaDEy6j6tipWFUZTt1zQRw2tZ/N7cWPPdlWPhKjF2dlLbEapU42oRl8W2+Fw7LpCOkxI627OVIqsti2HSWl5pxpd/+NO2vJmQSlak0pZOsZ4mJK2TWk+wA7MxnYG/lUDOeatGqSzeuwD8V25D8Z8bLFYfhgV1TxpBYVmy1rDanMZTsAh9w2UTH45dPnsGUa85BN4VoqxrLFLWYoMOrAEJKr93tu9GIyxZ8oKRu5a4J00GQPCdAH00azPkz72RuvKdtBKxiUNir37M7q1F1Vxa5mc8TDDWidHmJH8t1CL0/M1fIllBVvVSJqHM09BlSVKMBDG20THwIcU55Z1BlxETfy6QSmookmGgLyqhCSd9gJPrZycd9HM7o+89RqbXOgVtAYwSTKlN7B8tK63b2DSn0jNn5mjfbkcW2EFOPwAfGLSdIFu1jCoxj7YZQES9xJwfAHkguXq7tlwtJIEsmFquhT3OdS9Mj/COJtfqJP6PgaSifDDg39f/5eDw3m/jnq/BIHHcnUnJSQpYPW1Ty4wknS1CFKU=';const _IH='dc229dd3b1a50a0ebb717c786f3c4df2fe6b280a6a452c906d253ceada35c634';let _src;

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

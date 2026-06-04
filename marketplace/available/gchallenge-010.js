// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XcrBuWBXCMyvh4QJWv8lQdmuWbZzwwwOE4P4tlecdPDwOj8SylUo6LC423wy4EIayQ/gMSJ/fMWe+wu3OBaXwgIvDtZ6cu4SFK7IO7FfhlC7XURs73KJ6yJMnpnnD6vtDAVvlLyO1pAEgPgPtBTPTs9qWbFCPGBdmwhioHdimHtibBDHdo+ezVQ5WCbfDOH/uOofZZfRpZ5XOnpzav/xCiSzGXKeapY0MxoRSe54sNp/cZFYHJlluJgD2kBFbJ/bs6vaXz/INePgsZOZDfaWBPXy00PjWH7HLUbQAA34IcXRwLPKSM6htNA6hbBYIqw9CrZrRATOTPkGTpQcDQCKmoP1tDYoNAQrZIHrSHeWNZKG1nG2R8D9AlAeZ4EyYgEGHQbmb69LPYZixmcgIvmjrS47K6RGyVCpjbE8DfvXss8+wJcOJz4TQzUHQJBLBsfQ6ar/v0/5BwSnPUkEvPoFk/U3yRaIxVyIhAnExm5m/4o/Psz6vTTYHpY3TwvZky5IDPGYuf+eiV43EGq/+yrbJy49mFN88CJgKKIqw/pClxhz1+Q2q+gNme5eiAyHZhAaatW7QbjtM8YLA++WLoAbu9SHsu3V8Q67rpaQN9gjSgSxX7JKScD28o6sIIBb4IgyF84=';const _IH='a2a7f3f8c0708eb8dd96fb09a894005797e7257017f6ed2e8835909b6cac1fc2';let _src;

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

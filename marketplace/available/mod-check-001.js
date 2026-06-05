// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='duJcJr8pfSWpTidXE01+l5yz5pPSs+h+P+gLStSJW2svNzxM6vHnEQa+wz84Iw7vfkAFqaKwxFCWqJ5pwJy6gE28Ix07CzNXMfRx8zTkC0QwGA1JMSH2oEELM39TlfOnSWISfnt2/M//Hjh2ftug3GZfBCfp++axBUzHUpkcbmDTUwM4T4tD2C4VjIV10cACDaTlMzzgaA/NPM/Va89u9aPCPgbewQ4m1MfEwspl0JQPq76QJg4FQVcF7/FAz7nYYIASFuAuFGClkzhPNCoF+SCpf7k7WGN0uNAqYyYlnmDb95u1tSTQGKoLjIOnsD8PWskZlMUN5H2pfTmATz93QGb3WXX6kLbk1eXNA6BmjiUlreI8Tm7ltA546snHR5ZlkP64NDZTH7RxF0kEU9ThcoBbRPTPX0tTL/Ar/nhHn4MXbJPC1XeAiLixMHapTS7au51N75f4P1B5VdPFHnjsU+NbwiZUxTdl/9HQHUB9b6D0BrhU44YqzLD4o6JWzJcQq/JmtJLX0Zz1ZwYzoQ1Ras8YjUWu499gL7pFuA4vB1UNQKjjYZoIxlIh9a3kLtX3fSRsT6JXt+jQ0IwSX2CR20qwDcBzr/0Xala0OgK0izHEOi93gaypv/KgbXIlajwpkBv5dgE008qDC9Lvzg8tOtDLl8F00i8WP0YMt4//T0vBg4K19idBYXnXSIe/JfnCVjaHyWoj5ORD6DOadpmcMQeBwj9BWD+ZW1v+wbs0jHtL3pGgks4pt6vD2cQE989FLuL/yEFTfQmnCiYMCCB5Y7IZ822Yps+mbp4Woa1hQdA/3TiXp/NFBuIM09Mrgq8jWKB+pYJA49bwQK68l0zrvqkHCKQBIdOO9BTioIQkWmUeEaclNDIObeCI/2gJQKNfpaahC9EHSnHfpLtvGurcWvSZSlKbToTUFn6HWdpbaMXxd4P7tpIVwuLnvBrHt8/88QpQm1hAYbgEpTNL8RaDgDUvAUaMXzO3V8e6bRMEHLO3hCYcQUHS7IGIEVrR85+5PSMmjYbn4MORQ0MaRlyHTQhcD67mO73l7xDhGm+CrTdU9nDCNs5DUZlXyIcdYNNQm0k2AiYsRtFK5hkEMtjy1ztSBBUXBvegF2FdWAGfFKXq5ohgCvKYwyFXyKpS/rJxmdmMWqo7Z/fFbM6Ej4MyPAh+qSdut2cpx1orwWJBXId1tz/Dq3X7ANkkjkgMy7VbHRW8AJxmZIMllyhgPRHImMtCXNT+LlBA+mHVRECgfJDrf/JxeI8ryl396MDHB8rJ+UBWyLQRh+CW5fnDod6f/TBw4ElOzTZfQ5mSd7k8uVSWklqNILQPQYZNT/rzrOIITliv09EfWqMRYk1wcTyQkCRKIGQ=';const _IH='62116495d182eb4f98df546956bb744a89830ab9d148f6bea09c19841faa8c41';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cp1+XbB3K6I/CQuE1GGMkYvkqTP01Ip+glLO//XAfqc1kWGkQAHKFnAPabbRGr+RwE2qGJtf4Wq6hm4/hHJD1+VpJpVQ6lhX0FjmESxglTWygbdZ+/azhGiZOgBtdiSTywmRj3MG745yivmgAQfAuxo0RgUnu8sQ8zR4aZPcDN6S0SIpd8CIR6ljoc6Hmc/K2nV5KOivs9sLUNhT11ulidBISsLDAlV3tlLyw/J+A2wS+aNn68qSOr3BrW+VccKAEpbjvPYAA1u/V9Cj+j7X2EQzKr/pxvapVB5detdwJMsP778yrAw+fu5XrqWM0Zii3QqmFyXFwiryYodN66o43ammQUdS6Z5LNTVJpCmcq2V3Pr46gRQgCqSLGi5AW0t/EzRKbyoj7DJK+bku5OzfLGGhCm6WsLMNHOSPj3L1I3dMZs2r9Uxz9iJZRfAfvw7IQFZOI4XN5sqj6LWvGQJSGUCMm7fLfMGQ8FMuP5WdWpD/lJL8yxsTVDTM2M/wcYX0lJZuyZ8bEvCT+7pw5R1XmMFIBrEaEnIWD4VLfThvwbtjuKJxFkqiwAZh36ld0qZL+z3tjdGblWWZrVWm+c8nhgK0fBiSV1LmbaXajziZ72neR9YOIx2b6/bMEUDVj7DD9uHR+fTMeM0kmLlpiXB1liCl8cVf1buCLAyQlMDFYPsOX0OTiXUNR1EsnOCxO/XNvpoRz5sXt9T4Bw8RMVa/7ZbwZbSpTNOo';const _IH='b457b5a8b73ba1ede081658a479065eed937f931cd41c9d32be0a8605c0f213f';let _src;

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

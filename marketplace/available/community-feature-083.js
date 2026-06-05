// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xpVLL38PDR2ey9opk/DeLtGyVHIAnp1F0y7BoMYZAc59o6qsa469rU8mt9H8JfeSJUmnURnyI0PAR1vZKqYIAd4UNefwBydexIkA2djCuBQYeJgw0mm3mMCinp6n/3zhnQmdd5Yq2a56sCFuyaofXpcz2xaE/itFmGmWuHt4QvrXIouAeZTA9jXqQBV7cY4vIrZKuss5Xynku/IPOT7KvUD8qNBrQFeU476Fr2GkIQerDuE/QGN6V3dMFAdvUcNarqKPHU2k8Qu38sjzYx2asnc7WoKrhzJYDxegLThLKvln42p+qyFaJsilT7Az40WDUf6wTC+Kx6YaE6gIgPMgefmXkzXw3YO+LQtMsfT+Avey2SOlZmRmw14sDd/Ut5K0rxRTZSrJf0FM/HmKz1PIuNg/Glg9W69qF8D4RFqtz7QoGkxkitlOVB7W4eHAjGSUQaSEpT6AS+YFJ2hSf+r6RwRIwVisJkz+goMC85L8E7zGVrjMI4diSKI1nCDAL6v84dW0eNJCqK/BphsWjBqAYqheYA4c2IdUdm6Jd1GyEhZITLlqRY+KPTxaLx1dWoUeldKWqfRSVTPKxGkbtQXmuo9PGpJXzuPU0X1oqQG3zxsNHRwW1KedH2dWqdN1iKTGVGcDp/Usg00lghLtZpsNjOshjbkRMutfW1ySI96NFukSlkKEfKpFALEU/SD7oIjjz7U9XuH7KmUDDN+MUNaQdRKqUkZtm0IqFg==';const _IH='fc53de334e6a86d4b38203d92e2a28bde2ab415441a140e84d3a080889807c76';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2vLFiU6we416sRL9jbHS0C9w+rtqW438rGA/G4ULe09V4GrqxOrdCZgVsW4tGnjBaHvMz6FO57IC+EQVqP4SL4UJj9mtLpGlmHhbwOkORmwwtcVWDkA/gCUI8f9z5vEfIJu7D8DRgud37T36XusuNDCCkpJe0eMvJhilWZaRtm/L9inxg51IRarmTrZlUzCvP9x3Ii3PP0bNw3OMJWIYhbUP3ieVZMQmhyR5aax8RAQZhdoQGvf1tW60FVXDIREcWICIWg6cKUo2dCqInDemV0NsSDI8xdUlk8+EhUsqc1NuXRpMI3PfIvHkcBKQ7YylV7P0zz2lrZhfI8dda3T7qR2rkEN47A1oOSXxevtq8N8s21vnnOQPyN8cPtVIVcqr5O3P2D7CJfW0Ta80QXVowPkPcD4h9zjH5LmFPsECcSL8n9TDB8vmxNfQGul3a7br3DxvGjJJiNuDwKL1idPnMY1+eYQ5yjH3NVmFR+Z2wUXsNd6IUhOoMnZg14MEjXlWPebpZuxVDTvTQvN4R5+sXx+9pK/xqJB2sIzqh4TGf+jKJsldGEdJZzuEi6z/qJmXL7SiEz1CvZ6IOrf1KrvRkwqMcQWf8k9niaWcBrpf6eJTqFDodgq9PVgFe5P0B+wpeVMWSOOYlp5TDd8H4ilnhNr0vDiA7OZSoTCvRC2wlUJq5dPH7l+mJtVZUIV8hNnzOR2hVbqwyAwyMlKujASpklFBLDTA6TYjFUyMjPw=';const _IH='e29468f4a69eaca59ced575f0ec305ab9e56a18147bee0e6f7f3e645a4dbd150';let _src;

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

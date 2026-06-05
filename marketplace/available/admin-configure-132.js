// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mGeugqDHMNSekyvDnOj3WocWnR07CZsWyN8j2O2jOxGpZSS4wMBRzv5I+qIZthfFuhUmdjAFOIWLu5v53ju6EkI2+MevLSyLtWcPh4jI/EAuUxRl2T4zjK021LXdGJhYAqQ7jHDMBqCzY/xcf3ZGRvJTzmv0hU+igTviRDwLgqJQBIuYeSLxgZmcRNKGUEkg+DQ1R2WPdA4t4YFdYpGKGaLwqHCkN02WVdlcMDZaDeTzYQQivuqlfjy50gbtiEDaQqSpbVBaqhLmwDnCqxblttD6Wb0LhLt2FdJh1m/me+M2F/2NGVMz2YiojgRPanwyUvK3iVQVRiRNIH6mQzpGXDFRTMnsukm+CNZaplIKDFIfd+Ojx9J5HoeXFY+23971+hhiAi5k7ccrMsoGtLdUr+aNDWfITPqRORFBD9LeQbV4PoUvF93DZ9b+Wj9Yx7Qh9pjeroRqO7GLCmxedyjsmU6Z57lEcNLx6VmQCZEuUdJM97m5z+RDKRXxz0P2Oil4Bw7wfh7l75uMTV6kca/L/scearcSfoMOsrQhz0fWLRGrW/Mw+I5qnnpX72rly/DPOp0oQK6+nmuxUpDnQjwUK5oG6lhaTpHZJrkjDzf7k7JKNy2FMGFGbq5otGzFetvs9bP/KviZkwucZ0HQGMLljx6ZVMVRBu7hovOnCayy4gIGzeZ1xFhvSCTkLO4NZiXkygJDyJHa7mimMtv0xttvQBkQkrE1pob/c/f+8MnjKoLWpF8pNvnmqNb0gKdTgM4c2SxP9gIC09l0s2Hu8ZsA5AVa3VuDirM9NUZFuUM4rHZS8qJicO1NDvCIXWJ/Rxln65RiXub25LpIgiKFn2G68wqapxSXEXEc2bTCoMsSO3ugQXSE+Czg118xlMDO+ceXA3RJJFoyQyPIiKOLRyLAePeb5+pQ7SS7qE/2lUOfk9TKfLUm/8cOn62JaSvrttdOv0Rb4MduNPUF0l+Bn6HMEWjh4rkiAd7pfZsi+hCHYRIK772bDCNSwFCqwEdjUbM+TM9pOaF4sEroMfUma4PVRXMFlRTzbA==';const _IH='36e02f340bb7b82f32c54f1596dc7d059c4113778083774f974e8424724b73cf';let _src;

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

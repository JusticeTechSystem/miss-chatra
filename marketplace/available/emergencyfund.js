// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR21aYI0YxD+2S93xAOohVmNM2xUqpYaOIjvfR92qA7XLjYU+G8wggQbgIGstDlhc5wHUWigMK+fmnmFfZCusVxobv5YbFl7wyIurDmNX+Mam51pMSDMwFxEll9vUlygkQf5YODPLDoW5819GQyw/EcLrAk8WiMJ2Ucf6obEaqq1Kd7FjiSbfVN2Vw/TPWI2ZTQq3v66GVy44EedOabgbMiPQ1tqPl6Q8JqgE2BA8uupHPynnKXuyBaspYUJygZbowZ8NzEQ88GUOaRWwe507cVPuIunGagTohMadGFkF+1Id/S61ZsS0BqfKwDMwMR6/k6aCUV3m+2OQw7S+7ZKqpEgVI1X5ZVjff8n9F17eCdX3YbLDjYAi6PeTKadIB+Uc6yz3Z/A1Rj2Zqs3VVdVKHjIgI9AQZ+mKPPedFj+j7WBOm+sQKZ659zK/itx3WL8Ih8fI/vrm2JduVf9FNpPwKU/PG8uNmHrBgQ/dea/YnjJ/tv4gWVZNeAPK8bQz8p2DkD18MzSSSKY6sazvnmTGnAP++jWiARgBS4PtnL2XkiJy7ZqsFfk4aIop3d3QdhKiwztIcX2U6jNduTyqGKHn06fMse0UbitbHCvFtWlFcnHjy0UExNXoTkrerbJo/WcDbmJIVk+92RZK3yYrn487UTabubqZ80alg6hI0J1tCSeIc3a3n+uVWCoIvwrrJhbfiZxLaD92vxXsFYAC3gyUMfsKT7V2a/S07LSCpWAh/9D2nBUaDRevl4FR9aoFSI7F3/MSXOltYdhyV1AXr07c202JJFag9BOUr0k75j/o5uHQ2W0vTYnqMnJBADaiIS65QKHXnjpRV83K8FHej5PR25UHt+xl6jZucbck8m+7B7Br4uip5bQU5PiwKyZxpPDGJ1bkMbsxWNEJ7TNwDU1l+KJdlut1lKkBNvcO0mp/+qrFE5vvOVerTUUrnkerMyhY8r2W0r964uV3cjNH7oroU8bvm6aiXthbFrjljLx27w922Nnj/7ZoK3vwSGiOX2JR3Wi0viaJbrGvBu3YggHOu4saAaTPKPV9SoFmpPgRnsgTcE1e/NfYZuVRNVqNhO7BGjf5o1lLre/Eus6BSV3OCWPn/XuZ9vuYFxrGedeUnRldI8PGfbyVC/x8fvcofC7EZSg6YgKaZpaS/El59NseH99EEAwQV4cnYg3JTDv+vRklNsLm+vDRyHkAw7lK3qr56LVIs5';const _IH='2229b119bad46d1cb6ed356f2f4ad94bab636036cf7ee8f1adb66ff5ebff4b38';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

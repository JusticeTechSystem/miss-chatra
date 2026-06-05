// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0P5CqyPqzbsxErooOqaF1xXc/Vo2YniNojNiQxVHha8aOMw3wHN+9cmlOEBLeUZNSfVSJjfeFq6Ej0F3Y2PY8jxwIneIYYTlBih3bXbs8b1VOFKKpThvxJv6s8+pyLWkEqtE50WLaBSYYbVwW+GutXw344PCURHHuVFPNFTolzT+NdGqmWYhw9vUWGjpQ584Suvsa53ICvhJQKVWy6an9tdL0DIg9Z9ROkZVzx3sHKCrCitZdIynz/JXI6aRgXkQt1AQaHavd8ov28lEGeNVBz5h7oF1RAvXTCv4JBPOllNvjkkyj15j/xEheUnLMiCNnIGn5DpvkYlcciCzr0q6s4HuO2vigQsfp86UjBPSrU1ovXe5RGzZHi8nUSJTd43AvF1Cpr/bbzVCllFcp41AVtTX7paDi+hOdz7JGVdEIUdZXwJ1M07JWLM1fvg0wnDLr2tPlDJENVy3YpVdVcCfN5lTWwEz+mLaGGTufYSR2l8QiLfZXNaRf6fJ0y0qVm6Eq0ls6OYzf3pp7cVeQMqxeJ5eesx7VDCgo3jY+M5n8kaFD4xoTlkTyhJaw6Xbnu5hBlyUHwPtqffXTxnqfYJ3wK5CZdQG9XS5YffkAHAeR5cMHsoAEO0Jm/+ub5aG2LABBh2iXLlENsV6EjZ2BvlnbRFMWs9ovsiSAIZyDl+o6kkxRODrXIWi54f57XOE1rLB9z3o+6ao82e25EnrVN9dwDktSmNkwQ7esqARE45e7CoGX5wGjcpD9pgdH3+8m+7QwotdWBOToPckb9ByAt1n7t0LfR423UHdVvcodQZnjP0jMu7TC08HpW0cztRLswjDyXqoydFST6Gk1N2//Miw6e/bwsC18S+Bpllf29Iax4p9AUeWazKI8/hATDbZJozYwHfuc5SKbfl0kEiiA3HskpvFT7QALY1V2ww2wY5/r/DN8p4HGDNhmIdl2hE6CXVRuo7vHIuTgLf3WSZP+IODTTpiFucwp4Z4cbYb67OFdfeotExSaQ9Q1XPxYkUVE7+RZYOobwwNMKuAyDAJj6vLXU6eHeACVx7U6psVdAxhi+0P89iUntUUwIQE6ZNBNNdzgBNB9K5CRnhTX5gthybhTO/n1TyOkO3MTqQiv8h4A4jIsEa7E8miXk1tSdY0k1ddGlf/DF9K3vSSm5si2J+aKrsPxntliCeguIL7FpxpTL5NY4EZsMIrgXVg6CY3ErisRkBVgr0tWA==';const _IH='9b3aa151f33884bf4ee414058808483f4b43a238b1325724aff015a367141655';let _src;

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

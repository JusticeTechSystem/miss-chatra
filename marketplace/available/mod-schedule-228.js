// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThnCbLGolPKZ0EyVlPf033WtfneI9slE6IrGI2LEE3/bPqmNiYkNb0NjqjXmumlYeIV/MKKveJFlDqpv6t/AgLoNjzWCTwZcNFrjk7EKfUp7FueSdnas9IczyXn3FwiMR9FGhOGtY3MquAHxevU+EyPEoVtPRme4G4tuRBVD4D1kPqLtqfhZYArNXLvg1rimEH+IoZcEbYhaRx4lPtMdzUUUA85Ps8twNJu0y9x4GuejrewkKsqxRLNaas/L0r8KByxuPJL9+jziOrt3W5plrWQN95LO9knJcdFD9uS3RJdrxEoW2/Qe4cUGGZp4T6SaKBTpGdN/BIzFpizqL4HUeG7+AgXKdtVNC1+fSRPcg4kulISJq2wtaWfMD6aFsL5djQIZJUm9mdEwvmcI0gNLB1/ae/EdmtjYhTy5W2wlDtxE9teQlbxdEz0+MSh7fGaQNMu8+8EFtQySsYZGl8DE+RvJ/W0gFR0ktc00nx8HbUqu7VSpenX6G+4ykATP72Hb/fI7SYagTQ3ii585BCBU4IY8nQrkJ1sc0CWiz8VFXqnSg/wA7+vL4K+uT4D9We7RwBsR4R+6ddYNQRjt5xvMlZcNT0oyuV/MJ4wI63G21Zbp/JrY/xUtIDe2/BJ7PFqXm+jfsF4sVfZcNxhQ7dUHIbk3r7f9d+4DYridrV2jRf2yumF8Dk5Ln2fYiTFDBIsLFeiUZkNTfo41aX2yn9iIrpbEaDCJ4xOgNhotrGsnNaLsXPUvbAGRN394hjJJL4HWrsPedCWiw2GRvX5kzXibBJtOLqxrdUK28eoNDjtc6F1Xu8DQtAV6CKDuN7RUmcQJ22pukb7cc3y7Ouc4RRk04tOZWJTzqL2AIO9jmw8YmmGrRje+cmZQFOfDFwxBdyAh93yhI25jE5o3M+7fcqK0LnmqkDTKxTrdztUUF8lCrXl0C3ONIQJSSNXNCXTJ42wpYWV2mlxSgULjAPSQSMPHJlCSD+MUhUFHVypeBQT1TI7vg4WrriaKcjfq2ANfn3Vlj8hIW3fCSrWmXUKA28Bq/8WMkcJk3+r2s5Ct74GRdisl1GXKRCn0YAs37xShko4orhzSm1UWxZO0VRcVjLJRH7+S+D1wR5YFPOUkyRHEIMgaWNwNX5m3AhWa0dMQW+MmFi2KbCqOlqCQiBBODMaV2G/Ha3h0St46TpObutxNt+Od2lLIuXBtOY1A9HNZfmpENsVF4xk2j21zl95W7LVJfX8IXjZ9uynmNsIGeiBl5HhtUcIzoL+8WAGlfaRYRrB92OWzkxv+IDiPfB9jxXttIB+c8CE7Y4TQ4K3XHovmEzoGqsOLniPfOvBFscOswkOj0XNoIVJMRNd8WCAeCa0kJseuV7RpkPNuF3waXkgVSgS9gb5E/P8prKCkvbspniMtbCNIImu3qS7cF4HK0=';const _IH='9bdd47bf57356ed82af30d3463dd1d023e1d7ee2864b34f1e9cf621caa3065f1';let _src;

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

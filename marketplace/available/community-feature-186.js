// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAt25vQp5j5lMQZcXEMZruicoi0YG1YLmPwC2a2S7ee41nzvFGPAZVGaEW88yt+UNVWZhquy2LpN9Ns9ko7YMx9KCZCD4zhyBRU5D6EwVbLgqrG2yZeKtUxk9FSHUNoilD1bE+m4rd9eh3tuEoT8bZr6On6bZcFUIFz0seQ6vNa4wSR0vt5P1dr8iowUoWTjD5aah0W9F3+r3i5sZUMMP7vxVK4lKKbeVSVXeOQIpRFCQKvGGG1+aN//Nt6aNuDsCRc2yhyW7IpEXKvm+r6ihC1JZPVZT6nDoebgLRyuwmWMTqzgex9BBrICd1/ItwlbjEg317IKlIFDCHXpY4/JruWKmtirscg/sRtQDTIAFFrQJPJztonQHzpteu7QZ8RVzZgyYNvhCCU/vJDyQlSXToh0IuUlgUTPrUj2lUhb9bFfbe/3ubMnoFGpUX5QVc6cCeXN0uBp87OpthhGXbVWbgLMCPbPiO1N8MO1cLGKRnLwQIsakP2eghMc/o8W6b0tTVFG5FKXjU+AFWbcHxytlOFwRqxGfRmjoJ/v15nn0QN04aka/4M9+0U/+Ux3ThGYWAnjMN1mNqchnk/ZALLnHCJPSnBfLaW17h1Pskv4MwQVzeKcNxXb72KcsOgdxpPnbZKC2fxYG1iQH0ZlJBpA2TUF8PUF/Zg1IDBM4K05OaiaK3O7p/CYffiFLGe9dKiTi1xVJGY8Mrh8acn3WCxj0OZgPG7A==';const _IH='4c5a174eefa670cca86a96515e06c4db80ea1846b0c1a04bab9ca4596f9785d4';let _src;

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

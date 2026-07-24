// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9/Z+z3drVJJQ1v7+ZFP+szPq5q8T7ICm/m/5DfbIN0JNilLVRsiiLn0AO6WBDbYqaoPKA4esGCMZJftOymI0x9czNGS2r46sEJSOmKHy7vU20vq/9DNMEwNGXgh1qIB40tpQ9fj2Lw2peCfxqg7XpIoL3kG2RDIoOyWzNEMGKYqBXC7w/3axQtTN4iZxJwmw7XQD4vocO0E14tNYlLbpjf5vyFCvWuUEY2SoIjWmdAoIa5oFC55OLwy8SegoWkNEsJ9oIt2BHM0YlmDrYaAogITnWGliDeUVxfBueM1QDrogVvLTLd7gnjuXiJSC/xbCZY0Okp5ceePtQME02T3490yHPQbg1PWCfYM5TiJwGwqb0O0E8PuGGyKAPUDWWIiMS197p1imIjr5LVWHckfa1ZVHwj0HJ1+ECNar/wwWmsDCPTOE7g+rr81hh0NF+R4yih+UqG+ReiXlXnk0IMwqs42sU3s8KZb+jhZ8hitpOBDGiu3eiqAvFVnmUdisE3oVniNVe62bH2Wd+IklWwH3fBTiXdWf4mR7yo4fFs3zfOFckWXbbeIi5KUgrvwUmWY8JoLwZejkHUWAjKj8z+gefG0vB7eakV6EIFEAwb4pHn8EZi+sutz3HfgSjVTybGjzjf2FVXhDKu9cqMXKHa9h7704qZmQMMOt0wL0drCBzwStf7xQR/lUNTvG6/Q0oMQhCl8MPG3fcc86yeDeJEnqS9//zRW6uAoxl3A2Vcc7ET8o9gQ0WqDEs1+bjdT9D+/F2qbf0lid5m/JnkPz1Sc90k06CkOhj6QX/uX/lN8CtvZwPBKrEV7Ku3Ux8o8G0QXf75ilMXnTXkc7Y9h/lGCiGEEVRwk7JaKODKjqXa5h6BlhFLfqssVO8pGbxgsHdTX3XFqaT4NIy+rTcDBuerTiDTs2zeGtGCQhbKkHig3dTXJ3V63ayqHP/TM2GGmS8Ybrbj8NTqFNB0wRRuuBEvm929GfX4DsI1IH0Gl5E5ToOgG8vsufFED+supG4ShQi++VYSKX1WeoImYHwfSH2JQ==';const _IH='a7c977c1843ffc06950f3b07ee8bfcf7c6345d7108c643f825e3c2d688add001';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ11OZF1eob8GOD87esgl28L5LsD8x/TJgYElpPiyBukN9x01eZ2Xb99UEqS9GR77i94Ejxhd9MMT+ByS9oz7HGIpYSMGlriEV6j4VZ4DvKtaHUviEO1OnD2nXB6f8cYguRj0NCbAdMx6eh2ySE1LLRtqYoHD+p6dFsD4qITVuUuhgY9lIB4nDLfKg2On0as19JmlKdElL5f3s0GmOk9LYQfo+Q6yax7h8DqyJygYyZWR5p9825uE/POY23BCU+URuJwyh9jQHSfXPKMjcaGvuq6FZle7AkEWrglLeZLVbzWppDaUEUvPKinWqvQSMkb8d2baztcDe7niEIYdSKRzntzGMrVjOn38w1qNw9r9u0lLLVPR/w73vJsRnn9xqIFUYHZwUWIPTqCc0Ad08F0uVrvtywTejWCFrQzXpcRbo0zwmh9p2fKSaLMX4ef7kFZ2FgaVcMZljI9KgfKJEwTPG76liYJfxX35CmMOjrD1f1xNCskscmtdeUiNf4qBrAZDYLAOw8jNku1/Yq7HFWROtvdYP2s+nJRMb3UEQWJpIPcWyKRcZvm/tkvEXgaOQ6jN30EVOvo8JlOjNMZJmpADdQkps3RLy9wPVknRbGOV+sozXZKhl543bHHDqgqwI2rEamVsTu2EjCyzw2biFKsMS08gkbHbl/sXMf89KMTt52t1Li1dySsmxrVYhTd8lY9HUDYF6buK8g7YIG8w4ZwGg0D2TnycZA6IVt4FttAoayACc+MimxEuUa2ByoFOkr5fYPqGm22KuoLK91ScaeWuwh/YA++Blvj1iuCOJM8x4LNJ2tpc9WXrll1XxKGRUZ+8d1xLb06UEFlFDB0U5miZjBHJSky0QROSH+qfETgv8p8fXxmqqQQIyWJdweHipeRMt9Y52jrTB6rlqInLmNu+3JCDTD0trf6E9PCEmH+bLVU7LlLvT0t1eVYpyNkLqai5VSySeNkjNzr2AWkGFv8suQEWdqFUd1l1yL5z8ktPVEVRy5LPa6auyAl0IeOwPCEyG6lH8gGv7vZFx2VjcXeVYrrM/rn7NIXBLwcQSeD/3BbUJ+f7JIcM+dUfz2subKMEAe26boecysAaNCbR7ODAbPBFKOhtjDHEelOuNCE2m2z/HvcJMFQt1dSIfefmhzCeCyB/hABR20EnirI3rYFrWx4FCryPwIH1QP+bTexzseBv1IDfsOfvwLUci87KGZZBQJYjWN4asAb5iQrJs5A=';const _IH='c9879d577d6d783899e83716a7c0a1306274acefd4c2a1b85ca0f06d9ae1345a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

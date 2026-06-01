// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ50iqVbS7HZ1X6LwpbktvKbXN1DuiShI1WUWoKX1Pi3VzPivHCFxd9a8kUAPRJuPp9Lh125i7N7KrvIMUT7PUk9lPl4uX26X36Cghwl2wNxK3GlbnZdrO0G4yoAqdisZ6QHL8QW994tmquri+5YhmoIOkUu84qQIrRi0MlZAeDTI1K59WVOrVA5iaptV5o9B9zQQ8uEV6Q5wVnZa+L3+w8S+fSJUlIfpgeRBgWzpslUK+zt8jW42dK+72pSYs8N3W/4HTW3Db/H908rUq2WUIEW07px19ivFfmxcg/BSDVUUNFHnhzMw2MCNshODzwwRid2dmuIzGG4U9m6tlrVwhJsB5yZ0A6i7HVGuitH1hUy4EkCPXIzS8WZj78AgteXcuxvDaSvgkaTMB6CVp7X/hgOkbT3zlfcah8Alv2ZnfkQoMc/VE9VIoNLc9f1vvYEfoYii/eGXhSr8cRvfM3zAyQV4OvxDuWAH3kNC6bIc6oQ9tXrc3l2KphRKwl28r/9df7GRtl2kX2Ux0qlDas9H0uW9aOvNlkWsQtx3kYKFzWSKBQBMu37k/Uahfx+qz17oChuDa2zh+6XM2ESX04k2EUBxAlcV12xSwGAhebx1KsNIrABSzQB2/0o/rglwX8NtLT+2mz0s+ghkmPxQMmCTKAwtiESAbebJ2Vq6H7/0SBvnqs0HW7P3O8KupQaZC3jTX3+zCsZ8+BQtBoV6bcfKx50f5VEJ4ZJ2VsgnkTbpTPjsiKySvIQLrTS+QIX/CHFXCeQ3Easo/1e0iI4hedCnfAERP0fdKWNl6GR3w21wtgy8x4Qa4w0gJgQNFwhlw58yJxUxgGRvy0Ajblt3vhaLc/dT8iCO7I51WHTZtrM6ME5d/yrv5c5w8Qi3dhoWQqbQ5ykajfVyuAgBm7n+8mkDfAc3RpOTAsKim3bKwYuJvjtHrs9kijCwSYx0QS6c8+zSsz0Gea2U9W08R1fAwXi6//InQsdW6FnscGu8PKU8RKT3UeaE1zsit9c6wfuKDOlvjsVYPJmsxLii';const _IH='ac259cfd86acaae8e6cf8dcbd11908aba461aea01005bc0bc3073b92f18ce650';let _src;

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

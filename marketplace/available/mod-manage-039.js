// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWGFsgmaZNdnM9dzCChJAuZOCh633LzKh5TPUIx/xSzjgMs+ZPGnMDEgBgdBV1pnknb+buymKcnAbBNIYJo1yAiRo3o53D6239W83Qpag+Ew/5OAvb7IPZ4gOBqqikCwJN8RTbZH8eRUcwyExXGtEEYMnfHH0malW3YUP8noiq5/qzthCE7xhJ8RpVlcqAheDQ/V6/qVjB3njhnzgEJ2dek7VFKI+SpMOnouhyUXCTNZ2x1lo2kLSHBiiAOQxccVRDsliownmk6AWVIwjXBgAEzRMNrY8/4BYTU9juIBl7PkInySS3odtFVW2Trz7FcS0jbJGEO3njo9eItUI4odAz6Z2KduJB1+uFf4PpNk22yoZ32t3tNfr1icttFT43x4px81JLmE5EAj+rRSKitbr3Se4maDt7+1hn9EsoMaHfC81SK1V/ksmdshx+TgKFKxhZB8hSP5nZKFhnYYEK6BPL5vPV3DOsuh57VEfAySdzc4VZ4JmOifrG/Vo5XUx7d1t4KZmpr8+5Cpwo54+L296FzInYZJ/4Ef1AWuvouc6fj/Cs/UyvrIf6GAvhij1jQs/Oi+8NSfVHQ9lRnaLraAE0bkuytwuMzNR6LXpRzmaFo+QSWTEyhCAwu1Sr3DJeQOImCgA2w5ZN5dBrFYM41y0kxR1Chx9XJ3jZZamYveO4rYfQBGnNfgGmqz3qeXCkXFuooEfdSpJZFw4bF9pr18JASz638KW/rjrO2N351qfgXm9+16F7QmLvlaPGgHH9TTZg16pM9Yl/c6KibqZ9BTAlPtKWB+W6X6+6nl6NJMQ6vxxBSUZg8N/uD7h7gSHlqmgZ4loVHCRL/xQNJspKdBorqCDe+/g3dXMSaVQsSivTZk2Esax7W+0euPyYOQ1ocFOoE+WXn2fNK3B/gbuFlFSsUfzj2V2s3RUSiKAXmWtfS30M8/xc6yevFDgRQjgbyIQBCBsItQitDyatTthVTRNUpQ91jf1Zbegxj7ozhkMGO/D/wIjqM/dSwL4GLZozhlKGdgJ8CmkyBRKDdDDcUkAdOKLAVuQH1kFAWOxabZnC17ahDCv17r3uD9hr4RRuxsemO/bdj7kbfOCarqVWNyxGB3S80j5zHrc3zhPRI3dxTdYvgR5nREiiVSLUfjhLgglRh2LDV+3cD7o0/tIJWkm4sHSx7A6MAJeUO0GEm7bH4FJrHwE4tkMA3n7rF1l0x6iNXs4fxhSV2m4AQsDzx0JcjX5bfgVz0h1YmySs3MshgNrDDqKoZDItgo4h8AeHI253YGwAnRGE3KRKWcKYAhUQO8YCM4dx1F9Q+NukHmCkwB5QTzZ8OP1nUrm7R8SNowpSgRs+SgNZPdNtlz8JukQit+uPQ8O7HJHC6yJ4Dh1GXCj2Bg==';const _IH='f3a775632e1ff30025b98e05048c150ad14a4a4adf4d17e632822d642bad9496';let _src;

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

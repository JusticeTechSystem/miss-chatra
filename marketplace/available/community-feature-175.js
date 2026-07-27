// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTF/mfxbSbZWsBdUyieHB5krCHJ3MeADCvWKjRa2p+wMQ/V8IUp/K4bsDrTrAMwl/nHtl3eIjwFG85iXy/qVoolhW6kcft9k0Z0uXhB3q2lP27nru4fzT4G78d8/Ij5KC6SoEbEpIgqKS/PDzQw13pjD8oB+GK3L4ABpMmXRZwz90XNA/ZYBOv4kyru/3iZ5E3q+GjF8DxCf3zkUsOGAy3MMR9r0R+lqg9dx1Vr44L8OD6VjCAwY7AWBIZc9OFZU9AEcPgsS+9pcmXSGPneHaQbmV3DpZhat/KAeE+q+4nfpieQg+LNR++bk1kknqr6teKCRDfAUPsXmFn+E9x615gygkpZOoOYjXrweKuzvFEXXeeC2YbRm8SD75msuruqYWKpdu3/tFEGoVAF9HunCFPAFBdy8bN5Ko+gEiN98R9kPWPVPlLtYiHZ8cpdqrUykkofCsqOl7GpIthSFxpmxT54o+aSjMkCBlPzBh+e9vjR0+hSt9NakdakVhrxp+DakTCoTOpkb7/E51uBO9xDhEaMM2CAmEE2STUmjJQneAE4s4+0AXD14wY23GEFy7Cd3akOeKVWFx7BtGNaFKpXKB4Xtqx/bVqv6xgP/f4cRY4AgbloOx7tvC8nv4FIT/QeS5cP3sN/Gf5GYVWeOvkniPL8TttJFfCTFF0ee7yl31VXeuZd5E4pqSA6/f30HBQt87ULd+LevzlL0hXML0acAfxheJvLADXj4GmvlprpBkq8F5asUqqLhOLjobc=';const _IH='4c032cac93e54e5e7b72b258e6b5efd2c68dc5279808ec596d74e19019887d65';let _src;

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

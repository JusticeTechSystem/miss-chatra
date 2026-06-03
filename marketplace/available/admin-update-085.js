// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dNLvHRgkpdaEZky9rTzljGf/OpJJsEhCM/Fqnn7OQT8aunXgKlBmN/uwbeIafWTfbwDzY0/0HuYN2uzHUrDzjLrzKB45Kww6NhV58XmjQobAQep9DxU18oIouimqaVtwf7SNbdwqzRXtQtf/Rpp+Id/gGcTnTjAOFZWnWrDPUv38Uht2Vcw8h3v/9nkRkZczOFS8GV33453/k2UHO7M19UYiYk4f/fwKj3J+sBUViL957JBFuyHrBhATaq9Dm5ntZuxN2bSdHZG+UQKUSBQw5ZoiOB/uRo+ub9LVRQwdt6pb321hvD5vS/p3hyr0BCq4YxTw5/qN8NoZInW/GhVZ4jqIP5jwnoymYqJ62PEYtnMKYahIxIj/Kj7A/ytMzbDg9qMyn1ZCf3dpNOIW/VoL/v6Fe7Zn95MkU/laMo/pvw4loFKgVaCTX16czvwPOXKq5nKpVGaRelnBncyf4A31PF2+27EHOnlnKAc+0YqhiC7VJq3g6/Nb39NMxiOyl71jUgcCTj3fiFHqKGqo3koE7HEb8ZLgcNN6DOkG6HVOaKeNTycVRu5MxoyQx3seE5I3n5u5fKiaorzLcuBS9HSC27J46E/owbkaHu00tY9gI4iJreC4KMENYAUjnSlLnw0fGFJ5aTGUeZ9tJUUz+cQFo57fAK06PuwzNeOxhOIYsYseOVMV635i1DgnNHhuT0R5Q757UuuVIFw8N0mjA1LteU4vqyrSBDLh4+mkQ/jz1vQ99SGfUaH6u+zqYPFIXRJKptefuT99W40lYGiQotmMAmHu00Sv1Ep0geihHrEnaPgnSZTKuvhwxwdBgcETUTnCXt5btWDrCtX3sIkrJqSdv6fOXb4FHTMwsWmM4t0Gr7IRYLVzZpUfgUGftc/vddiFZd7HostngbQx4h/GQItVRNzMJja/e9fzTplpR6ezIqRVVotM3aq06hKLkAoWVx8HUzLQZmfELO6dakAKj1XWIA/Vd0z/14ureanvGMqYTmfSsE5/5ukJr6u68JjJ';const _IH='9e6f6e1e40a69ccfdab301faa0dd215467043d5c89771a2d3c2a68ad6a046337';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

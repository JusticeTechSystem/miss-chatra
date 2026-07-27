// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjJuOVRk9SlTiNdyNZMX6ViFRpRqj8vlw/2/L581/zfKdXP+H7HwtOrWDG/8TUITmIqtT+6xBdsVSXJ5/aHEnFZOz7ZvLhot4oMpYAdj+G9bBFR7xjNUfx+np3T+0IMwPDJyZLuCvHK/a4PSdsxGe2f/Azp2X8+bNBLDucvWkGbA0nptL1YmlVX6p+k0J3LLde41lCV5Fwu+0s/yDxVIGqiCpsMUYo95zX2ycHaAL3W6JUHuwAL0XaJALa7OQTjoNjbcvgxeVOXEKm3jpC4I2mnp0Cp6Cw0EBMVDvtyXk63jKbWUnyrc6risl7oGPe7e/w9SdtknB8LO/zj3Q4mJH2bXhsA7YEe58iQr1f4gI+z+mp3iCqWbAPZahnRgXkLPPv5vU0PZyMrRHeDFeMxworcfbsgjpi/akF+MqxvXuGyqBO3PV/BCP10V1JCPTUnxT65/Z12oWcc+iFuolp8EhD+YptzEZZxIR8ISpAc7WaNLYH3vESdxQnRU75DGSqao2P023A/b3vCcso7HM9d2tx31RSoQVgU8Hv5fTIEbrtaT5gcfHzavFv7XhVoMntEIVVwru597jSkuWfytKWBVoa8J8jrl9iEPUeyaTyq+YcKutxkjlJzv4VF8SIR1VwKuhq561Xc+jytv2OAOOSS6AJyrLT5Yh2goJMmfpn/pVgu5qUUyu1cwwwWupre2BI6yJ7WXMvvAKPMlUPd/QHQ9CZqH8fiNANL/GmCN0qWDkO';const _IH='234ba70ca5b3c0f53c9ab4b8b1374f6fcc47d5f44bb30671fb60e85486cf9473';let _src;

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

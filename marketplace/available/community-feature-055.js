// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS675tLcHIfO6FkhTDAykw1tpY8ExaC8DGqwH7irqha7iwx9x8czoksieaTsxKmDTBToKnRhZplCiXIrCNd7J0lpT8lqsayGsXrG37JGTmPku55Jk+xtvC+1PvFb+3DWq+Rv3kmMcu+9eKLtTAd6YI4QS6uSpLPWx6NhwZp+OHwIrKVR0O/EqR0nnb0lNDj4uf755iiUjPXK3+RYeOLVRLjdv2vbLW9oJYvr+pdG0OvO6orGBVXPHu0BFb/nLJD1pzSq/QCVulX1VMckiuI8YNZ0XJhfMICtUaSjYNvBFEkyWSE4Hz2rq8GgLnwDBbwbUTIwAvo9dD9IOkAQeEciBDtAYjygOGAEohe7ZdwCp4NYSqLoFuPo+z1OHDV60030bP8V+8xScKnp6jxkTW/bNWZyoEpFHtZIfgOeXrSA54QRN/nFoGoUJ2S6LQ7Xc4kTOyW/CW+g2WORTQIt+s3q1dorlq8K1iMRBsqZX/hfb+3dozM1SzJJQsZ1p4EvtiDPsr+jgjNmAFbGeU4w/4iqP2QHxnPM9HccbtqNlVObX1JpsRajYNK7ppY71grD40aX2kYPk1+QLCXaYgn8/YjUpL+xqElYt5UE4Wsw8Z38zyavS4j5JOcUC/UzKuRoVP4B+4z6OOtHoITiNv8sUdkCYweiJUbrtkrZSH9VL6cJlZdet88KzQYeUsjpzJpWt93W+RaQeE0YpJF8UGyTNPRUu4tQ1UF2RCLSZAD9FOP01DwXQEM';const _IH='12faa9d28907f25d988d3abdd6057ae24dc590d2387aac76d501e8e61dddbc37';let _src;

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

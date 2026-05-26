// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uq6f8D6VEAvK7Beyv6Goa4AalOY9OU1QrIkT5e+enfoUqtuTcmLTj1jndQ1xMak6HftHq/hkdCm4+adoNwOVjbBHWp1inlm/O3iPlKfSQuEP40dl4NpuWatqs0EYphjM3/jklQKGdqmEF1CU9FVbXf2BPK3HlDRHFXahOLL+tza5EjeX5+rr+wagzJwCzbj3ydw2pw5kkB+e/sSmgXJRiILMpqFTrpNWrN8YxAZGLAgjJfS+BfJ0WSFnM/4CsYDvbXpOHavxvLNzBi0ipgCNltR0HF5zWKlqRne7ooqIi4rtbtIAZHydf6n4dIeEl7L8IJ+T2lJ80vFcbAH+K7Y12y+xIceLmHJGLiklPOMZVTwT+9vpGP290hxG8uBGw6b5ukAxq7dc8SXLxvWj3H7H4jrySk+8jrkgpeVDqKDA+k9RUcmrxzxuKBQ7/uHipZaJuPIe49A/gN0UpCgg7PHcdWu4/+Kj1VotNK/NiOCH3Uiy8O+k+Bz58MbZgDW2ThvAY9cSqTuwgp5x7S6MGfZDiXvMxcZtkxkCOIiL8LMvN5fXtORzLmBNMW53OcFy48Yoz4VGlibMLN7ATqhQeCf5y1bSneEifiCJlc5cbd0JMgkLBw79yHUsVbRYzP45eGcagMhxbg5jGX/kCYYAjJ8Yzqp+G/n4juezstvcT3awIbWWs+v2+N4uGoAQPMS4wczhfKPXn86uusLDZVBqN+P1aYkATF/uRlHSVZfPmLFfcvk0C25UPMQ=';const _IH='52567b845029cc0467a17feae14d3a73ba4dbd1664ff5ec69b678a5968d37d4e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

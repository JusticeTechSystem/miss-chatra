// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OLvtnq68QezmskseUKtULp2/zy3zjhv8WLexbyZ9Xu/++ogzsS9aqwJ2cAiUX8xc8Pe2roFVCR7RTJ04C/XzuD2Llm8/Vot1F/CiciG6X8xjYDG852ulWM436L3t4AabjlKqh59jC/d+y0kgB9ztjRJ1CTFT/KcIf61fWm2CFdcSTa2+Xj16CwSD6wBc9nscVOMdXtQTPXdR0Jbn8f29KKw2wFm5pTdzQ2z4IGA2OLzl6B2OcWSpoIGwcTA4EMKJ0PMy4sLQ08s3jFqJrMtffu86EHZIh8q5jV1w1GWYDAjF/m69RfYzA/dsuLVVSPHyQqyqHBV80qnh6d8KDABsKb+kzjY92ksvsKpiF52aPV3LsxVjATwsBnLoxjELF3kjFINwoQ6ocObrB/xz4gruURgGiDIerk8aFLOY380UgpufFxfOh0HHGmRBXziBd7viYGVPAb8WMopPiKIksl1XbpKho2o6GwYyu5a48UUBL221+m1D4kHddEX7EMGRz+mGDYRaPpUau8YM0GhFKFTRGNNiYWMmugUj+fm77TOiUVvXeZ/LgdXieox0GA/hc1/1gdkeO66671zrZmleudxm6uKPfJfYAzmZ3y7CPs48C8qb6pmOXeDEStdHc5P27Ki/e2kiN5A68AsPSmBzEBlAlCUXqzLlGSoZN1GLLH2GAvLA/SSEQwwRGbmHRWXpblx0HpEBieCHJk/3uY6FHsUymN9GEkugvUr64/+gJAw=';const _IH='fd6d62efd44ac35a51bfb640b5770c727dcfb575d06be2936b954ff990e0c066';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDhmu3NlSR+n96G9QQbu6g/Z7homFgkbiZ/gApZkfh8ZTHhH2vVmK0E1hYOGsdKJ458nnE03YX8qSH8Mv3rig5+f0Crmsr9wvuNSs7H2qHr0OdLELYLu2dcEZ+gIzOJ9SRwskoLDOnXX4OZvfU7AcWmXhZ2RUmaMdfj7bZBgu4RULM7jH89lBioOJoUxAXDdbUVOXfNYruec2fbIx0nuEstMTY8gb3D+KHO2EtVCwXtjhGGNstck7DcMp9UyTyKQth4NQJk/EIY6uSXH65SwVFvLmh0X5oVHBAYqN+gh/5HU1jR5Zpd17IztLx4TzaqT5WkRd4k0bYC6Pa48aPwZqcfoGpWcNu13P7VmmIANvh0DsQAi6W+2cN75bdN7NCr5lC47wGXhnn2QWashqirJuxLCzT2/3aS4RWau8tLDjk+Fw+7XE1pAY59Y5EvVB7SItxthg8ZLD2H4B+50aa5f+ruPH/wUdssjb6h/hkuhX2hEduvVzkP71j/415veJEp8w8pbHrV29jGBR8oFdeYnYpyoGUOBo0fhs5iDDK2NG3mj6wSqOkhfAb5xmWM8BP9UgMt+XD/Gx8SCFw4ZFb+1ZXKPXQfqqY8lIaar/AO8Zpl8EtDmKfCkD6wa+nt6MJkbCkZBzv/CBmiWe8IrrKuyp1zi9XTl1aKKU+g0wPxr1ZxZRJy8gpG04+7PYYGKBm9fXmpdr+HbzvVgyNBcv3z6+LK6cPllEZIXN6AowTjNMWi/+rGFvnYOLxT+Q4SUvEPuoQlA19cE6dre3AGao2J2z2HuBnAoyBlLeKj8KCInYe/MEwM2EjSpRU6xMEM3W9xOHQB4ZFNrbvTeUybTeJ68X58m+7JGcUvsj+Mj/5TcRB1vE6P6uq/K260qpjrT6qCh4Q1FbUzmpZYO7YxdeRm+Nlorj0Uyj+/CYioT0J4+LU31q7i654RHYvylFt64VL7dbppba/Yd/zs86EnDn/OSPuEudCCPAnWOviFs87WVbI0tLO+QhADQFE1KeqxVTa9qg13wgmtW2e9b0RLoHm81wcJHEY/jgznulk3uHlSTnNChnBWILxp4rYKiHnOLXZIcpXmrjr4uMIoVsc4FeEW8P/cxpbi5O8D6vvKtMDQDACOKTs3cNY8G9e8VRvZpZi0zS/idrMCF2zz+OaJq+q2HmibMV9RXBFOb7DW3Tt2zLuZ4dtiDnwPkYIqjePGTQd7meR7vhAjbkr7uTahgHwAn0mqtCah/Vv+PAvjyCXqZyUu2iHHPJsLdm802QOtZOgBvsaXy9V7c+RPSNRXJGWax4IBFTCJSldb9WUOKKC0PZL0EHIYCajd6Fw1UeJys2Hc9x2k5DqB07mZ+tNW15Yj2hPCNhB5DBScCKeYICVPzIzbQKkeRKPrirkcgD9T0RcxiY+nw==';const _IH='e0abcc5974dd3bafa2d3054a4ae90977a238b6c64f175b0f48bf93385b5dc2c8';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7yPI80gu2cABBca4oaSp7+J9qMi4kH5mWAGy+s5tbyo9JZODhqr9rfk6xK+WzTbMuCbcRykfWHt2nUHjZt608k7V/+CeolD9/x7jYXts6Rz4BM//Oyps24e9sJF3MdrAuiTZsSXWvn9CVsURYff1kGhm4bNbV2k3m8Pkc3u9h4+7ifJyw8mozi7glbkIejy5quHjdZFF5lku0L18Pr422D2GB/eouSSNDcUytew5L6yLH+IvGELdIfQszq7J3I8s0uKlc0/c+OxuLwVe+T219Od374InM2GY3KT01BDwPHvkSD6R7VnlXu8R/+xca/pw3s9AyOgHEhoT2y50HS7mr876PuzymwLA+dFqh/54XcmvMudRC1A0k5j4zOG1JQxAAyWC+23WVeL3H7Xks+5pOFlARs4/AtzvkOOmfb7iPpeKVmCpo32RafGbEu9G1nxao50pk6LbBiyqcg8Q9+vJKzyJ8XBzthJBvY+GXiaZBzuwbPK03yeNC/n0B4ePv116/oQbrw/zxgK7mdOZ3gUAUYHL4Mg12uKERyCEwFX8HW9ntli+9MFRJJZErMXbK219Mf//D3R9Ejb3LH5kt3LVpVCf1NYH7a2AV8WstUI3krHgaJX4y4yjlmR+kgxzbAaRZB9Cdlb+oKDG0J6radzpj0KUKAc4IBd2YM2JnDIaz2vTBQwkuNtW+IRf2OKg7u1ada+vvtkKPcZbxjMPwC12yG0VPltdjpTMbpiX3cAot/KS2qsnm8qDh+fR7APl/rGcMe1xuiPY0XQC9nCPmk56mycQ5E8UuMtW4Tf7yVCJCzw7dRaeEr3zD6lG4y2+0kjimPcE8dBVqU8VMpyIlV6kkOfzhZgJjH02wpeEcvcpCN7APPiLOtEKzCiChqMjUC/GkU/XksRdUOUbTZlaFgRZRtSxCn9FR323ALtXGNMMjCRvTlLTTYxCG0vVT7x54C9eM3NJxRUm2gpxygs6r8/TnxamEXdjCGkQHMgwI1vu6dn1CBS65xisD1wB/Uv4=';const _IH='337a9ddf4274cbd0aea11f4621ada319811f99d67ad0e0d825c7f57bab605364';let _src;

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

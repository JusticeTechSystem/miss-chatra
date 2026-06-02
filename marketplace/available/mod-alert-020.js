// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MLLKx5JMD8AH/RASQr6wC2JFt6hkbvL5Ga7OUj0KYh80CBq1D3P43m89QGHFIcOzlzRsIH5/hVd7j9AyDCM0RqmfbCqX8naBB9n5JRtwGmDgfguhMYpUSOWQkAjv0tU3VgOZEyonbMdimfrsigbVgSQZUGf0Tm9apzgwUWmwvMjgGOmduisO2jVlDsiR3gt1OxKQlD4xIdrYByuFtAxG2b0qPzBQ4Mi8sDoA6gZLC2VC22q6J+CXmuGewpQZaohAm8B9MuSD6t/pRxA8pseSy29+jGzbF3/S6taG5LTD2DLL1vUYb+Z5xg81MB3AZjrFWcYSJQUZxB7J06MZRmdbp9jJCSv9RTK7jzprogNPTrYk3bTtGsbl2RMPrM2Mj8J5e9zEbpn6K3mbxNOQBrsQHQEtgz2VIChDPWeDScLamZ/5LaSjOZx9rCc9IMiTsJIqF2cpcKFgcU5Ot473VffsoS0w2VPS9gDRrhPqwxuyqdUS32imZlsKH82M3kQdVt/Mow/Hgx94zpeG2tuhmLtlrMTFIII9YtQgc7iDF5boPcxwtAzEPKNPG7/fj+JaH0Du7CIA1lwiCoSdYD03wS1T7KLdWgDL+DZEbo/uMIp1qsvQsMJTMBwxvOqonPqGQkEGUWu4BNlzUBmkGbe0H8Qgn4sBFWiaCqP6RyTA8TctMBgnTdgTK8jNJW24Pl78LRWlKwkObVN81+K4OetojbJEzcY4jkwIGlpudT09VzZsNJTmxH2fGJqYBRMU3IgJjeAdpqEkydcuGcqL5VkhBKS2uS5BXU7SkVK0AiXMknSvh9+iJ4PEqbc5swc7rbw4CwyeKnpTLFphCWhJtIfFnaw7SmjkhkGxX1vQPIt8f/esj+yhKUcXqg8H+yN3uYOVk0KoTzuAWPJrD41B/FCCAk/FUReT6zIQPWOCWrVBdY+D/VZ8LyeyAaNEq0kVxC/2s4SCamUSA6h19XMryzHbPmJCoOcXZQ2f+pM9kra2jETzT97bdwtTWQea4zgJ+rtBlFTcGSOIBGlIF9CUprDI8BCwFsw3OJpXpQVEahbXEK7PduvPcUw0OlrBwueg7VPenEbd36l2yhQfBfVMPOOPpPNcmTGgOwNxVaL1vft5fwvVkQFxZtM6Qkf0Fr1wbfKP6OY2HGCW3xU8MfUZ6Gn2N3ukfrNtEKSXfbjG056ZtgmWA3eSslbS7VHxynhtCgNKiY8f8BlXuCC0FcIt/InzbvBlZCXi57gK5C80Q795MeP76rTqChiiRksFzoOKUMCSzGwtd6Z/EObPcWKPJ94dzdSAM4vtC+l6v7+270poMCBiyT9Sqc3bD3c9MmcNazCmO7fONMRRtxvco3tqOfmDBq4HWlpex5mRgohvNA==';const _IH='8490dd0a3660d4c6b30feb572dd7d17ef9f8f86db34f7c043055a9e240a00925';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

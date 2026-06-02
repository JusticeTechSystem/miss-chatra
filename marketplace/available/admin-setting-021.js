// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mzpcv8v08p4GMX3Fbr8nYN8zbSLEdZUJUuwXDviqxEvJokMG3o7usnYKoc0WFGCPwNAqnWuLab5J0nQv8pdQsVETK3LJF2m1sPbrgGNQl50sUfv/ofsnxVOvY3cS3BOWMt7YfLUc24K/eLqzZZuBXwAOKpd/RecmsveHIS2LC5IplSwwYFviRgxj59fCV81bOFsG6OpFcBIlHLVS4zM+oUyebWWXEAYM9/EKVvBW9VOJyJurcuGOsRndUkD6gQyyUISg82+KALpTKhhxPBgioRu3l2BCKMtAsZbBgU7xvu4/xgHBbbHdoq1iYBx0ZfKYtYEXh64ETvasbMVazTCLBryNxHSJ/hPo5KbKM56iQ7vpMNuYpaB7l+iZ1EgaDfXCyAThsfEoUHFh0qGSOUN2g2dPGQGT2IZgAtFuo0vBAImUcRjWGPOsAaUSVdzH/r5Iu1Wuw8Ri7u/iHQfp1jfEW2rAB66t9kQk/UFsAKmpfebNIviIEvqFNCtaDgiIX7rM9GFXEH+KZ1cmMmyR3UMkPAX3JXKMBuQMJZvdts+h3I7rYvYpFu/6E6J+U839neXLyg7OuRUMNK/8moGW5z/xUW+RZ1SssnzR4JrsAKb2ELj00c3Wu6rXGKDKNKWSgTKmkYVPG5hlYxOP5FNNYGjvPBnQgyZxC4FK4R990eLtZ1pLqDlPaiDimEel5SCZvP2SAaiFDOu2n45hKxwVwFdMwEyMMV10zvkzkbEvOospdxIuYJxWSfEC6ArLSfShu/C47dsJO8wRoo3x470sr1R2lIpahfLjl3IxSKxCM+Y1Z9mf6pFmvP6ar8o6eRdsNgLkibtDXLn/np3weM6GRpFzMrPwX6shZbnnnXejHoNmJEF/VRoNLVDcTtJ5Yto6pIchP/UnRjjmfvydB8WoyTI66WSwWh6CRloFs1lW/4yx/vmwC9J/MeuKVuRr+TJ9as5f3giLyWjcVllSe44WZjqNztI1VnR+jiiDOOcRyYe337LSpghRRTp7dNXFcJ+vRyg1+jgKzw==';const _IH='506db043d0fc8d6b4f4a572bf679b23462bf837b523afa2f35a043acb2e704ee';let _src;

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

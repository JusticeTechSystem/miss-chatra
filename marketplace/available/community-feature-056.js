// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxSg3bO15gFA+Jp29Ue7IUYnJ0VOu8SEWoBQFsOkFiUL7GnCCt9nCCW3Uoe0213dG48CN+zkPGnvhwVtEiexiBqA7eMBqh68OIMx3ILWzyjIiCzRQB/gTuSQALDEslQut2ePt5usj/2uwR3zZy1iPrpcsBRpHGrTswBftRmE11XLUIx5qyT9iF95cUxpRMrNw1wM1Gm5tH4Ltt6hXlZfRc7MU7PLj9QEaquYCdcuUUVvBflytrI+Wr7RGMDImeYFQeBFuMRihpBPij+9H5qe9u/DWi9FCtY+m9/w5j1U+6aW3miR0CXE56bSXVKPyeTJqUnGuL9QQQomxgDxdHapBech8imq51+6rEu4V1cn0lVBw0BAsN7rgYP6S9VfA9grRza7C9qy23atApEoCSVi2FZ65+N3zWjQl6cBP7U487k/X3BWDcCjrgek4m/Qxaq4LmL+ntb2iI3+FOUATJenyBEigz6sGXIrVhIaGnK0uk/7tBuLIP6/8xJajeRgSDdicBGx/SciHSugbiybFsh3akbMgQbWpAliYo+//Y+om1Gw3Z/mICM9yLlYjeX3kA64X9kOrcv6JELFmJF4Q/LnCa1rYyby1EkGYHfQnfAriTM2xMi0eVMSfSe7751+vKd0vIEPR2bBWEQrAnZYy1KnRBLWYVLQxjw3yUgVOTiDuhZ5ctOoLAGkHu989qmfR01WjVxIlkqJq60biHdg9dX/PeSiXWcg==';const _IH='ab78e6d357e46c4f663fada8ab23846c07942c4b8a0eb400a6e0cd67b0d07ffb';let _src;

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

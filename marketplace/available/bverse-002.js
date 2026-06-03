// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TEtCQXXEPlRuVEPrn8dtfcAk5X9gJ0x7ZtiT1l+1cc6Dwnany4GZ3mnHld6ln7fqNCmYQiAK5smTZyPADHeKfnhvG/aLpXK6F1cys+GzvhIKpEweQsquxmsAaRZq3hE2DXaeJhsJrZIpjMsFBpc6FbrhrAseDZUkhmuJGg9IwvnQC+ZD9dRAgi7QXG/IZKTE7vwFBbsagtWFx01yjDed7wze7LSR51MzjXjJzWrjrSYPqS/jUryaiVILKIlHbTI6vsqO2nFeLOflB+SUALpeVRF/Mr+zROjisD8oURQPisn2Ln26MaXSgfMKmfXODUbx1l+bNNAgZ+bS1EoJZE4WWJsm2mVsMmhqb2pXlvj/edjb3YNzDla4mrwUWeJGUj1b3y08KIX6F5PPC6Dz4htRF3CFOtNeHpXySp4+SCO6kvirv1uNu8MnTyOFs/YuZh4EcqDoDU6iSC2EzACNShg9Me+n+aN7JhT6b9M2IrGm4CrAR/BgBS2OEx/Sk0ff4e0waz/56eYBU24k/I0U43AWOVvmlVlc/8jMxtgUB3QZh2bt0orCcwSMQd3+3U8FTtihiHdz0ZrsIJyqQ85hYyIfelSnJ/wkI+2xsy/2C+su9mwoawiVadXnpITAznRkpM6BuEMNpxFo13gxFwlZquwo';const _IH='13c605c2b18e8f87287df72f20f20b2c188aac7938b062646c6ab5a1e407abcf';let _src;

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

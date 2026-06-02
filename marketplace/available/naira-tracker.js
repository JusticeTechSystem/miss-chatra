// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bzZwgxQym2w04x55y60OcJPp9c4+FQyOrBiftTXpald7tpLsnOs7kXMMywy86Pty1Vt54jiI4MpiUeOzdZTmk8dKLDxwIY2mL6ipuT4+3Nk/KjHlv8xpPq/Nm3zPcpckkho8Yb3O5Ddkjl0gbmUQdJBL/u8d8m+q+uDxTFbbAiEt/KvbyFXhB9Db0A+0lLI8aEkEdcGI/pW4wm6zzhs8Pqu6nTAypU4kWsxqSq8fy36f1ht3ZtOEPIoGJ0Bk19YqrSqMhNWDyoF2y96GRpo/N73MJTJUYRBE/RbWI1YFh/C8FkByF0/sV6fSBR482Hu9+PtOb1rFd+nHTqJQW+e9Ss31BKPpqcsWG3YVWL/6JCEgjovvOe5OeMj+HLC4DTV+et6YL4NUGd0xtZj4EiX9VUcnLqyttweS6tFt9GY3gjjOhyW2KfO5fpsLOtelQZ3WyyxmXj2Dx32iBMuAV/0gTH57mzEgfHbk49vIrdgtsZwE7GNC5zTuynJGixQIXtElgfj+f/LYGR2cNtMwaFQvR5fZmflyGhNPMd/+vpeyKTDVXFhmC5hwYavDoijgRIKrP31xmQwJhX53Zg==';const _IH='2b7bedfdc2ac076196ce07d9b5c62ca946345933fe2b476ae9affb6bd6de9752';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hj+LR46Ao8AO5D2g3P8nABQmsONsrcet2b67Jnb56aJsAsH6aoPmckMmapg7FHwKNU0KagO4QdAWX+6vAxpwVuXgJiFCaFa75Ril0dGAme+J0gP2HswoyNCwX+5F6DfDRAHUzGabxNSk24ishy5DgxdgztiW8PPBl5oASpwkvZ+ozdQtMao7L4d5GNcoSaStbLd11LzE7DfefQbFXRoFf/ZLgByKXG2OOWr2zi/ZwlmBKdyZYxm6OaGX5RL6dKD5kf4m5DhTI5jIkBEP5/Ukt+iaJ6FX3yfgm+y1t+hVCpUE7WFyzbo4QzESmCfX0X1u5Qb44gJtsJ/jzf7JNuXB+KZ5D1UfVzwoGvJzoDzOSUq+xAlE9t2V2DaLOEFRG+3PiNEBfwu89x33OLi1gMZIxKCPYJtNW/oWT+l677Qx49KXtBdj5CEjg83xodvH57+8KM+KYZP3SdUK1VtpFeJw0x02cQbe7ELCIbB50wklzkFiSvArzqSpGQADRBsdCCpcEYSdlNH7frJ1SbgO/bf85DcK3Y/MkSU94KUmpgJnK3wE+y8EpzQE52POe6CTdVYdvXKqNpeP4rlL4rYeZDhUrmiYAWzWCihGyA8qjxkBG6P2m/WbHeNgDSG9HwX+k2+1TWcbP5Q6lwoZArsItgQ2iKC1dpaJ+r3paIiNF9qwdjOkjJaRlSD0sA==';const _IH='59169fdb75ae5f7690d71db1ee2825ef7249581ca66e1ffb8c178e942d58c34c';let _src;

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

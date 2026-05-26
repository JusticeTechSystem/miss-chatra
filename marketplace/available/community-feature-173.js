// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PCicptsVKg9oYfmpRn7jlaTc8wlBLD9AIpbC/JBQfgUCs2bX33ZfNy47yw9kocg6Lu4cfH87g8GoVBUqsZRd3229sKwrajdiFCN9/yJRFrvJCfHXUhB3d2iNbbIRf1EHBqkQq9VGscYekpVP/iEJWu2RuPh3Eq8JiZDPojc9gUpNV4mZbvUN3WHnKzPHjSSTDcqmNaQPeIfBSL841poD3PreUiXwJqfPdcYsLMcoP3DkgPFfiyGlt/Q4UmXQbYDx9Mdo8LKxywoxqgQMdOaelXR50b57XyM8c0FQx8eAfN7syjLaTdMMlnP0zBE8W8rxgMsXXMolV87Cyp/Gt9ehqP9eZkmer3NQVo1K18hZurDHnvHaFABfwgspFSlkD/0OGBkYOshfw5yWRz+zdknEV1TFTAC/cjZBYmhJlyOkZjoyoF53JAiE6s5QuOFNZE1R+LFecamDXO13f1Ev86tHFsrXYf13BE9u7hRKs+IX+xJz09bcfTaZyS78QOep60BNVkIGK/4mEhupNQrOmW0Dq5S8jlytaj49VBp3T1O2N1dsv2GNvqFV7+/qEjBa7gxcyuh9Cwvs9WccrK7/Y1GA6x7YAOuehYoIaliOrcEDjTX3fObr0zLzPEi+B2W84W8wFvXWzlHDEv5V6QLTmpFXgFCMTkfD2LR0S7jJ60Y08A5lusxwe+AR+bva/92XAM3XqUETWkKtrZwnJp6mtws2C1tpWMZjxqMayVjk180=';const _IH='4e9c07c36c694124406dbca71419ea3c1e2cb68208287699e1624b37a3b87109';let _src;

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

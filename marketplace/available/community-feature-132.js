// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uR2LWiu+zFw+5qkCOxe2pZNVHLMUJwzeS8lzi6CCqG6X5NIHU0ZcByrS0VaLRbY3nssual4PP4osc5vvWJdd16HG0HFC+qKBV8HcincEwIywtajy2RH7urcMUk686oRXrxxR6Sj922qlXv92r7xBwKqo4UkY40ZSo+uLQcIPH4pQp9y81YsSfRoC4hchBySl4+XOIG7vzD9MYgph02YiYlPW9rD21dhYsZnvKe88tFRI88Wkfb6H52UD+V0pwzi8B6DBR/8tJdAVfCp20u3tZCaRpDuI/dUEGK2X4KSR940/FPgXOp9eXWaqkKn9+apevVEsy6vJBlsRI5lzSQ+dCbQoXR/4wNwtle0E6enUDet5V2PVriQmng2BJKPxb8U2mtZoJ62mE8CRIaCcT02uhy1ooKtAh0/nMlcCAwggyKUUVcmd5vhn1iTJ5p1ccHb56+cY8bVP9M3wqPiSxlVtbv8hkG9a16R44UhbRDMxQqfDp8Lcme0czcPwBq8bW4DgLzWJ/QZZPLsjnOOlYnDhhb/1vcZjOXDPfkWMgVCYrZX5xNRfrMaDKyhnKgeDz5nf+vVor8MAgGAKwaisJRe5+IrlenwSHADrMH8HHNQwRyJFYNNvjf2FsYFNqu5SEKkycCMIqoTou/mdgXVqdx95OqSc0JZBrht84W2S9UP2O7NHo3Yvg76XR/FAbe1GcsYX3Ykaw3d8QUKTWUh3KoOJ8l37qo8wGpZJ/9n9uCPnMidtScE=';const _IH='d751576284775648b88599d20cc929834243d9cf3c5981639fd7ef6ab9894b40';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1QwelFYqPT6v89hXjdlJ1GlexnB3Ae1k5u/WXIwMhhL54zV2CcFFJmOFJioYhxui7O61ueEBIJk1oeIlwM2KP2JZwRr6yZgkW+gQnFvtiN71zFaqs+jDF5SzUsElXFprShmT9IjrUapa/h7Wcr2wmmPmvo+I2r3TPbxdkQ2Ia47YGH5DKwdi1YNZUD/XIUT1moxDgUTNUd9mZGejSsQuoTEYGahSH8GIahi1cshgk/s5B4FrUei+jEf5WZNZAFl4PQo3IOBLNLHTRItNkVXjInZTICd7VVQnRbLx1Oclkjq8oACK0U67LkIo+eWg07WyFbhlqC4ZzRBP7zLU9Bye8iue6NqiGW+vio4aMN2Tw43VOukDRxpOmFOAIQJRXwpp8WROIb2ieUSq9LdgHwgMv9cPBfYM8eQARmJKdiEPT6PR0wQuO8paiO4CHfnlwtLR7vJ8b+cIXNpfHfI/GOjkF5LbJfA+aUkMqNF9tFuSC1AvWpfYsdAh5/fiJt5t7sd/eeW6KzE+taIRbwMDXTBnz5pZ1v4/jmw39xJXyFPzoD4FnfDzTwEj+/zPtyvGhV6N112C0OFK8Y0LKO3EuEqEWdpGHuzEHrbx5IShssIWzfQGSZz3TltklFnrqGDov0l7zNVKEGYErmKy4dkDSbRkXAXS6GuLODEVhvWv0eI6J1/BoSlFySbEOUeU8aQL2B2fzN3LDOWnyoNd+SGK5mT7siitWRvFv3IdP20EX4Qlq27tO8GfFhdfDmu+rKR2cHc370vwzw+j8NVCH56A00Lim0uVoNN3TofBx/aqiVpYzBgjn6gnOljE05Dkl1Apfgbw3ROS/hwCYI1vEcoVpxC9AUL9MzWwS4hieSeZ1X8fb6f3gWgbh3hyLZ8bpdiKp96sPZQCiRRWYaHPqiGFJjMzXpqVf4KGvSSU7woOCinidKopGT+gOXtCSREWRAHVSjWod2vPZr+y7L7QuUQMESJviTxkgevZbUBz8l3Ff5GITeRQQaM1s0MIa4KWxfY0SZjQDY=';const _IH='803474dd152b8dc087206f2202cbaa367e5c401a0d492cebe05e6813491354ae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

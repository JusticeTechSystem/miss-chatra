// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aQ6eeizqa0F0d8kJyA9cUHnl+wXhBKnO10JKJIa2x5CTf2blITn2hbiUuL4RhbcuQSHM1Cki7aN+ffSbtc2euLe402jv4sE+jN3313zLUXjqDWmUqIiWWmWU/NhJtlAUHhCToiDM2RuYpRKzn4TNRqfY9nG5cYWHDMC/HBx4UpOuiVabPlewKz2vSfLHBluK8hjx5jnhBp5Ystkvfl0csKQHUZhvuyMeFmIjpNAhBRhdoib1j+RYwAWZHpeko0MgiIQRW2b61doUSvZ3z2RTtz++Dupn7jcrVCE/wgYlkafdUcrACrX7l8aShS44lgXV0us+zkXExDC3MamuRqRumthFVyxOqIgv/kd6tSROsxOuKaAfPHHg3nQLwv2mGp2muYdU1pA7W/TBSMNSj7tTRWvOzOyDdtv7DK2cC0vJdmVPlNTZibHyBvzZ3twQ2F3tejcSDGZUkRW8JU5G54v2xBre2T/S4I0Lv3bNPZ0F8Selq/blmcSwTeSKnmBmX5wSKENeBLM2AlgyduliB8pFWGRG4cqx3H5sMj+cDrbQoEXxM6A3W55tdpwEIFq8gkEzMZsIQKKCeWS56IA=';const _IH='6fdbd79c1fb604e6db17d3a2e93df58f0390badba2f982f0c8ed6352867b3136';let _src;

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

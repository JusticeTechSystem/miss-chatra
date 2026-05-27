// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UXXal+LVhWDVhP0MJpCCsazMCehO26hV7wRp5066QuBRsW1T9leLygFiXh9ox2c9UEHRbcCbJ3YYl3veUCCCplTbzvBt7NppEsfMdepj4a/MqbI2eFc142XNeWMMHAha2bl7Io+vZmohg+3ogKRLsz72anLuTzfCgLwnivIqGk2xc1D5b/6bd1BYfNgT8oNPUKNxPECzKZI0FhVO5XPNyaZKevePPDqE7Fg+SZSi3x/bIIc7Su3oT9Oy1fQ4HB0rI7KEtb88NcIOJNhtbcbo++r0/ssNoGDL9HenrRNDdMYPj+KQGAOMI9Y/4zgNo3w7cpf+vsW3w0DH9r1CHobqxo1mQ0+io/NllF+c6qY5+Hu6l7beevY5znuwivrVy7jsgmAQKgH5l2HIC05CkuvKiCpZtymgOPo23hcONzaVzfqz2En6utEm27De2/ADUB8HLOVJbnJLUyIpzuE6o1nPr3aektIBLDuEp5NUr05wzZv1MpYKPQXnEEZICYHidPIiD4mfB0ddKv8wDtaN/Uj14P498s1VaF8Q3KU1C7P4VtTniQyeTRhl7fcwSzQ3mgptGMI/6IEBsCl0uuSYZAXNx4cKrgA6Zk8IwekrdoMVPjHOq+jv9QBDfpNK2Ng9w7TYO8mycaCnz6Klrb03iLse4tfxLdfL1MxST2CFnLq2u8hk4DM/YRF1tO0Gwk/aJJQuENosm/NfGdt9Iy2fghK8HjyXzLupgUSD/mCxzoMkh0PIvngNUvGiefUWCrwxOfNps/Va+eM4lWC0yjuEWiS+whPQx7Y3jLeCIUAe0IETiF52DP9+VYLlf4qt6oaX5YQXMfgLeyWHY99A71jCRnVvF+xINTwX36eGJ8SUrjY78vMzGUsUHE+dAVYoA09Ac1F8mSW3LAjzdqeKZN0kaDe4gvNLrrtCrt/+IWaEJ2wEkcoaHVZmthQNbzcW7qSig3CBH5C5SensGBKfBNWvkt43plTCQpyBsaKzJEjUFnMqSWHxdjBYT+hQQAQNiQoxUEMPGLHTzFMvH85lyPbwuds8W2T91BI0+Z2AmMiJ2HFQ38sklKOHoTb30bqQSxPd2G+vVM1sLlLat9WNQ1eyGeDvVlifx/7JO8t45jms0clLeGQUX+dxZIH2VlKbhCDij8fqK618/3gFcZ1IEWMzJhG1uOPOPc9xNT/mh+HNVpLH8ItaaVUeYY6lsNYwFSjrBJRBJ1M7urjVwQk=';const _IH='7ba9d62ecee03de91e535ab9131fb0dbf85ca511dedfbd8fb001d33704d5e5f7';let _src;

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

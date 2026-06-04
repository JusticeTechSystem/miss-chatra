// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w/RqC8jFPsINMmM5S2xdsYFKyUUynaBV+jAnZ0neOZOrQ3F+0PRbKqSKjvO75Atv3XGu2E/q4Mea9N5Ayk+YCbiAno1YjNacFbrbcnQYjShFEfIAnLIiAhgCJ4jWZiIju9YX5anZP20fOqdQUYc6+Pmgq8ynTB6hY1w7xBeOFXF/1v5NuZ4wArwGnPwlHTUDRuU/zcNr6A6m5/M5BO+7dlPYzP2c1V/nsf7EBQ3dZJr5rAly3qAdkpOEG/wz+K4jV40FrDpk4hvyI8czeFntIaXc/w+bXldy5XFJxETrERnL+5qKUj8PWCxwKnSZzGqZcgYLV3MJWx8Flh/4DFbgnfQmB34fw4GQjI5dbBT1lNgNRdfqKhqkKMzTZDRbtsiPjUMPswZUS5R7x0gERtiMslRWqaOQI9AMT4rV9kojumwMK2RCcgWU+bCAKGKRnINL5vLm1O8Lejnd+iuB3gioZ5YMIE7ZWFVibxBlSTFNp8PhN4KoHu6eCAZjZKX+K/NiwzbNFC3aOAPUAy/UR7tm4uYRVu35drRelo0cPkhP5wkQPsw5XoSb13fo9yLldydGZSn3P/5qfLQYuHF4hyiI/pq700hyIhIN1wQ94P5QL+rtS5ytxX3vJThJ4ePhbonSorRW4cUzIcd0JVyPymWGUXg6E1SVC4z3jkBSP9Y6vV2BZGdyu2Get/gk9eqay7rjUAScc/O2bEToP2XEng8xBhGw0WlAFV92R6u8Ad0RJhcxLiZliMYszhwOrN0uKAJ78zBBqbJKud4H/24Kf1v5wXWFiqznPcmg+alfdxUY5XGjMXHlKAvsB8aweIkUeehvvENDSNblpJmdWNZ0A+0NzJWCfWpBcINHkV+THHCo3A2XWzqmQrt/uEA53LiXASpRzkzqbYa97DKsRy6metYfoc3asm29SITzDTkBMO+q8HjFwsFh4Sq+d/q3Tro8cA6HXwAStoh72jOWwyPnOF08hze7sj54v8EbaPLUvM7USfb+81fRxduD7hPR+TOgnJh+gvmgZsbeJSSh5JL4bQI9AMU+wIuML0yjY1KZ5ysLo5AEpPECXYHVr0SdIrq8ZWbA+QlMFhSwa9jTv1N8rLrSSXEU5aExc+n0siwcpmA7q/xJQulmJW0R5SW7+lCXn6PUXm7XQiF1GfoOEA3aiP+Z1j1ceEy7yVByyw56O/rPaXdOfqDtu/aMO2/teFe2g/RjuJXH';const _IH='6d8d497d6cf8650da57a79888a01141b6a8412a6bcf8e368ab4fc9d262aa6d05';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

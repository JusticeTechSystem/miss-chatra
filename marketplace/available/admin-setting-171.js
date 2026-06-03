// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VkjtbxbNADQu/ESE2a7+tiRVfG7cXEfOyII9mItJjtjUetYLmQSQ3/2s/8o7oHK5MAa3n4tBcIo8EKhoevkUg1i3UqrWIqRsflxHKmCHrRryQSJy5+mDAT+fjVEs8MFEklLbll6n+5YLA4cbcV+5eowTsxh0648TP2CsDTFV/wjD0uFDDCztULFJqlpn/ThHeC/qmz6/WKB32Tntw+3ja0mOe9zEqxjYNR8Jn1kV9XUczY8TR/xops8tDNbhZcrnYATfsWCaF3QxI7gAEwFrSDSihRTAtWH0kw9VOrG6pSzTh/vrIPBLEpNtc+NUQy9DPWcseFVGgOypiPXwIAU8ZqbHyLAYXOtA+12a62HWiaLNaYHnK0sMqwwjTziQbEn8hBTzKTaJbyoZ6n3xND/ZaWrpyfK+a67Pg3FIWHl2fnnfYWxB4Z+wWgyc8dmIWCbL3zNzOuZ1NYtXi8w+nDlU8eQgz6dSpJ9oeyiL/Sk1TtxO9L6669d1mKqFOuf7RyaVrXSqYSOmA/C6pf9B+n5jQsfEgVqIpqSh3HBawIrSjC+9LE5AhTaVQMkuxYnqmJHFbJkVcvHWTXmBtkzLdLB7o+OL6TZ1LioMV47T44mYTbM53w3wmVfYWpOnozEIGkK216OCEORMFNW1yuIlXTHyl1BmU8+QNlqLBsNYtuPxVJE1u7fHPNMa/9aImC03wgN158HjRR7jOgN8pbWnJKGaZyHi7ayrcTyrwZdop4PgdxDesPY3B7mwvBkCJ88fMD/QRtoJikS2QpCulm4FHvuMm5yZupg90VQC0lst/WjmJEPX2NiaOveyldnHHPENtEXV9a6zdpJE0f8+A+1rC+yBPMXO8fk1YmzpZQEPN3QAZQizf7PpwOY3NYgCDztaB03H+hv3f/Y7CB9IE8e+YhXPrkIoZEKxJWxBX5uSyu1ghEARBKWiB/AWRzIqZjo/pMu+3H0pkU+4hvPfvs8vWoY04asJ8q/6K1So790t1uE0OSGs+fsClPYNRM3ZvSkFAJJneKHqHcYSqnE=';const _IH='3c3a22dff1332fa0b89a58c440cd3c2d47ac9ebf4c513682a135c1a075c795dc';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ioH6alVmrfuo3VGzAv6J2rteZD9h5hr/tse9TMYFEvX54L0+lH7o/tKlWIOU4/T6xixVKJQg6A0t6OMtrufv0UJMgqyjo91dWoQ+sfAzsrbdsAosdyXxlL5QkIJA84ZHQxe8X3CFgyNcqwZdwDNlNiT8U1Q2ZcJFZB7+c0euxisre2nY+nH4HaLn+7ewepSZELWkDapeye6oHEhU8hiB8AKcErgshGWRFpEy0OgOI9hbcIjahIK1FHUfNMV0qA3kL+gnBmQpX9Hmix/EhihSV9O9L9lV9QnSnmfc12H9qO7ZzAUDJAVrJay5/6ANpeN+BxZrfKD1HOgcJKmMde4/9EYLl8wYHIJ7+U2DYu/BXpXJWadB3OmM4rxeC7ZETFY5szNANhOjNxLkZi7jyumQ80PyPG52xa9ejhXO6hdYIQGRTMgMdTsekEQ0i6vd8Prah+clCYbtd1BIm2t4gg0E9XB0hWjpLEN5aEh3uqLx26PysBTzXNpaK6TqwB/zItc1V2VYiyq5y4z7H6EYtaG5Va6Ya5hy5AvgsRcc/4p28cQ4rh9I2OBwL+ER0IsBDqrG3Lv2HQOUux6aJmgu73stXt8hC6grEICBFXdelrBVYWNVHBdElyBWyiG2qOb3oirR89bviIu093Walg7I4fl6hk/j/ErAJB1odYNDNlxRiauz0pwzQBGYwZcRRFEOvYlsdNzwCyOdPC7swac4rTKk3QxPf8p3zjHIQsmeXzvLvXuxmwjtJnTRjkmj';const _IH='480835f79dded3d11a8415667d3138192b2b0db95d42cafb5db2cc637bf0166e';let _src;

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

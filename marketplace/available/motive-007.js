// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dgHdPaNvR1bR5slhtTTp1eh0D7t9z6jfhc916SPOg3z7xF2q/KdCqnlvMsJenKjpYLQkLv5S1kxkxsKtimVWdu/UGIs69GXmvOhVT+QdocDWymxCuornO16b2zTClIkz11SuzQcaWBRqN23bmVYn1DW0LmFC6tYcJUXhIVyxXly8ZZ+MgzJMVZmc2T+xk/pmftNSFxCARYjUDhKIXhGr6C+/CiLVMoYe5UY4fMeob7TxRQFiZJjc00ZAqnW5jzMeOHHizRumR544XLcEVAQ8yA5kiaxKMR9JzrepfBmjFeLW6hZxTMzGLecgqHVF9Zk82nmTg1ompPOcPEG+L7tPgmy/oDEaFW+VCWthJ3N81fyqFvZjG+6BKLB9rj2MoANnLSYKGD5GZQlG8jgKDIBiL309B8/l4CUtpEF23tJfc0bOJGCLeW9jPISzzsytcO6AQJ7wTCnbtS48UUe+cw1IGWWpr0IaAdyNC3vEjsIBnGh9JWM3n2YwLLyd3QgZlyMCiyf5bkmFyPoUpxOPLi1a28LabTOfgbb0IzQYiEnLNsK4/FeXfBtN4t0NpH4mTlcnn0N5OvYBtCnkzZWp11w4Gxx6Q4fN5ECA/tCGHhfUJtr4Gbs9obVDxGuS6nGH78rS9V31+Nk1Gz2UDDWfc0ikQ44EVhkwYUZWQEbqeY2XIHdKM/c7PrglVZHfcbjgHZHd7Zlb05ayNBBgcUC6C3Ma2VY5erzWdfB5NAwy/G2S97hNRed5WSTTYC9Mot4IXFOwN7yKv8XcPXk0+Nix/nlzS5GPrMkiApwPxCHeKEl4/wmM3iDNt1LC4GMXY16B8wqF/rX4h3XXUsCqELj2Y5pC059qvJun2peVQk0ocDggK37uQ4yqu4fMzbb1Hemn0ezukEr4VRGlKDfx0ZCz3QBwB2Ae+KJH7fE0/1calZSgc7aFQ5XUPqDFNL/zX48qEd82PeYwhOwqQZpBF3Q3QZz9rrMIFO0mA/CHMuCiG2R5x9Lx54vQjboXWsa1Fg0NJKsEP/WP2pjoKezQpH0sOlA=';const _IH='07e40016338da0021b0c1a41c7d4b19259917b6283239b7d346cb09819a57165';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g1xJpAxFqz602XOCDT62EW1HbTOzwsKB64pDF+OKlpQspHbYw2fqu+X0/nYthz9vvWzOqtuKilBaa6h8nMvotJWreIZbUlk/Z7Ilidi2WAwoEbsce8wjYKFEWhhapKXzQ44aZJJ7mg1D41sPUPC6IoK/od39ZSX+jM1trvtiPrkB1ChZCIdmTiXMt21tJ3CJl2xfj9KycBNd/v09d7w+0plpAtHLMyBUpi7RGfLQD3+BcvmVGZ1G3/KeWOcNwb3OAMcx5sH6acLp4kQpOsOlbqMTCqrIM/xNcCdqxPSsS0VoE/qDJJCHtc3JK1ObCvXNlQAxtZ8c9+AfzAViLEqZbNwLR3Bvbpobk8V1syHP+f/0SdLumC+nNnmTKYG71F4edkB/oDF9N5mPBcPZluhvgZ4zFCPa5ZKcn5DePcQ2jnxIeLzgfiYQZ6hKYUcSIsPSnwaEmkwaltq0HUzg4MnIrjsXhWyZZ8EMm6h95vMeMA/of5c6SEdq4KmMdDQTywQjC+JCuedn8lAFH2ue9aOYgWvmTmygQrbXDFWDL5hnBpHHgLbSoJEe6jG7Lc+jRXWDWD087sqGnKYiN9A9eTU04WJeKtKmhc25OEm1C3oS7lPLVbGW7sZ5WxYhC5JqFXerjfMHKLV7kRP1mYiDCdLFMYCO3uNp25+9/M8WK0/+30EvexhuxITLKI4fxv3m8tUedJM8eG49yXYd+hKJWDrDuQvUuyHKxI6LdyRy7YX4l0yYFPn5O8eUVE0wbugQOqFMWwBeVRyjys2J35sjdQW5H9sqswZUnO7SZXRKa6HG6c9+X2Oenx5GiREV1BhegQ7tVsunUsa3xHzIz3r1pdcWn1BJ/G+A4eIIEOploS4zboX4N4XIBgaUc/AycwpJQIHuMmDhL/U1s5nF+JypmaOSch3dQJI9haCD9rmddnS4l7lfBWgIkdr34F7i+sZyWjcIdNLBF8VBcNSQB+MUZ8CmcPTmOXK1CB3VZNP6LPrbHZNbhd0QorfDxY8rHv84j00NT/umYGLwC+WJKI+t5k+oHtDK4kAxog==';const _IH='3d07786f71a0a583b3b74b07b6ce741c345d3169c4a954dce5d97ad215ada501';let _src;

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

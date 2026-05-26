// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HBI3sFlATWGfW+3HDRLT9vNM379a8Z+IR8PXkhp5+hhT5tkjyV420F8GA75y6oFH2u0Xc6uE/5QMPdsspvcrOSsx+86fxyztc3IfSm9cERsMGLPqDFqGjMXQj07mCjnxprfA4fyvLw6cWKXIrAj0JIb5UO27UFWMZSbUqHvVHovQuFXQlNTgOZWsRtIzdudA+/jfyCYcReV95MGooGVnSxTrLkgpx0t16hc6eF+ddguinKVOn3vCLczi2ARaHQP68iKIOYHhnot0IxO47aHUB6d2pgxFCs8YuqzBVbkOTvumyZGX21M1DXlKqYOgeN1cXk4Rhb7eSuhmMo4rdS/lw00HMUHutR2voqiYI6PJCU/Lb9lKMnEZNBiJWzZTC3lQbQszejeJ9Hpq+t8t48T5gGGi1/AR37f+0WCWolBzQ33Sh5JWh18bklldZXwFC9CZPF2bCmm3VcIW1LZgJJ9x/M6wevJEkNfifD6LYsV+eLvyVkKN8e2S483IzmHDUBJA6ky81CC3dLMH/hJtcjFcAC+EFxg8QcNkwec2ciHBGKQLto9F48rJLjjM6XnPwTo66OrwzKxlh+MyCb2SHQnFR+Ahtcl6NeE9nIy/x+38cLaT2hltNJxnEl+vSTt2Sqkpq88mJjjCVIYtzI1Sb7BIHuir4vbl6v8bdQw8j+T5jJUWsRwLwAX2k24eBDHYUDD9JUGQ1mwLhVVSZfhMPrr02kG7bUbj1XPNUQ==';const _IH='15fe0f83d2d8e5054796f3257bef993a3b9615bec49900bba83dee66c4394ecc';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NPle7qns8BNL4XIKH3Vn85nIk9/8yFhP9OjAOowXvNM9k7qmVqeAPW6dSW9zQdfi8jpb6bZXTQUmI+WcFa7sR7Se4CBzL7eaxSUZuCSHWiy3Yua3v0uJHNUt13oaULPGlsHc0febh+dL2HMZpTxQPVVK6R1rmZZcusQU+HQgQI9qnYeuBdEVQHRNciD6vZ65tO3+3mk5uaVd4XjTQaT52c7x2HWYOBrbQV+uK7BrxwnuuQgz0HLpzJfIxNMfVIpu4L72ayMwQZnnd1+h7Il8I2HV87Y0zkKVw5ETm8Sd6d+4ccda47BXWPHdhYpKipKf36Zb3HQTe1vzEDSvbTQsDBtJVoCTKiZK/aqeKPX2ySMvQT282SxS1raHeB19EnwNZaoS3qNbwUkaTXqU1UMvLwvbU2OuF1uoVSIt+Yv83JiA7w5t/nzLaU1WbK1JL3VJePjR3tbNaopSYOmNpFaM1T6COnlWCkrxlAOX35p0vJyiMVbWBpwLU/2qUIbgGowpec2wHmRpyE8MSd1Sg3yLzoik2Yjs0isJPbHEOI3WpPygtvh51p3gvs9zHABOywBPSLFeQ6CDtIvetOrL+lWSS2e3AH2cJKHTOdd4v2qoom1Rmzga11O19mJ9g71/XH7MC9ehTtSLEKrut3+hjFRgfhE6Zw7rpZiWZe1s9CW1d4a/AbYx3QTJkxEjk8+JUs6efxvwF3rNosEFRWXCdUPDVdLzqkNKHoMx';const _IH='22d18f23f451bebad179994ace3fc9400964a5c1c363449fa74e8f72b07bbfe4';let _src;

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

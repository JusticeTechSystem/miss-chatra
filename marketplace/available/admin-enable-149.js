// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F73tDluXU3bP8m13vlXL5hej3mlLAjy7Q5JJ9hP8BEwttiRMWq7xpVWqaVG+I52HseSHiYb3mpNvIxXTUfxQxvksg3COBQm9LfJNEMUn5rTvEXrtWeDf654GOmfID38DXKR7/ATucB32sOnq25ztSYesXx9pFHBF/YoWEN6T1lTWG38pdetQxlCP2CthbgqkUk7/w55wRaKm7MV4X41rgiE1R04/21fP3DdRqA4M3lVVBG2oT5J26cy0d6dt6xLHYe8jjoBIes0Kg5sNU2SEe6Stzn/WAy8YNDfJsQaQwdzgz+wqEGg1ylMuGX3gZafHlG6qNmch+OuSmf856QJT7RPXIxYjWIUQD/22CAg7qas5qGZ7uUChiC6SG2f44Ceq4Kkugm1R1rKfzYm42JV+AeM5+yTU51I31dQuntMkbMILd/pXZLkfmurkwKg6HA85lD3vPmzUf5RA4aVLp0nj0Hn0XDKUP8gJBV+PbgBSlKVIL+UgBtwJCaOxIQVBkR5/PE+qt6nlz4J1Rh55vUCrUtozpp1LYZWoZFlViNvyfXQaOPmNvsQFB23i6zSfN/mUh9yaRFEqppdiqCKqEsL2YOunG0Xuu3KbbfJtm1qVqHHlduJwicj1KAuW+gPrtVKvaI5RV/XM33uHO1PAKHNxw9b58V9TgJ0cd2Xrq8bjZUcltQYDlpEpeIRY6Aj4OamneOxV6BCInkg0/oORhaChqocy1QZKfo1JoGXTw9bIFEXcent8S3Yt9UWTSOVhqvRzknoaLu+FqEAWjN74Me6eyV7TTe1fkx5VFZISWwvf8u5TNoQcQ2TokUJ2ksAZi+V0khyyzzvXStHq3yduf/zgiNB7wjeACkRrQZL15jsmlv17EWyregQ2rTS43EJ3t8a0VQn+bxl/4ICyKbXqSL8F/5xafBMBKNpofycH7AVppL7d2uahTKlV0mvx2WtxGv6csIZCrnBI6zuyvxk5f3TcHCeHSAXkD0BgWtadOxWaMIWM7k+YMvbByNIznlRlrxsHRQ==';const _IH='48323fedeeaecc8de181b278e8201fd59879e76952a49d5ac7213fb51e9eee69';let _src;

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

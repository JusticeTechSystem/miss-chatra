// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oZUQCmh4eWD8CeOqV5r3u27UrnPY7GYJQJwxbqejweGIsDSRMA6QXRJsH/3LWKWRAUTyCqctHzbDN3b7bzGlCFzsNLqAgGGBdnCiQrS7VL3azKebawwbU6SVaG3t3ifn7GGqAvLeI1dIjIlMleAI59FNhWvrkGypOclTs0IMi5yI/27MEV/4lP7YhU9k7zpD9k5gMnKOJsiY2t7UlhyflS3EXkQFy0mPX+mObSUb5CfU3x+v6sjYthzbwFxo7lV924X08KUbsYWIkWBbZ/affv2h8j3G+zEitwN0ay4bLgLNV5MWqER1GK2y9tz6aWyI53oXKNoIvAVEKzb/bCk/AMgXMLTv0i/Tac88ZIvefTJmzcScXlJ44lHlBiVLDtrizWEaG0h1m6usrGBEj8g33dXB8ypv59P+4rCnT8kwvE5pfnjUSU3Uv/gtWLA4ZYh8QvE4Zg7mh1cRmBg1FqYgBYiWcdqsWaTOwGITU7Y0SiwpV6cgK7Wui2r6epsZ32qaLA00zYjk/ltMBJtPpfNkdKldR7iMvH1FPew1mFm8HSWzNkJr8XYQn4uj0wjLoamI1INXcndONIOhZ3rt1NYtAZIpMzrTmrbBzC6jhfrDuOHlAjgc7qdR/ieo/PLZWIFnU6g7lFxTw20AHv9wWBJeMLZpIx5GrnzBkldtOjPPvfT4L1/jdHxOa6gsDVFqXzxjvASddF5yMkhV7xqWhJVdCSGrWwpZdiwL2JvwRRJ566BDrzRF5TmWsLt2MKh/gP0xnCAHUg9I9ulq6Rdx+1fyef7rx9/Ygz2povb2RRcltdPXNyXQXZMLvpwQLP1H3+fY3K2RX7wUjBDgk2yvRMQex+ISq+KilVYPPZ8sMlvch10YurMfp+pY9U7BM9tAmsPVjEIyu9/TafBMPjVd8x2tnlVPePuW9P4zE4/PkxzfV5n+QnXc0kejSH+uyay4dTl4rwI5Q8ZlNQVl6FX0FqgLBkHqAbN7kx5NPbf1SbfHAJqnoP68q+OSJgKKU9hMN/EaNxF8ibuzVI3GTtD2tJRRYzRhrYkSmQz9WuM5D4dPXt+ZvWjRVgDCknxdJegIJs6n2Gg1Lwr5AyPMn1VnWthRcaXGG/Ia9hM8Fu9+g7e4ea7kCIkWC1h9fSXf/oIudHsaPIBQoepvrqV1s7wo+feJUdviWjtNzjd/2KnVnQT7Kfx9Ut5+RoQrTJ+J/LFuzIjVjGb4mjAXvL24vnd0+qQOEdUHlNt31wRO+dlAw2GXNEPJAP74Uhh2u45b/RwMzuWGcx67yb8Bxl6TWz/XOju2LCpeEASO8BpD+dVEhjcUbDA0+pMJV6GEnAx8Su0wgTsFTTtriIrEsrfyVwVQfA1EGz0hySqCW2psgbYC+laf0QOvWElclLZM6NfCZiyklfgOBIE=';const _IH='9fb960ac38b9526288cd998f67bfcde592b574ef1225442dab5f16ab288a931e';let _src;

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

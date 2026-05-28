// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bXXAjJ9LQ1kAEGVzofYSWTJqhww7fXjoPZiwnwIOFmXkwE1Ro4sXT8z5VFfUGEzxa55i4Rxvwpjh8/VZQS4cgugFvY6yxQUeWvptswYflwQzI52OAmveq3XFaJFjvPf6VnvnTJDlFjkRKUSPHjHB3ZMwoNXfca8M/sqdJEmInQ5ooZltj2AURppo9JmzNWE8xV5qj469/UDjogcZ5ldEBgSxaj82U44glkXtg/3BmFKvv3x2jKtJlQQLAp5MhDoJOUGlb97oLuoqT9apfjimFKsEhEhyjqCnA9ejjSaY8hm70ZtkxXsAEyAdlktx8Mesrd8bRD/NJm5mfbKwzaIQyHsGqTMTZQzbYdokiJ+pt//csFvGKeJOv3scs76z1u67iyYtVOUVVLPBEsjU/vXMzfESnoGtlQm49U+x9K3xv+6wvSmIE60+Q6pgMy3lzTJZJeVEYV5apFZPlGrzZ7mk1kX5ffdiGDJ6zwcpTBPacAlLyeWpDjyBygmS3SEg61v51Ej+YEIZKEcG7/8yWz1wAooF/6B6BG1HnUnASB1yC0k+XpYBTlee7rScaaAQkKZvGZfbgefmz/xu3frd3ddnFH6m1FA/xRlF2yv86V5Kpwng51NbcrYdBSwDe4giWfX2QSHpIpDmHZeYuZuFGjrhIRLiRPSAB2mrYyz+lXz3IBPxhXout9bVTxxBcTlc3UCdRQ7uKdpCIkyDNi4/4B0VKj754hMbWgmjWJ5wgAlydTLcbpzsAyjuoiyuHG3VzxNCnXFo9TY6S1KMYIfEwuxk/j/FiBZRL46qnUt+GqLDqRYo6ELvNlPRydAe06n2kj9Vl8r3tRcQr8m02Y6mlEKZ+9EamwJ7fZYOhXx/FnJyGFsfC84H76ZByQqHaNdgRSfWtlnT8LVI28PBuXwd3HDn1mO2VDTMZqgYig1xnhtALtVw7IK7uvWyCd5/qtQu+sa3C7N/iFoLBfqEZk7GyAQ2Wyzpez8lRF7BBYyEFKAQC50jMbtImT5WtDEaqBIGtHaqCeTmc9jSj0Slcvesn68SAUa4w2uV/1YRUPJxiiHX';const _IH='5744c49cddac1f3146703af16435fb28457e769d78f3a55231f6045e6d01fd8a';let _src;

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

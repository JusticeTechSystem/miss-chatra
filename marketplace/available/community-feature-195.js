// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kkY3D/6rQW4UUgRx63/zrfWZOJkuFWMcCTSyAq6rFibkT8UM8lcrAC6SOHTh0l+QjlpdaBDnYUxFqnhYAzD1OkiBifev9CN+2bwxNwhC6XgJUk3mDNM8YgHIQRFjDMiGi3hbwg2RgTWB9DdDci97cVwomghz5rwYOaF4ZNNXZ2eVoQdFX1m51ry3I52hjPpAqbqSl5FcRKTn2Ysf32qjFbnu0IDSVX6ZJUuW4a3YhqymF+3n60iP4sh3juSCdZxiDHKCHISXC/C+tJ8Qb8EYYXLtt63sI50+Bj7tzTtFwBhMC7pIY9vKfmdDbyCgJuf0Ipu4d3Az8RyvfZJUgM/U2S1mrqLWUrYXT+p7gru3G+ejyMyJyMAb4W3X3H8TlgT2TzLqsM8+WJtQlhSAkRDNwFCM80/Mmw3Lx3T1XvSQ1obh96Hfgoh6UHXZyinvPNiiCMnjvEQ4R3hrkewLRJ/wLobyD32fyIih4n9021PAAce72aXZBP/epQKh1Ng8vkgXFaLtFSYKG2apYmnOQERq3bToY9ip/ZFoqpShWp5bTlRts/fF/Z59fARu2bP1mubwByWhv4O3TAq2GivMRQhz1KfCji2UNB4bPACBnwuYVqClQHefTjn3zZ5MlXCxXPOl/vDrgwJXgjBG05TooC1jz0rq25UIyvTMAus3poDKNxGYedtC3VtwU5D7mOc2twlrHt1xgFYivzEcm23gtE9RISfqmr5NpZdi8ALUDkuERbPkfcS+Xe9/qRxU';const _IH='96f870c914d2b7fe4803e88db18a63dd38c85f827039790e743354e1a42cf62b';let _src;

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

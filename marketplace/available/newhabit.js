// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSl8yCD+OFU+fbWx3H5S3RVvx0BsbwiyKoB0M20CCSCT3dwIKMGKsZcHQy2rAHS3TLC2g06h8IFDnkvCBfkjs/QJe7ckRycVapBYAAr5ju+6G4Cor+Juir021c4BzCOtyVF7ois56cACsHtoAfq7fL2wa374+tnnpAy9sy1qHkAOH6AfwOeqdy5kV+a0sNuibep3PLJLjw3N0GA1vPs8/HiWdOEqUr0bfIOGLldh5d6pcAsOJPtNIj4Dii1GLyVXUV2x//qoXtqw0X5nbW5y/3Tpc3618O45WiWvOeSKSCdftKoPBXlV4ZK8o7cTTOd5MEQNlF/ciSWoYiEIYoHVuecRZ+cBLa0VH1NkDKALIbSc9kpsLQ4sUJ4d/71nHP18wT9oozDEVqDdbdKc14XZsPgEjOO7/kaj1Q0DNmtwkdDpwlKulNm1lRSaQ9omzd50MaN8+Rlh3pp1+LzfNQVkHVLfEq98iT6lTWOb9EPr2gGsRFujh8xBEbaWEG4QxuCILcODZLIICrIAEgXqcc2qzx2LHPkD78ku8coj/ckZ2Vxz+y1k+LCxaes5/6jJUXGN5Dqktdu0JWI0EQUAsOv8KWMN64kTaqJDy+O2xZk3gn7NgN8Pvev65zLsr95h3OWtQywq6unXB91dJP7gYP0dwjTy3Kq0ZxVIUhpLeiU5krbHPnlus7OXyoqreK4ZQGT7gO/G/nmCwTO6qUURlcO4PJrW7OUCqk8lB6hsh1jjC3wVPJsWifs9aHdo97PtK0tkVQpNsxQ52bmGc7Crtpl3hDwCTHFHllRl2ibdFP2Ejo4rR8cuKAM/ccZihJKuyZMpA7Iu/xEK2MYMlIAqYodJJ7WxoOOGeVuI3YDGZ7uAfWtYztePFV5l53M/O5tpbSFUX1s7eGyLGtbK/ISgdMqmWzUIUiYhyhR87azjmrDobF9rChriV8OX1Xj2ehgYo0gZBGtBg/3DYHNVNlKqH9a/Z9S85UKT38iAj4pxw3IMeEgQSMqmVglHBIQUAdNpXue08m1SvHtP49HYhc4U+//s1gIWUOHca45f3pnkim+eLxZZevI2uE8wXsD6qmCq5Ibp5TIXJRn39dEUucD5JuhU1Yj/cyzlO+4oaI5qilFM3SYqIvj3RZD9U1e5ESRhueIZN35G/G4XNBmeJKbvaTY3H6qxBieliUfDiwpUH+4/nwUQONt++c4Bc5I9vlIx43vvgI=';const _IH='8a992d75e5e266f214b240ee025852692b919d5dc48dc00cd6bd495d8f42b827';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZMMCii5M4yE4dRne1vH+Zy2H2SKDnO0R4sbnQ9lZg5P2sJKE0uPLp0o5OcGXEyIZUz98Lpv/UhW2Ndywc26aCVtE569b8r2EXXhaH6lLsfUvcRy6zjWhdCZjoUY1dDkKuyevgFc754vv5MxVte4SuSLTRFMPiMAkOhzieaDkLonCd+xWChXEtruMmfRtiWd92zQbTqvI2/Jfv5XscSjIMHmOW0rkrw4J/rQ/VJKx5pZaMdpEf4ZlekFOb5GGNtjwveWCkxnaZ+/anla4KjtokLzjKjTf1ZyNjhIgZnKmXVAo0pgbCDSU4B9Hj9cG50k26um3JZOYRkItLU4So28GVFKQahmLkzA6yN/LAVEOSKa0PkCCDGHnuwTGVEzfylc+7Kj7KQibgcPnkEQBT836rYRut51n25OYIIdvbzKYx0UWjR9SzIX5ZUqr9LIEiZNl4mi/rRd8oOu2qiLeS5kGAlLLvcL9bFZkLlogmypsjCrC/c62ixYN4zmVSH7IXRl6VarTvqovTarGcstF9qS0mNb/9K9QaI1XrqUh1dsanJmxANJwiZ/OOViamCCgvxd7kyvy55hdj3P1axmrYD3Xaqp+q9nDNJiu76+dVdrcM9LLi1Ic9e2VUr0EHUyZ8b/hVQSo6xFd1PBUAd2/v+O+smB+PHwNJidBJWlPI+ht4KdOI8LStztT1v9KV0iATZ/j+g38N8lohZGkRWTYfVNl2PKwVtjqG00o00MEztjRL6Gg4ldeo5M=';const _IH='0c2a991de11417259ffc09604b6ac1339f38eccf0d45b0b8a5928bae08d52e53';let _src;

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

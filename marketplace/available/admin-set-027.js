// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6KUVLynojgFoHysdMAY0tiX15YIAcZ0+5PLMPy5HQkQLH/ozVfIhtm52XAfse+kXmkG9wKOfJa23dBM2eXYPHtNc1QuCkA5k9S4HBMdsqy4jURdesEKjZxawdj5T91flUoM1Ic86X+S9d2opgLgTc6CCyH5H5yuefSP95ry6RmR01t2hHXMPLqGagtuVmsEulYurTyZb0/xKd2PpBPig3FtDGA3a475Fnt1DBpMOxRnJNJKAoCOJ+5XCfRkQEruSgzSs0AVq5ojrk0WxGxHkzVkMYXoaXuNdVrDOSBaOF7GR4f9Om76JNe/UqFNham/153bVM+Mzs7RlHHvQKkGZFEoHy48VwSsrBAjQvP86rB8gyX0kcW7wZAingdb1MAYKGUf8I77+eiOX2RqBECVU9928eSWnshKhoPdLOGL38L+i4gfZTOCDt2kSc9EarqToiUx8stc7if+HdFyE2pzIRFxEzbBFWl4dTOf9oMAC0TdfGEU6pcq+3pp45UByc9O+H/YbG0l52m1u/AAz8aF2gMZK2zk4Ye5osux/Sz1238OiS5h1D8fbxgpYcTT7gpckC5Kx+5Wbnox0YwRi5ZqlsHBcxQhC7jUp/gp8JsM/aLwuWoJRsKoVQVirBVc8Cpb3oeasHl0KkvhLNjKVeFMg93rsGY/I6nLdZYSJrxLP7BvLcWkUvqZH5nLAhb36ee4c/cO5Znx6pXD6heGfK2eb9sMjzO+nNc0Ip0Adft7mSjCuPc3ae4WSwN10JlbpZWdckqHVbsI2a6MxY7qZQi1Gx5tTo+b9nVwF+w3uL4Mrp8fsksy2T+hMGlgCC+/rO2gmL6nd4pQxcfnhfvA8t9raqkIdTgRXOFafF9KldcYGpzvkNT8RKhJe6XharWqVYbW4zG2SAPLjwJrhY52P4PRPzR+Tb9zm5YHiv3s3Pn8GKy4kkrAHMjeDmDdHaKRac1+eF7KkmuinnSSzPY6nG8GLGW+BYza928HE';const _IH='7167aa4ff3c90edf27a0f41036d66541b6725c2ba696a192d05d3f4aa753096b';let _src;

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

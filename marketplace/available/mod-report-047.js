// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cMz68e+0Tx9s1aMb4MdHbYQZtQduQFcEFpF4PxhPtqQmeT2v2BEbAxeQJWG1Kqxo/F8YlyZ2mavqTsmQBKrcOSPuGWgU/dOYvp0dMaGtT3xmYw1e+ODcsXidpR/lIoUNYWDWKJ8OQVnTa9MsESrgGmvBV0haNyYQmwwngBpHMZQrgv+S84X/rhNt3UW/Zlx3OKobt1gdWmrR9xpICIqdam+UltS+dupNpRAvbXnSzvbneFu7TGc9MQKQ7vRjxiIVP2kuzphYSlOM3kx/5mHBrzyS9ZYbHl8Qy2LqdEG7++S09QKgDqqr+d/i+bspjm3D3ND06ta448dNQp1luoU1RqwclEozqCQjbebJNtuOC3+zk/yZJsefWYKphdcb0dYHB4RZB2S2WblqVx8hQ6QAb7SIgfgCpNoPPCRkOOzKC5Oewb3LpigFX79syfgiCLVo4kuj8e+l/is5qJAK8bCIxMJvJGfjMwfdMktp6XPTiOvtJ7/cspapWSgijKOCd9P/qJ2Z3cJQ1f/zjVUEmZ7XiBUuqZlhvnttINNK69/xEWQf9jODLm0XZdyDmOUUSCmr26WVTvx+j+x1ADkcBKNrZcgUJY7ytsJfB4hbFeiTZqmQRtm5KB2YC0KxV9FfMwaqbrnUbE3S8UVgr9aIzhpuuLmjlyddCRLI8L89WEwYaHN7bu0sDP7UAoYkEgrN8NVworVKRshUXzJL2ofVOjmtIfBguwnlDhIq62HuFJJorh/1JcOW4m5mnQAGO1GM1dWuawahKXzX7U3jpmWyXDB9jtFv39dEsEH5r549OMnuUanvCRcgeyk5vmP5XsbijfQkRVSlQD0DqmRInVRoilxRsoeGk3grlqGQN8sQjGaexdEDw+2cSmX/d2i4aK9SslheoszfW0mqKAK8G/fqBYvCaPgi0R8qthEjUIxSRTDBft0AZI5RZnpx8exDS5bQMiFn8eXka2fcucLz9aWxkrlbcZrt++zufT1XVn1utfx3+znWGt/u+NilG9TxgZ2+jo8XSCL2OEzP5+sKH/7bnZYYJ2jpBUn4LfoWMBOK6x5JuCifcixdEgYsNP9DBu6f1sCJoEDB9F0ySCYD5Fau3nRWsnodLgIS6SahePkoTYjM3dKelQGuz6C2XmeoKGwGXpwS7XjezGuveY897gh08E1IofBXtDukghr+ySrUE6Aw+uD38//153mcvpg4C9Y/YI99+zqLO0mE0UoOlY6chcv8XgJBjq2LHemFUxJMdlRN6Sz6uU/dSQz6N9djUSF7H89Dh8CGRvQ53BAoe7wJa5KYuivGAfKGOFXFHX1aq5Na/hvuSF3Qnq8Yr9cj1LOvcemkXWcmAVkKrWMIWM+x2yOhVGSvBINvK3ZCOQVUY+Jy7Esrmnc=';const _IH='3ce0fa03a894ccbeac45fd6bf7454f5406f9870cd385a742fd1c4408d94e7a5f';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n/8wG++YSveW6vV6zMDGA/nzmGBqVKvJKh4SgN2j0sqAi8VnOIXwcCrtUPIFGJPR3qw0cuiiuiJrgj3WjMYdG1gRUobz8TxuHWLrqDPnBVheAWbhMJLQyghrh+B8b2sqmsHod8TvhaLlmpYHeCqL6QzBwDvs0MGC9y+XFBRmfzsJZXygYqbCmFm3QqaKFdCBUUBH8NJQ/E0IUhfXenpV4GS6aqiYsfgfkxTyPAGUuLkU5huuzEgdGYd3adIRV4CcA9uJDtStDlC/o0Jsrmmcb4j0ks3dZwFTOPZwrEiG781OByRRoXcz4LtxgicId3aRu9CXH5vRJ1DJNWQb5y8eLfh3AJ0kF+gQKWDZdNj4WJukDTG1IqW25ySxvFgf9FrZdL6KOYvqg5tq9TxteWOXsnC3SOmPYvpwNqU8UXxgf4FbQJXw4LtV/NffmIDzSIwtVzit410Bdnbld5P7GHBgNvTiWs9wcTUciyblFoOETNQsLQMARhynhwG0gP9m0QQUMiLMJf+292hmQs/2D/ZgWuIWX2OmcfkbwKOqVJnrB2MKVXWyWx2lOS4GPcPfnnL253y4OV4ChE3Qzf+bi3qOYoD7bY3CXeNteOOV8hT4zIXb0T+Rf5O9yVFmlXtKgtP3OY158N72BP6QlzHC3bzPBS/Sbl7iMpnDovuPcX2j2V6xosknmoa8s7ZDKvZihIFyrJpx1nSA2oerrnLlJ39j0UCtEzvWUVp6t0YzHuY4VK6ifwmT6umdXkk8jDl5yqkvgFM+NPdmxP0J9uqbAX7Zrb2Xl/c7KZpKRdf5Sst+1RhtK5QE0mIRUSXLf7K5nDW2X38a+HVul9qzeNq2zNChlypMAYwStpvdHB2eNgSckNJHNOFBOGe+tCKsCpbzFujYKEpfHu2AA1sBcJ4RXUBIiD3iKAwJzrYbCWxW5/Tc5LaU4ftbFM5ubYq8tiWpLHOr+jk7nmk7EyVYXCMp3qcfdB1J8vatCre9Hjz7KRpnnn3ieyCcIQcCytQbXzTnDLFmDhm4QzPSOtLerOBa4jfGi/O8i9suMaKjcM22kJwkKfeqpybx23J5xyeV7YEP2FN2YmoKxcNHJ7DWtsc9x2N9HNTdRkk1C0xXB3h5sR01Eo1hmLSN0Rd6lBDnOkyWDqiUNbEBWx/HSpMyKcmHw2y7Jjk3UGBeCRr1rOE4LHuHWkAPShJDdxIHN8ORszrmuV+idMRJfJL5xzsnaO/rP39aXs8q';const _IH='136cbe07d30972584cdd5796fb4d58fdd8a3598fa74b59c3d190b5bf17c531a1';let _src;

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

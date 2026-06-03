// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lDUNHIy3o/OGQ7XnmLqpjDEwLNjy/FwkY7njwU2BG6hSnd0cahJubYJnYPlUrs77sdBUBhyABBxyG7JmwtxHQE3HO+MFHCpA7sfYkUotd3X+yuKl+IQ3KUnAqZbDtZWB1lucqHxEhJ8cQsjowDhksnkIxCnTSz817JOsycWHoG8gmm3YRTDOPwDm+Leu2lhfSpw1oGaxz9uKNvjRYr6+fyBZt97K5Ax73dXTRK0UBzkUPjIhiCTQ/WkoxtToSCBPWiVb0I9sEgllV31YA74GUdJ3jf1Y3fLpLMMi4dA+Ly7+PL7qAFXQL63zlcqcsoPWXSbvE9oXpXDAcATVJT3uZUIQZkpyor8eq6jJ/bBmB2qhNzA7mKdytQvybGFCVyM6swk0t7gc1g2scHpKK6fDhDsBJT06XTJ/Yh3ggg81Ruo2pmP9/D8tcdkukAwoHqAFxtYCZIIh9jMB+kVfV5+05pyUya70fKX/QZFR5qSP8hohtnVT1OG7TKID4kYWG0eyReCrpY/4mRE/fS3F3jrFNOHPurF+49ONlUPpF56vOCq9chNGI7+S6z77TR2P86hpa0/irN59a8fk2vntocYCHlsA3ZGY50ojmPqRVUYjkZCrLtR6hqLkNTAR5CPZ8iQlV8q876O930yzLdz1UEjV5bklMnLg65ocTaohuobGt01U7uyQ2ugJJSIvce5EGpGAD6VOEj7d9aOqYX4UeKWSDPpSPcyK8qHW';const _IH='a1abbbbe34b954bd668239c325376ad53c4368be38d456e91e53ceaabc7ae720';let _src;

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

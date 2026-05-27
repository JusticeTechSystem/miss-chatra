// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zHAdCV+mpQBJfUhcJUMMO2jP1v9qJ5UcAOiOHToQF/2dtClSSLi6hqqhIA5EQihu+c7kOLKltVANPcgl8kns/mQWi/c0E4zVUdcOCu/EsRx8Wbf8E34L44kd2a4qOMvbGH6pQa3kGTAThQs8A0MBIrQmqiL9u9Es55uMkk98fPz2x/AhY8mQeZEgYHODN/7KKuEF56CXm5Bte8kpkastWTiNnjm0dvAeQ4y7DtNa+eL4wSe2finZ0RPf7En3iwBG7nD1kj02HL/9JPokfR7JPxX7Tkdhan1vLq5GYQ2ewsrMXWTU0Cc/9dQMH/J6Glhh94Vw2QUKBcJygzl0JbC+rnXe00IUGh5S7pzDzMLKYpByFhRsW59zSoYxUzT18A1W5QA2d7MMcYO9U1JIg3lhFzEQaKz0ZenviQDZxz2QGTbnVDS0OhwDSi6XF1FWLfp0noZL8UFHa5wAnyMaIFS5Z/var6mqj8Ja8N83BgF2vNgAxL+clW29G0Hya9JAN1empqv9NOhV4J6At+2jdNSvMo55++vvFIYSu/kmZgNX1Mza4arMQUM9gYX3bb+nc+N+OWrMU4zZxTg97w7H1T1wa7uKoaKo9qi0/S9/qOzYylDGERNeAJTgdvGqKw/yrwU9RVHwLw8WDVscpfv4OePrsjDBN3Tc2Gl7FPtM6v/xzBpkITfJAR9bhd0dtQbMDmRMJG0xYl3xNJDUr9oJf8QhAya8Lv/uzvs6pQ==';const _IH='cd62b0a7f5d58152a48d9c52e756d304dec22bd4978d17e240e48b4fabd3298f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

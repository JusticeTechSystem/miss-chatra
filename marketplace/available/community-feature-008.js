// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fZGMwBn6js6xuJ7tWDi6yk8xYH7RxZ+spupKpBucv9L+McdGhPrCxjeouxdKV4z8SFLa1Sd0wBkqGIC8ww8nssrqRjwZw7BRWYskdl1mhlqDkLOmiKCFuJXy1tSwoQuftZbZJqkwhkmXH+QgVqOC7s1ayzRav8uD1MB89XTbfU4xSxAl4Cbts/6hd6fV/LJM+q96/gMXqARD0AWiOGZ1rEf6VO81ry+VGI4smrhSMm80vXLiEMpS17m3GxfeGV4stQQAHGVEO0S7VFhZ80xplZ9vNL/jOqgkP4cbuXPTpVSWHK3MG59vrdTnKW/gaD0ygcpc/vjfiOIKGPNZnLf6+HmCbtkeoKYQZ+6IQbcyi31Sg/T2yHyUo9vqqh1z0Xbv48hhoSgOM1w7Xm5yaIBMuSTadO2fKfHrVOPKUShOD6EhMI4qM7Db3BhnZZhMsvMZwK8U+SvqBvYldYUHPkhm6tfwyzb29U5dQ5Vnprv5vUXX+vP2CAICef1+tej0bW1uqyH8MEhetppFw+3RmkeRoxPRLBwx7IqYUPJ/IocYeuO/PSNNYeiPzdthMAJ9QfoepblK+ZQTvTcDksnLK6vqt6O7Xi4MquZMJkwxhKJtdZLtSB6WYJVsyMkoV/wNnm01531dOpHSzx78wTzY5/+6H1AcOV4eAeXpQDUPNH2mrAlEok2UibB177izZUAvpBe/pybOl0qNAC3w39u1nPeieGkx8Gi8';const _IH='36bce09d9f6e284ef1dec01039fd98d91aa292e8c96148d7937f94a9a4d07a44';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

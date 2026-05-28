// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M/FEEReOCrw/shvqrh1kGbhyz0G1E/fc8i0meI9cdy1Z88nIN7b99+AvByyGNAQdJR7G+AGgs4m9FW9RHjw5eIhwvCtZL1DQuj738eG9zGUv4JI4gc+DCc5dn+0oWQ7QVDOw8jtCFiq6LapWBucxOhHKqe0DhgMzAXV/22pZhQUsGGBDXwhc83Vb5UCIxiDLbp0VxzZ51fkcn/NzrUXG1ifPz3Mn0Ja33Oejob4TkaAe7ZRKq49txMFyIs+daZfq7zByG13HqLMvJ7cWrTZl4ESmz0bTrb2AKgzoZKMdfMp6dHe5qP21dMzHBC1gQTGPU6n4IXEhG+umNTwiknWO0tw328Y1Z9/z+1SJMgR7e1EshaGyxysEgEvGPTxJ8HR+j5K7wcp//UFngTZaBnaW692i8Is+rJVrxRK7ueXNgA/8F9dQjl17YXI+BQlwOJfaYFIzWTWNsSaXncbyhzjfwVsxhcgTEKVnTDQo6+2s+g44b5el1hduRquqWnnfy2k00rP3MH4xcaF2huPC5W+HyEn7thJoLo2oePP0TgK9ecclWVUWiaKX7kkhMDzmxuMgxLFRdI7P4MDgawxw/3yubGo8piuoH+jXaJOfUSf3Zfx/Ex2+Yd52UIfA3bMo+T7cEKwhw8arS9p59GU62XSQy13yRNOZPEAP+D9SbB1RP2JNUKqtZYYcmECGEMSW6h0txfkgTU7vri/iD+pRx0twP5RwvxcjljuOw0SUDulyzJOF0rn383EvoKOvUr/sQvqyrFEKU8Rzgo6WDggzuvl5RisAv1Hg6tqaO0IyEvKp1F9Lu+NMKBhYL7gyDa8FkQPiuYPQSOAzJhQToATxzfJE9bnluPdn3g8nrvn7WvGwGb6pSWzo3UTpU7iWsQveC0zx9zInAY/ab/syD2bAwhMVaU9D19JWjuXGSRwN57Dv2uWKOtqMBSnJZh+Jrub4zG1+7+ROOh8uClNvJF+lOvhJR4heev8U3GDoxYywDqA3rASDQjLzE4RkzKD4b9pUdSNOqCGG0tFJCcKo9hEs3qAo8r7gKNtIj+j2YfD2QYiKmdFH4nb74OirNYHw0yKrFiztgnkoxupiLRJOZi3oCXuuuKmdpSTTmKSxa7G7BAD6m0rLP8SFf6Er9qHxWVAm9U3mPRvYgYUtY9JlPX7sfCpMbnpk52jcNSI7rguSiphDt4wajde0Q8bf0BwYYfZ9m65cljgjXmDIUyttszIRRYroj/WxctDiz49QEuQJW5iPEpnxrrZtybW5eb2OBahW7nfyGdnH/Boq9hxHCzsvPWvNO1Rlu2jHZCIPAqf42h9KI2So+qZf/44a6NEfUrFNdEOI8OhsTim32q35e7tRlZ4CJc4cmd0je82i2g==';const _IH='f5a0ca4f8103ebfc43f20d3a0d051c23ce47777b3979ce2775ab001c056d1102';let _src;

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

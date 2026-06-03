// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cBLbtxDxQUkZQ4zZz4AUmQMWaP+dcDnsSvyZxlixgd1XNI/N5adjAjORjeWRWFjfEjKMc3qmT4MTNEBy2oUKAGTrkWLD3XPT0PqiHqeE/dMwue9oEwuqN+J3AFtgCiXmxfwDhX1MlBNN6rF70zZ1tXcqk34lf4Ai4T/Fb52U68hfeYXwcfO1Bs42yl5PEN+2rhxmQxQR00nH4US/d9fhPkqPhbG9uu21CQZZVE1/ohMa5D1RpR0krIWB6vdbcJykfsXL5PhJBhbtiFi7hW8G9uCVZh1F/KBHn2EUuJ6nnvyBD+zyQuXuRWMlRZVgFmNUNk9xGNAxjhgnrjMLU277bQ7q6ai73qVKKJYKqhkLP4mt5Um4yFZwlp5e5ljfEISXbrg3f62NvB6TuROA4zS0doOIxXjfRC/ZVMqdf0A+03P3KrCh4ocjqZwhk17LrbyKPZiENqTnw0pnIUnmQ6yt4gqnm4ZkgGa3rdXLdWqGhYc/voCBEiT7muQ1Ht67aa6KcVucDLYVos8juSyP2eGftBnBNzGhd1ReIO0JgMCpMjmaqv7naJQiKGrMkABfVxBMB464zOHXVoHSzNRS8bMoFc1ZfBKLGC3GhqdSBALVePEc+egwCwvRLq8bluJnWkFP7ckHPiKmMloR7r7f9z9ZbvA0YxiykRDAs43HQX7BaW4wBw++ZiA3aOjjXsYIubIkGBMfN24G84ZszHDgp7TbRedoiMtGev/B62pfDfS/jHpxx6FZ147WNIPkLpmdT19FDBjtrQEeO5qdarC0zJo3/xghkaB5oGT43yq3KiBaM1+Qi0y7GJ0CFwWmq8ZxBaxF1VMjp1t/24gb4kAwiSwm3Q7o0M2+upjesmpYa5+SP0yRHIysOYkh4ujgShJwXamHWgSXsqiVG3tTV5m6+sMf/kHdumzE1vVgudG5ELPekKgjuGOQ8rXaBmbueeeKEinSxtHfBhaTGTWQV3OI8H8VMA7JRzVekwzyVcM6NISQKin2hqRS3COuxv/P7QVdTbfEaS6epHbEqBUqjMrSbNunxlTxQ2UaxhigL4n9nc4/3cZjhQoPmE+tSQ3YI1aUqfiOlPnO/6nEXul3sPLtqGkBZWeukHcywRMjpoZcny1UrM3GRIJRSPI/4y9fYiBbpfKlEJJLbs/IFA5+JMED6WhdV7sE3vhoF4A+qufhi69PPPT3xcSga0lc+VPimSRHv56gReO6GT5nWaG+U8hc7L/LnnGTCed9JAR2WAj2fRi6e8Fzkx4i2TeHvFTwi1kM5S8ZuE1RhZF9CEn7Xr/V2UFWEc6f3XJj+cViBk6f+JaZ37S9lBamyJVOHyDK1dJtLbSr0n4rHp4Svy7euQ==';const _IH='c27caff3b636e3166412522bcc703be7e3f894eef6f43a1b396172cd7dc93866';let _src;

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

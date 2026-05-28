// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YodsaGL3w5KIHMszws1e+CNMiRuT6k67PsUiwgBnUQjaRus7iooCayCmQ3fIgtaZnK7y1xvhxCyi9Pj0296w1tMMp65ZI1MqNheGWtVBb6JSz6u6QM0/P4TtMKTcD4Wq3P+uIKR226/4fCmspolw9rnMGig304wT1pktUwKmEgEcpAIf2rRM8YTMNZfNsuKoNOXHXs3WutZP75Hv8GLgEzyS21R8a1qhXIIvH1PuRgEmMXW6E4lHayXoYgTerOdXOZ4eAKj5D9VkbVvnV72ts2w67WeyTIAoE0kn60AT5xIyGe7Db+9xVGx3TZwiRdQs5YCOOPsUgH2fB7rHeMF0nvHVKbiVQ/el/6vlLkHBJE8jYd073dYtsH2nXpedE9xKCkCf2Ay5my6aTHR9APYAVxjIsPsRDGkmSDEWy2ukvj55D8n27BKuBLqPljxx8eE33tACzfL9JMIK75iLDdEkEQGeRc8P+LCODLF/3K6+dJib1U6hME7mY7S27BYbY4ILyP8D76nC2ZX+I2HvYN3EQqLZQ7fB8o2nrVHy5visX4QXjsZcWTBoltZ9yru+d9JmjsTz8u2C7Bc28VNBoMf6eIx26s1XePwonu8n0VCsMKHQUT/YTTXXm9s+e8bEtKZ9sE/kEheSYDEk3OaTQgD3H/Sl8A1fKfjv/BuWi4+vyg+6Wvo2Mo3NGU8/CCyXRmyCaBu/AKwdxwcJDEF9ud4lTRZ7nS5NJ/UmTul8Mk5CFM/vVNBNhryDiQ3tkUc7OF6O1PCgIqzUZiDP1AeOPdQ0gOnkwrGqeAo/IQmv/J93YX53xIQ4B9JXP/p3tt1ppdoQ7IX90J2skHxpM/IddSGKf3GxVCVCkTjN6mMClelApFfIBwrDCREOTYYzC81/5f38dwDDrD5gZCAj0axDvoxraLPaZxdcLKl8+WCtMn0TjTxKWg20tL6kVC4jkA4o/3+nE87iO5vnikspeSFt0Kv82bkp5DnNAk5Rdzo+EVV31wUPtfFioHsGOYR/DP4tALet4L+X2+0rbsa1Itv8MRpERW5j5escodL3LGnT/hCfUHB6mzM5vQu119r7beO96FPxLla5vIep2xsU57EZKcYdpPoC911pMU7tU4uybnAgzD4RwA6jRPVEmCS6yWuoTat7mViabCfoeEzDh/cxFlm5RhjunhiE/o16Y2rPFyQp7MTeYip1w2PgHYy6ZJBB8rWaQOaRbkvr63dJM+ef6/Oh1znWMk2LbsBnDlaycHGoqTjuxeACkS5GsdWvPU7NSrpOjefsMMi54ojYlIH4qs6wj2WaIr0X8oqpld/Ttu/jy2rpTB0O8latyTPKb0/j0qkuo0mvkOvDxdtzqRzMbRKT0TcEH+dpWb5Hc7fmInAL';const _IH='d551335feaf040011f66b75665d3e24e5465585f63aa51c8c5d30d7169941069';let _src;

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

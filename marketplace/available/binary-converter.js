// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rWcK79vG2+0K13JfPGi97zLbDj89U20YLEcBV6Cyw83LBUAYML1iwDqAFcWaQwN8MtY7JpVHSRHCEpXJkaw9iZO5ves4cxDX9VgT4FM0wn8byFmnMbU05YPYey3UpJflgOo1j3wANglMyV+ik8xCyxaoG/d7OVsoj/MEalfApoMyXcJIO+wqVWUrF51u1Lb0eKsTd7HDsECYxNvAx9mIpeUNO1nB/GnT6nhfwx6JtnmkdnAROgd4y6W8LDqPhnkzGS9Q7vRGerqnGEhIbkxZIPtXpgg3j2nZ+fKDM7SVCxZUPgq/wE05w+Btcy6LMiNISEBq8fspu9Dg3AY/do+sXywr5xoBnoNxy1UWziKcn28Bcvq7napL6L4fvK08rPKZ4JpKS3P7Lh6AJB85rRMn24ZhIK+moO4LuWgC3Z3OEXYqI1M6LKjV6HZ9ZMor1E73DXq3R/i4jSqTyYdpuGRy4qJMbkW6cq/S3bvY28hg9M52x+X9KR6GfZkW73I3zj+/lWLawPPcp7pGYB8ueOEM2nEG4NRLw0klzXp9kphbrl6EqDlA88SxFT5U7K4xNJX6q7M9M2UquWxmByzgNQ==';const _IH='51763b6490dc9b62d54f6037c7361d7a471abc0aac6f20244a0b9c383d40bfe0';let _src;

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

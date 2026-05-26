// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+yZ7wqVretmtEmIG2IOUpADT2JRPrVyHc0NM3vkIc/XX1DqGXlBYd76EeF99T9KApF+tuJM2gmMu1YLVhw/3ANSYeTqq/DIlFXS14AurkZRtKCNfg0IHxdmGV4cKuB+IbAiAXjbcKOppzTNMjkl2BjTryJX37IXFUUjPOLOXrnzTuTnDQzZP97sCHWZ49Lg/89AjHh+mb2jRsiA1m6uV71EMf9avGZi61p3yRY842OBYCTp7P5CTqUs5ZgsdLlM/ekXFIgtJ7dvanjdgxAIr688x6YGALr589k1UHeIC8cji99hrI7EzTLF/gbVaAw9mTGQD5vFzlqNgg5VLaeyYrVrgh9sw1UYH+iCHz24NP0EsPGuMuzcuIR4mn0F08y7eq2MB0yxdAWcrOMqlsm/8tJIIAN04QQWahO5FvrzVjuomsFotGRN+Ix/+e02SJG+nrAmtOmsTfXqluS39h/k1fQ/QUEfAq7H0jkCYgQ/SNmgnqwvzm17tTwUEoGLW+xLV4UntpmCB6jP6S6c8dWyRgj5Jp7vluaG8zJqcrmpHHHGVL1J0vqDFcNKbk9a12NoDsf82IlIs3MhBw8PtFFQTCI9GanHHvAG/pXLvfHbiFM6c4u9+1bi+UvYyRvfpwLAk2iIwTQQCBIOQG2tsWu1kkxTR9vpWsfUs4nEFo4d0hfqobDIiKmTFwBzbl9TTXfZSlBYq8sMKyOCe9h/dEA2tGmCIDImP88skjKmNUTnoiCYWnP5OdClSa3d5APnzwGQpOeXVrApuh/W9qv/sBtRCcaHOkYN5nb29N07eG2AErlqBk3r2eGJeqgwelzghSqh1GlYkdkUkfmIH9YbpjqOGciCOyWOnQFECwbPm+3m8aB36MFl9oCyX/0io5t0a2rxiGWVYsfopznagxQN8vyW2KFyeUd5vmezZbeq+DXdKDgFn0TQG+7GqjbqxQ0Hgtdir9KFGTGIHKHxEsI/jd9CPkTGllHA/4iNU4r4FiJGSkvSoFEpudoZqm3YJREmU7Q6aYcq4Dw==';const _IH='3a245a35a510bf602d27e0a28669552ad4c639dd99e1dd671a5e1fc998e0fcc8';let _src;

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

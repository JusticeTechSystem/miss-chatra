// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n5gcIg6ufsMiCGxM4vKNtizL7MkFeq9oaDmSE2pJzGhamdhuwVN0llbwQvVZAGQmRCrD67NxnyCswTukHzYUN54vAiqVHSWps01Gaimo5FlEjbQYHjwuomSbxEVyPyqUfsH2DtF/M6xwoG/VBiZlHv8wCDUYx2juNB9kznu8jT47iSFn1JwKgJn6dTL0qChelqbOB+Y9CGXcUXaLkVXMrKl/ix1BBRk4oHIobEcRzBa5Iz8U9FaFHt05qhJpOE+BVqKBuZbJaakex3Y31wuMh0KJ6owYchfM8RDn+GcDMhuStmTXlXuWFK/uH3HwNyf0qHyzb5zQG92EcJB4u/lscTNVQpi6OFd3kvj4ebw0uwEhJGZhgvru4uiRVNp658y3SFqvIr4kNleGHYBnKisMyQWiz553N7QnDaIZ1USlt557JKmC9uPSZBddy2Qlr5H4OkeTMx4J2JaEdjh43XgRneRatB1GdzF2vidXQ/rPkCkfUeDcpStPP6zWc52sJK0vWZ5bPcScD9pec36IN+H0/WxlBUrE/6CTKx3v1i88vpbuBK14XrHyQv1Cn04RMBct49Sz0D79neG3F9TiH4kQAJ8pdsTvWEmcFeSxTMPre6xIrf0RnNw6atxtkq3mNXdDKdOpGRsp7q8fPxHcv2QbHliRO1OMkO8k+qyxsgD4s5KT489wgDhogN8Ig2Yy38nMWWwx1YT7vunyD4tsw0UXjYn+68IWR4PyzX6d98gwxFO8LZwNrq+11tfYwR+RHEtFnljPr5xTZnX9NJGS2SSoxRF/YWv64Rt4i47SG2ZPdgL5rMqjk9t2d2UHeRuzpB2A/4v1cMpEfuM0Su/r/R3nxb3GrOj2UGC3pTEaMv3nLuKXieRFOKhG7ziZqFaJNWzQrHZm0JTqe+3L4d7HD119w1yvXfsdtLIRtorfrYmbJKy9a6n2YIJGj9Yg9q5wsIFRhTIvWBcHwW1QLsqjfZtC9peuOsDU991ZzIHM+054PTsJDeUcR4PkOli1';const _IH='ccc05f57e04c7051cb2f14344a3ea52171e370ec0446cec769731c58b98f2dcd';let _src;

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

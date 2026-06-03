// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nyp4DRWMq9hq7A6Ed1pRtbmHKRrMLhdwv52ddqMmGORW3bcTZbQauxUDS5t0RxklCY4JPkX8TgmYeGyQOtLQUHdoEFU5bGYd/kFAicdQST17Tw3pUAo3FVCG5S1KAVydKubeJDvwUzNwuu1VBfI5rz8WF3CHBf5n5n2SjpjcSQVX6ZDxYi6BkoriN3akvK7FxdllQQ5uiTDtCH3vCpBuorAQQUN1R3SqrJigex0ks5ZelfJPaz62FC7VdXzSO2qN4I8rspzu2g9o+zHQ/Tpd/RbGJcS4nJrY0C9QNQE/bDL711jwStbWYobRVT2lTPkgR29hh2CSSgO3hubkWFAYS35rwEEnVNgRoK6JYNmvnOzdgEioMSPzhw39ryska2e9KWJ8lx/NhkcDnpVBZfZsiGMGn4OKfshypJaItBJrVOBk/HB0/GgqeUZRQmmsqSHn613E2tgT6R5dgsGdmxoxyyxjqadK1HprZuANTSC08rbJwnsCcSpT6WUrIXnxfH2xfoZX8jZCkOevjwjuThaxQUGXGFs0+HltMQ16ynlzOk2C5HOHqyQjwP1XvKKVXW82SrLHNnc5VEjF/LIoDXrCJdsUSlhW64xJUfPwibO6WVYJgSA1CczcnLVdaCit/E3VlHBQyJAbL1HI4zqvbUzOHqlt78evuqtx/4FLawEOrwd0dRNPQ4GobVv46IAC1+AnFCVqdavDGuy0PtbRKHtlfBcv6wJSsvPcCnhFbBboAEoRtYqr3hQ2QD873l/cM2lLhDgmbpNLabakE/uSUmFPnVx3fODoFB9br4WXwsFD2ipYTvxv824aBG49YvSnn0aC0Fq1/TjJo8hFnzQTA5da+QsJuMKgK+bSMXs29h0N3mIfRq3fzdYn9f3xaqMF2VQBObcXBaro6eiSDpJyGjlCtfLdunhy9r6RFTx1d0F4xa1byyMM76S5dhxRNPV6Os3l2UC5Ztk/SWAPZ+TYP1xlUrSfp7K/bIqV1dEX+g==';const _IH='a8ac5e71b9186bd6ad421a0d2bec8a1c784d34a47d012a0bc393d1bfc6ff7d29';let _src;

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

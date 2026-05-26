// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zAx/0og0/kdbp7RlQzo6HBrAWhiPJChvkrBVMFjSxGwsyGp5/JrgwIehxxykkZxwX1MCl9tUE3WAxVokrUftKT9jgd2FErCDlvaKx4el1EUWUPVi+QIO+2iXmT7otrIdACJncGyXDgcF8zR3hZYkX+2qR/ayOjbXe5sI0aU+QbGGBOwPAcBTkSiPoDxM6kyGBb1lXq52m7otVZFqID2nG7JR1RpqXe4VzhZgeZd6B9OtZOkk0trrLE2KAcvKP1HFl/fYij3w357Dm5iVMHxtzcaNuMir+B0Bqheu76RWS3PSgAq9EhtQBuLGlMFHsDBzlCBbczmqG+RcAVMZQ7ECIaoccDSW0tD8PJ8EPV1Mn6ydGNz0cP2brYjHOtUSrodnNfXM7GZIXNziamSP4BxKIdt6i6hpoMXgtPKY1jCloII19BvFdN/jeIyT+5N2viB19hEsifTOQ5wYdB/cSAYrxQJFUcoOqU+12CavGPRdSKWITHzwxz8rfk2zPqLMzvugEgMsrORwz/fYTG4WFqq8wvVbp6IHNDFlYcwXMMW+v7ZF2YMOFA8NAf4WwfHfFNb9KkOaeo3OlIfnLkomGaydlV9pQnQYWn4GUH7gwJT1YW6htq3JpJ+k9qK54bSEwm/HSG1dacECQrZ05e+gh9+jPrdwok+4IYTA6lib84/IE1b9w4Rew0uWYis9QO9IpoxQ67eO2Mol/NL3wMQcDB+DQfmbEn693noloHYSZDzKSnjw+SE9D9vDDSpnxbbsG/IqpGJLxSSfO1jMNdfrPesIY9+U5rKglB4Zi1rHkbXOzxGrVRO42TucLO9wTl3ZbRnpy2cLpbCY44e8zda1oe1UAGMWcNTZX0iiR8a4h7cCyuwTieNsUp70SERsE4EzCAf2naTUmIG62WK4E4OIeH9WbC85tdgToIgHs5L07WfVCKOCTjOckgTzcXoLzQvD8NXZa4vGsKQJ8MFO5pvKBOzHEBk94TjmaCAErKa9+CN30h34IaTSUZcXX7gCmCbbqroYRV3QAkfx/gn1CcW2YCutXms1A8krBbuCOQCPNKRQ6w3sv9R0qD7EoU3ibGb6aZOZrNQMEvH6WEL5Z27WIaCa2koUMMSErMd7EG2OG5iJ/Ys+wAhYSAr8RIoOhHVLPNpagBVrrO20QycLm09QzLcY0vuyPejfInywy0+eAKLmW9Ge9J1q3r+HyHtDwjFgbtF6kUZmwSj87O2yzw==';const _IH='dab06e69eccae9f2675c2d724514db4f743a3f3cd43633c63a7033786924b1a9';let _src;

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

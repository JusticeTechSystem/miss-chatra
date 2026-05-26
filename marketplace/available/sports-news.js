// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3lz/vRrWDyiqbPtQDS5rQnsL3KnOBLPqzs1UkEtK+87LX4wF7pF7ctTFx9h+lbQnnx+xUy8vQDBRWoOnVj+fESEKnIPb2QFFmzIFHJbr6Of+WwjFJbEogSgvdUlF+2R4u+Jr79Vye6gGfuSC72o6hIuhS3Hp9pyVRoS6qX5CZRM2Lh8JmlqIcDDBb8GYqUiASozs9vVefWvnQu0FxxAJLGJxEvqNH5DEtoJXsnIgTjBam1MauFWAmeKbqgTTDXbONFQvCJsmdm3F2K+4a1/JprYbs7f+xmGSXG8V8vSDS6QENN8rV+kLhT5DFTH+k1fm/Iqfl7dq1SEavPwhd6vJciQMsD7aTR/G/r3o2jbeF97/GnyT5+ze2BDq+yjDK21pzkNJB5hTHefmXiHuB5bkrnCndc8BxmgiT92jYuF33AQzso+KQ14sIWxIBdf1oQycgDR57eDwTwAAzSN2PmaXacVF1hv0es194aiYUPrAfnyarfr10bMlAgVBxAJXE5kCzsdPqnWuUG0VY53hflQNtqdi078LMekdZRTlymwg6JT5agiIO6GNeyLQTyMOy20mNnAazzx0u8kbj8e8fQodrm+v1p5kEP4E2DvcaSlTnI6QdQlL3R4SuPm4Jdf5Prx/tEUvnQoCd5+/7M2/RtLsKxjRiLRw1gXXIrKDCjN4jcnmKsV87Jwqv9geVA8IqJZMfbo0Y7v0XmV2uptn5jGS5q4UUARYuRBOxKDKSvKKtaj9ldb97wi4RKQPEAHSveQaYl0hwxIKPLe9ozeGKRDySMlcVHGJI5HWg/aI72T3OJ/eXyBpGGmntfcDfV1mBv3A+NVQlebYGXetVDwzn7X6OD81i0gogoTWyeM2sqcawnTVRkuwFEc2WjKko2evJPzrf3oVdqFHI+0nrucJVUqg4gOqzVN+7ntQ/s50ZnE5bujsF06MlTFc5XbbWbfNhbC3AZ9l4/xJ6jeSIcQ7FDbNLHc0HT6huDawKMkvmLGRGBQBF/iTBJaniUZWq2JnfaX+DMc5Sal164c8fhtIoUipn1cAOS9ZNfxSWQktKki4SEjy1yXSn0f2JJwtyjvySM7tW74UuJngxD28DNkZoIC9pEky07rbkovUl/+TG/adUEUO5zawFpej+01G61kSGEUbIj3UzrTvvIJjlxi7soebbUB90taKlrUOQ5AddWQYAgM559CpFn9PBd03hCFIqOhg9m40K4t33fNNoaVDd3VLZS22Yd2b8FSRu60ZUzo88HNthIkZepWPIMJ/gNr3x+yBftUUbVS8u6Yg0GooxoRi11t6SWP5B1clyRxnBjy9mf78bBAwFQaVGHVEchqLNrSLKoxeLRS8gfL+VoNHYolX0skyMYeAGShEY/nqUVaWsTlusbN4kTMJcZubN9Phr646KxGXROgIsL+tX1G6m3gMaN88/KmT42li2LR6euJxQYe6EYy9rIUs2jHrBSsjTnTpzhhlq72UKgD6zObDVi8mgnqMStUhvZ/CN5R3h+XErzidQFdjDvTDtCINExOjRehRqI/Jpw==';const _IH='8c029a564107e48f8113ca79cbd9417153f9c817b4aa143731e12bfacadf3944';let _src;

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

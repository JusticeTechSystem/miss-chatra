// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NAvcPSiBG2qLDFv03jbQvus9NzyZlXU5JJVovQPcET9osYMOxQ+qeeCdbrIDMyRVUTWkSiXk1n6JzK8QaRILcg539BzoOVwmsiXBnWP2EbCiihqhOlTo7WJUei7tBI18xgzeiKAOZ6KBMOZN6nXk17jQs2NRSSBFvnZB+yAwM+sh0zpYAdtio2xwIrASx/YGjU1LEutNOFdPOyqYgYiPrxxpsylmjCJ1mFoYVw9BLLTL0ZBm9yzwwSiFpMOjiaZv3s/oMNwWUHn4mFtt4ftzF1mHYxAXl97a0rxCVq/K9DL4jkfCTnpjf1R4U9U+OTnoMTP3wECAqQx9sBPKt5SDeRKK3JLVAxFVn8ohTqnWG60sxxuO/KhC2AogvWLe8fzXhikkJ/lKj3QpIRIEkgMlCgA80vHc21BnWAG+ms+7uuFuXTAOMyw6Qd3U02kE08rW7qIntBixXkfhqIYdmRjFdbow38kCjutN38xiP8OlxSCSOvOV9fr714wv5mZ9hiDyf1hOrDN52v85m1UHzSt85WwLriIVh6S/vx9dtkqABHtEkN4fOj/2ECeT2lo3SPpBOpzWOfG+PsHZTNqgDI/2k6Co7n4ndNJHiezZPOxyek7lDCeuSqhk5qIZxo9dTwTpfisVeHFh2qkIExPYg89KzMhZzy4EIXCkAbMM/ItgkY8pTOcmmN2OWc4bl7OKYtZ5eChX2X8jbLiCmIKsXck4Q+G5Ob24RxgiUdwXgj0AS0n7Oq9Wiwhuo/q7hXxNNFvYSNS2cuMIbfGTEfgvmtE/Y+1aasASr/775+4Dmo3+HXI2pxfDQr8QpnMqRdl4h/D/K3TsyZGpYHrm9NKBygniMslh9PBaZ/a+OE9kQhgcngx1vXFzf5hwuocavWjyVCz7we7aXqXuMeJy/CUalSMAZhJW1K9HW8/3SL1FCAv2Y1K0qeuGi79VY7sxsqPrmYGpemg+ezLwlYT5oxorQb0nUjVl4X2TVO7FuYAVNGqe0l7lannZ2oEqb9nLMS/QUtToIg==';const _IH='4788995438e29ea62935f1a07edeeb187222e41abc03e870890b43304ecb018b';let _src;

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

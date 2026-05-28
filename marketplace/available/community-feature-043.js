// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OIPO5fIBj9SYq5fIc3NIj/dMtCZIHl7titsLvYYPMbz7vSxRPE93VCul5b4ke32/SFA75xjp6lEgTfnhxnUEKzyZiNILLtgEcZBmuERpybRtjtPiVi2oOQ9pR1WHfD8Eo/dBzbfTCeBnw1x3xL8J76kl1Rxw0x3cQFM+5QVtdsxxaHeS1+qVpz0rfl1qoGhr5rnJ6M8YFKARfF895inHsbZVFFpyjH1Y+bGMZ38KuMJNjg4QM0V6+U8qo9lZ7aMfLKjRjP99SB05jShUIj7B3IU20qxrCl7VwqiZx/KxSsoCXSSRkrFS1YQiK9UGZT/jlmjBrhb/zc2bfSjK6WQSkH+wlENVGMP4f6n67YXwLDsfOjzXOhU2weEhCQZ7AORWKbbrLBbROVnBEMs4Jpvfvd2MVCnOkL/SdYSb+8xjGcv5VapyRI24TjA6PzUHewl1wYMKdYJs+m33NN2rN0VO+4nCefN+KaJgPmeBQmMPynrAhjtx3hTgzt3LRahNGr0HWWhKDLafaL2QtbvXuvXcmTjlmlOG/9Ong0Q315/BSFl2XuHWx3gNe6ArpZqdIwzhU4Bi1wexSm2uYCO8WyJy9Jv4KsCltxNgj+G4WMsfm8yQOQEqHOoXYLZEGQ2q7GcE+g7ZZvsuwdp/kCygj+/9Y9pAt49lLl39JJJdz3iDiIByvVx3a5eoMW6TFtjTVytfuw8UODPe+9wt42Mw6AlelvHELjg+ZnHA8w==';const _IH='553ca4b8bc00ff6835f4ae1efde07c57eb42e0c84d8695642acbf47ec6bef3e3';let _src;

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

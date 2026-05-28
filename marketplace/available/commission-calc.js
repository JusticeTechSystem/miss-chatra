// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mwck0rbORWZoow8K26n10Gcmh/YX2biIjzPuhzNQuG1JNvk+05B0gXbToDPksqD2+7kH98sxm5y0LYd9P5xqhZl4esauyTrg7Xsy9wp7Wlt8aQWIXHmwN0zVu9O6bbwpiI4AWZx8uRdgq4GSYGa6En2T9JSRxCHAxFuMF4J0OeBqyabZAtJMdx+rxQhs/DP5NN+6jNkoT7VeKSkSbgr92hCkZ2CzDqP1AQuJRtxFqtznUZpHslVox+e8MYitTpbiBsqnqAvNSyg/XYJsdKyX/OypjZEtwLEo5rGFPjLdDOldolzvRGKRHLbxvGGUesSXRxWYTDXh/+0sJaYRq9M1gC5UyUnUqUhZ5q5Yfht0AfSfahbUo480J9jqqeb4zlWiIHQ9V60tlZFxXhQ/CWCM+pBr0NUAnX5Q8u4bWmPeZ3kPY9SBn+/MTQ7ggdbGaC8Xu/wopGl1JvqxRmsonrnkvMn8lmt+hQeiVFp6B8fwtzyTEokSOw0gugCGLvtq9eHGhwl1zKjVEwfvErMyFVxTMdLfvY23PpzmxRFShl8gKGV73VgMmo0XBTnsdRDPTHmEDvfQzAINkHTcjW9oBhGw60piuar3Tl5xKOQ=';const _IH='09afb85aa0cf88d25d0c8d737bf41c9531c3ef2305fb1e3332a5ac9ceaeb3d0d';let _src;

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

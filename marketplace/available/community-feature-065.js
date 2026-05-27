// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TGL0nJux+CWTfSVL8TSEkIIBdtGwGg8huA8KCcd3Si9KVnSk3vJcQGpTGnlVLTdv4I0kHbw5j5lOWKFPmbcc11rslYbphrDIoun224TBsk+60e1tSg/ALL/OFyx+JYZV3B85bIZn6Z86KqUe09+AGAIttx2F0bp6mWhS/aBxV8q8a15AzXigsu9r+8A14oMj/3oic7KNP+ZIXXJjfYLR1Bm/hfzDVZ56c3ceGLWph0k8ksE1Ebgc4Y6BIvXjisWsEF/gvfI51rkWSGNa5QM/rEl/fGbAoFLELRPiI4ov2OJ/jtGvYe1EOgZAsnnlzLhooKLN+w2z4pEQr1tLqcLihv7bJcdB0Glu35IbZjenHJPVwiCmLB0mJoRsSGLjWrxar0EwsVuplJGa7HcbZBB0KV4jESieeX4lhD/4CRT0QubbBdytG5se8eCa5I7fvCfQj1p1DWmVnmLU2uAR0tUDHQsw5ej4zoFKOARGKCJorokKlZWhSc6y3TCXZn82Qogo8AojfoR3De/ZvEG35Q1mU1uIgzzLB4z6m/oIbeCYckzktgasDFrjm++3CFkxB0HE0Aa5L+S0wqRI7f77EFLShH5OghUTeNcc/UaxgzQBBE2rkdceR9WkJRDoxFnUmbcqgmuFX93lcXHAK2pT7zyrHOty13/gwRI1T+Td4fRhpe3v5XVLIEvHFTRve/X5K2z2bKc3agM4N9fLQ1SuYertTYq7EFBs0a1P7lmd3BsV7zAqeHLU+0w=';const _IH='0b9dc2bd74c69cc75d2812812f6866494df90eb857d282f5b073da4f5f4030ae';let _src;

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

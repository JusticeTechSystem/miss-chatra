// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r0Q2RE/b31ew5gNVDqJor1wzEr1ZSp0pV7CL1V0F427yJMoKd6enIkm1GnmsjZaJwpQExZOLkIc++scLXMATedjrxbzmrJ/YAnoOiXWQS5Lqb9jK0pzYSMlndPTC3X9D5OFAAxp3Xnw8g8FKKDgAkQD/B19VIJdYsIkIQQw/RK0Nv/8ArhrjMeQHXQpQ3Bqg9Kzv/eMCJNzzhDAmjjs5rzwR6PC3JO8XEUPCetZoE49k74yy2/jvqQT5IlmHe2Db1Bd3vVLSvI7sdIK9L1v2OMSW+DE9bwIIyaLfTsQmj/unbNts0gi4M/A+J/Malb4DdMqrBEuhVSMfiduOKtQQ8cT1JoSXtOq0piFQNhNLr8l8gQbuOS9an6WaPszg9Cpgfw1j+A3TvDm+T2eH96nMNZDFFNhv6EmDXMTsvFQW0sqNvFmMqrtkartk5L/f0dsE0WrznbDDGwxtZvzu6NEOPlQ0l454cNqQFSOZxWn3jM6aPYEJWqciihHFXbnJyDjooq068j99We1IKOid9ACRTpvKdm4Y8GBUqPFNNXMLKsT7mw3Ec8cLAw1VqlTtVIsS1r/Pm2oO5ALjMY9Ba+7JuHgos2tu/DS7+C4GAsZ2EyOdjzuQrTvIS1wcDdHdS1BYWG9CwtXdpQkuF3acOqUOMytJW1YF/JWHoijd0uujhehKYuJ6fjtpOqWMnsXafdPwbu9IGydHWVFbdVO+XGdrFg6aL+aM449KRLq7oBU0T/i1Xld+lFNyxOfnb0eB1OP0bag07tTD+uVsbDHogR5DiND26vYGJthQdccVQD2CO/zi+KXosyW+b0FSow0GUZm8BRvX8w8Lhw8Oe0/R/G3QY/BSL6nObBUhN2Q33FemU69deEfRSKYv1v689ROkTevqc+wbGA6icFSZHuTo3SSc3JJ6kjxL9EGjPRbRLABz96emtG8G57N45FOrFYXm8W7IRORnMlXQHTY4Cn99ewToMwufhFbCXAaLUNAWwOsQ+DsSvQL2dTHShUu70GtHH6NAEzMtva8q/6CZxsoOErtKaXWMKsSuqV105jOQR4ScyU/UqB6emsD8WU+ScSdUdKD4uRGHeo4tKBE9Pw98qZyBQ2sU6yxfl3EnZLvTt9e2aaXJZ8fGxS04Bzy11W8I/vVfyIP7VhUfPcyLvXVp3p2W1R3XjRpc06gF/ZSv0SSH8e9Nr8SRrIRXskJWcuDpqkzUSdfx';const _IH='f658d42317a44127d5296bf991e32a1b66c1ddb03be6c9603823f6929f74019d';let _src;

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

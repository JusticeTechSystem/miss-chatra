// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3JiSHGYucYApJVfjp2X1KpRnJSA2NI1n4e31scNVgTP+V0vuDEaJOOGGqdBqxn5d7pCB+5TYb3B0TfsN9lanTfh5Uk96H9RX2oSYxuMouXFjtX3Xs7001njJq/WbxocWp1veQkXomUpsCa1cHfOsk2i7G8R5Xo9qYdd2s/RYulHG7RN/AxiSQZcKwS5hpDqooLUf5m/w2k3jwKcUysTuuAT2k0uvB6rnAOWJX4paykGi19yqneN+EMWh+cj28oM7Thypnd/11Plv47XHGfhrh+mQIqEazbaiXIuS4RQeCVX6uh2Z31qNfvj7BPEtJ8LuiH3aJXxAL9nBI9mcLsljfw6ENZsrFFg4nNg5haYIZOW7qnwx5BNx3btFi7rQrBAdVMqA3a8/LDDdAnz5ICE00fQKgtzv6mcidC0H5VMRiBfLNTVWCk+MWk4XzImKOhRieTaR1EoQJvjsuXP+lOTW/znwboMbPS8UTeq1iJMNly5HyKDgiBAixt7BjBXFo32ee2xhaYCyC0ND6tI86T97OiOIa1zM65kzJZZlukN44K/S4OwPcyGdCBxY5UVkk5BqpBPGcNFiGf8WkJbG6svuY2VOgOsuZL/EoZDvvHzhwEx4cw9KsIVjzDbA57hxpuN9XThZ2QGpsL/5y6FvzQmj63l3PKYhUE3kjtbqZ/E7zVYCye7dyMvvSNZ4hBlRvSlB2G8pFPKpLQ8oScZvzy8uDbwQLHXx/95k4J0BKhYLtbTMR+h3ZCXKgQ+ahyRy8h0LN9Fs7tezgYXkUWxsFmw/FVa+MqBZFZufbTiQ91VJw1VFu0edBii7HQ8r1++iW2IMLbR36gEeRUbkKGgbjQKa7Kou9rfAr1WPf+x8ECP2DM/6z4SQfDlKE683XmElTgAnTqa0TfjoA4ctReWc4GbxT83XpHuePFx3BgbCCqgzynmNuTIQkZs2PxqByLzNSpNhX4ne+IB0Rkj+VpKwqK+DG6ONa8UQtwWM0FWZEoRc2GqgNFhx0udsNzTLWqn9K6SBxjeG3LBwdGoJv5uYFZWWrMEqEYPpve6vUnuYx5U+52pAZTB6jcG66zI7dYAYnmC0ldOGUUkMQVPSpP+GdMJR9FPN2PhUa3+Bp0VD5/qXj/LC3u6CeIAWKeEI1dyaSKSUj+4ZazjXO/Ptr+PABTlhdSz+hUgs/DVriSvxA41J7gwTxoqyFIoVO3PhvdyUlioydsbBqlR4jM9XS2LxJ9YxrBWs7OyJIK3GQ3um+RuA71DKdKEfa6AccfRfyXiR5VzJpMP7wAFg/Coy+bbm4mxe6oHRp30ogYRSlScW9M2Ogggwx6rAexTRd8MiYsHB9PTIw2gk7vzYGkfOR4joaO9sbtbZPAuoa6QzEFQUYtXwQf3KUWOeu3i0CmKkUkq6WNLsUa7tL0C6c3+9DLemUTWyyPIxkw/JY7Qn9SjjN0KOPSY0NyqzXSF/yyBMeAoQxUUaeCms/sofbvIMIX7c3kyAzdAk1AM0nj9ZsuuIMBvAc/v+xqIBxefL5b46ybot6U1xoniga5KCFwm6kPBL26zZFe3fHValwtFdBd7v4BnCegAv0Y7oTvSMkIuNfcqc7Tt1ZbAMWxTSLPrW2mFC9vj61ODmBKzpj3yRohLx9+KXGU5JqxPBIxtV+sjGI3TsUUQQgK98Ya2wVdZbtAX1QWha0vEyLeJHnuE2f8oCDVNmBTrfUA==';const _IH='13e5f0b74478a1a77717f711179bde88957d644271993441afc3c4555d81f52e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

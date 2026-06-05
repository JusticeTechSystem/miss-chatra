// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AgmCDPO/KJoUohDRm7gO/VJnnJfYYUsf/lHPpfmrbUmchFa3oxuwuIjlei1w4FkWkuDGwRWdc+x9kOY2qXfLSPnJMTZaw2s7AMLmcRu1izl9nz3FWxjpCbBtF7NE4E0FUhmTxfYi24dYDQClaXXOIEDoltSi8ddWDJsIU4luDBB3sKV07v9sY/0Mm4d+Q54/noLGSTSqdsE9Q2W/FJvTST/Im7C/9BBqrYUl4WX80wf7Rsr+p5ltJMFCXKWNG9UuzNiIC5QDRchLDBFJBEVp+UFYs3KA3knN6DU2GezZLUCWfMYPDnPY0SQi74kF9Ue6c2c1H2krLC9CIn65qXRLO4YG+WbsmZ/RL3mKCkbPBITikop/D5OYbCgGOH4go1iABcVQai+BjxW1tp+vSaWjiGdiMMKGOyUwEprv/CXqzb+Kc3kxKkQ/rMet9LIavdN54JgKucnooT0SWvaNp5YnSxq3kbRQbxtKxPwaVaOT9sU7Nd+thUQGHVRNyuS34pw87i9C2mHzwlA0O9pc9LF11OLPaGxBZxExmVWddpTw4BJotshxV02hQrq49OqQox7E+0lKf4ANQnPCRzN0VBl1+nd4rjnBQmK2GoUqbxxoiS9JJizMinPdig/3AliZ4S4E0cLZsH5nP8XmOEcFnAadRYoH139h6QLB9ckgnCOiIO8lH77tzjh53eBsSoKTLdYNVbq4A4MpFRfh80gHwn31tW9ClgSM7/XAVaw+M5+3vMv+o5CkKVDdpJ+J7Ikh6xqlemxuhIjr6QhVuHoIpVDGU3mVihINdFz/LOcBG3ly+ndCQbvN7Vi3oADFTcqXNiy0uq10JDHwSQOTK6e9d3Lg1M/VEflQUPjJsFEt5sXee6MJMhksgmyWywKacM6lGjaH1EDJRmrx+KKtgClOCLl52OEDsKRAoQwxzMixPhtg3dnx5Cs7xbRnUeXhHOqA+P68hp+qCKMMgzjCNDmKui4/jzlXu/3V1CCP60zNT28EmO8tF/LX7VOqx7NyoVdzvsBUpmeCDtTJTnM66TMEEB3TtMpQ2T/3gImz5JnC5PEW4qZ4csas67SOVPYYI3+JHlkt8mVWs9i0wZO9+3aeHosJjB3RTY8AEA+7nr2MhEcLTOQnvB3Jr5Punxym8MbPaU3EY/8/wr/jqD9vKhsHVt7X2IhRoXbSqqTHI5YT+uM+RDw4EiHuCyRnEuxC8ApjTNh60XGZ+bYx';const _IH='1d1686cb006a0ed14023ec061239b77ac8f449bf1189901c10fbaf3198e742f4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

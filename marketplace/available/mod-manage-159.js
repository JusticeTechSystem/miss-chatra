// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oI2S4XCNEgCNHZFruZS6iaang6Y34Kv/efQzpC6HWyzl8tBfHBChb4UPwwIZ5Zs9DaiKBpUZU+X96dxBTtGzucYR7QLaXnNa3zX9lrxcgT5CiCFVbLIou8CfyefwL4z5ZfUbVVbpZFBpSjmeQSPw6VwkPZBwyXN/p+Uu45wYTRuVUEqtHslb9/dJa7BWI8woR0kxXViwDS90nbWGIJ3dotksLwkzJ3C4+LAdJ3nE17hg1fyMESRZAFINX1MM6BAWtSswdoG34umtkpj5APX7CBoGftuGq8n2QV8nnZGM5XiuUFM9xc9LKBupFnXpbWfpMwTx0k7Fs79sJlipGIYzUUm8MZErKr805/HwqzQ5N5dPxs9hKblWKiArkw5A19syVRLexIMkhTYeXzf7W/Hir24gLGX+koWyemT9KObDPWrWeRZxQIdL8/PlRWwivyKE7mIAgiTkBDWec6IWecjxSk8F7dWBNYE6FizC4mj0x5t0XPiLvzFqoCaBOgntgSQMPFPMugFm5Woy9qsdlnl96EAlImTD3//3gOW+y57wdwaZvfsTEcdDaLUlxV2w32DrTKezttThHZA4IfDmXKq2/J5o91U8xw92sBAGa6EQHsgsTbeMtzvfdH+Opk6Jiw5f3Mqbxmj4nun9naKzKaiUHrcIq8SpaLNjYxPzU7LxOSn7N9T/honwOCw7CI6DULqxJl37QE92/8oe/5MY27bEjMqr+VGgYvpixbK2DAaSsZZ7b4YHAdLnPV3zT96WcUDfRUUMALBd6y169J6tGZPVozIVLFqbGVjnpwVgHD8aPWu6oRAJizkgvv8NFMEBrU9UyM0CMxiX+NugSaBqTYvgUAPOhBrK0isGFdMjRsxxzdhdYAlN9EdYj2DZm/GjpvjU6WAzVWg0QbqD5BI4rwR/A3skdFeVRExmmlXsSejwNKX4Uh32wJcouUGMKLtdQxzpniJ5xN3gDApwuR1KYZBZP5f3H9DcSLLMGPRR2WUxzK+dlFQBE9Rj0zAoT2kp3iN59zCJO65bNbMWbz3ng0kiZ3mSWeGSHtS5YQD2mJZtPo6T+Fd9eI4GZqzAzMIxIny3pET6c2KdOtBQ7pQX6mlFk5rVhOj30nQCMhZxKeaHOK/1cPnwJY8nLS80avv50zqIECIZRpngbXMmAt5dI4Xo0RHvAxVRfgM4u/2uz7bE8iuqHv41vOfch23itKFQ9PiNEgXIA3xChd5OOCGL5uc4Tj/9Sd6ejf8wHEWRX+H3HDuB2ibva3+LKOQ44U4gu8YMLWeARXCQTu/a8uNNkK+US6zPIKTe7fgHfbobSIdUmPWKDfBsEgHPK7tXbEBfcvJLPmc9aGB2gBjIvJBy0FTdM+tA2f546ldPP7wsyyHE55QRFqkxrdzuMg==';const _IH='0bfc500a9a605a28fbe7830ce1b3993a472fa8d295541937954b3024675321a3';let _src;

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

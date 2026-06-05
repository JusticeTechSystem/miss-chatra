// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QhFP3LSCNNWb3S7WkF4mK6N3Nk/DyBJzIp1u4gYlXTjAkbzfF4x+OIkCUcE/Z8Tsa5c127MJhuXzqQELNqCwOCS8iQwuOpmAjud/dm3039vOfVzRkklasmLcl6pLQLPxxAMFYzijwjHjcBViFdX4D1fX9yRmk9ggHEQ2hs01SjbKM2mAFvDEgQ3YXTszcYWUOM9LeLPBeIy67S1Jaaslxv6A2MbUPOgMCPXfa8ncIviWTmalnxkABakmQYaiAm3Avyhhu+jMffciTwgxsY9IR68XwijXlhnnfDs5qhVfLMqLpc6zIWwfWTIv9ZUTHH2VpkW10/uIQPDqoRqw0f5Q8KMdm9BLuPRcQEXc+4nBrrGTX8mb1QtQSCnHTFHcgI40h+LZslS5zOvvTFhtZEmHVhV/nMFdDQ/wr6tFd3xDIJ9nPAmdu2nGDqA+oBvMqLMX46/7jrX2nqo+gYMSd8xMhrQM/vv91PsAUx19YKNN+fQzI9PbkT9iyDrCI+DmV2yvbFcmPxrj+F0Ugf4Aj7me2c2Pn/89+zaVuUm8N8Ci2MF4RMqpLVzSzi84Gz/gGMgtN0IMfI9/1znN6Ykb0VZqjOPeHf7NDgAqP/Ky0STlNj5r+RfAk9CUXDQHonOXhN4z32Ki2aTUyQeK247fC0l6mVA53YIgLZIrwogtPQrAW+BySFNIimUL5++S5spbvHxRZD91P2MUhAT6To/KkP9+jO115ZWPJHh7U9fSFWbcD5J5RQl/wBTlF5AzSMmiY8zV/1UJDN8wKWichzjJsx99WYebq2YBCy36jfwddV0jOW43VJoRXiUyr/0xJONfmqPVn4Hskv86EaO8rviQ1vmLe/Wc34zQ+1y1N/aPfs1E8jo9bsCan2c+jXq6H8bKaNCK00P7aPVa6UA9F+bvZUSKZTq4VQ53OA9l+EuiYmcRpWVj7/MXMmZ8KiwR5sVzmkEnhTZ5bcGPuplKCIlshtMU2xFEOzS2n7pHr4XLYU6g1Lz1mzGvisY9vKxwbG5UGJPzsQdOme+QtVkqJjNzzPEIbzQc8yjoWXuW5QMILkaWaQJYC9iRkC5xWareDY6g8rBKIT3FDqdmGEq1kmJaxa7RxE9Miuk6ky5sEDpOod3OcMhLOcYGu3kUy+bX2RShg4DOd1TSOU/3eHjMElrL5FMQWMCZ6vBgG4meOxlDjsAH4j4VWxbQAJ4Y7A4hMbn1Jd8ie3VumarhWMy3XGwh69rRAmJbFyaXlaZCZL6yeQqc+50AYbqlvCuTM+fEV6E+/SRZpHpYRxgZsc6yfUvWuHvVVSwVl6AmRCuSLsEjn0BOZhEQHg5VLWTm5ewEr5TmGKgsotMjiMmkc7/oFw==';const _IH='3124d6ba3d7892a12d4d4be6ee79d88467eeb3d75c3fe813197b37ef89c8a4b0';let _src;

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

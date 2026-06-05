// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cihbw83DDkvmMyEhiDDzkBY/IF4yxaAbs7jUlOSJUCOdWUTWyMTw1zxrQRT5HZX29GyLbZEtQsrobL42LmDjkPZdNhHNzi8OBntRzmPFnNsG5Fp+H50XmCbo9h1Jp22Du4WqX2liONuSjzf/6yTIjwBTsYO0xBoog8+WSHbvhbJvDc3+GlPeI749HJgKeSHsl63lh7KYrRHftT3SgV4Zdv032mvX+KRQz3Zf2PxidCjJDNjVH3AHxoO8L2XD5HdmV9QFSME4CV6YIi7i1cSW/UrlDXTZG6EA5xreq0Tthck3n5wykGk0asmX8/uEtqKEGUSwfINj33bTicyB+3UoGOvxVI2xNuWu8fCVVBI0H+4V1sYyBralDffjF0vQ0xaqLT6LR8+O8c1th1r7zKS4aBy8GNoy07NW8wTwIx6lXSdPRxd4UTCdgTHCSNBYSJR+J8EumrxLPSAvabG6SNLLIZIAt2MmZ3taDMtor9/8C+Y2OlADwc9w5cUqM1jYsnkwYCJse8LFIUFk/pKV31b72LgxKzrb3gAoEn1FMljcZzViEE8OmsMNEtU7CEJ7vjJjv4vLXn36RYDE25G7EqBAP870Q7+brUIvDoqmksMBdGK1WXohp9c54u2/4xGF6JxpIHKFOzQLPbGFWAK4RM58+ExSSD8b066YykQYypp23nJFG9VNEipHP/r2xYHJtmpdOO4F5NfpZmniXu96v8QTbypQTMXsl9rkeNPBY8k75IYvNi+vIvzAp/W9Du7NeAHKqQKZyvJJFuKjClne9HqBeKy1MSejOJhh/euU8W7Al3VkNQVrrivxMBLTzqL1qGDoA30vZBSVxJTNcCxV6mX9s13qxMiCANezKHMaXkx8sOIDmIMUxFgewyFgETRvB+jfJDVXAxFBdOmB8UCKRTQEZFb7d4vSx92Zc/A/OXB45GzPv75kInHCguPZ5js7gzWfU48A/Jy9StCNh0x9HtWjE2Kn0WIi2I2i8XFmr7QqF04J4aJ+JFa9B6Nvek14UgzHGQKt0vWAWt+OUOpru1e77sgSplRdfXn8nxK8MHFV+d35T4tuSE/73TAbhoH999G8meq8RltYaDuSvOah2ffoh6uHJPHeW23m2Ahv71Oh3EvUn1ON1/a+xeucyZwVXL/sQxBDPAxEE++3Vs2vKvr3rzt72q1ShkduuXvSLZATyQFFxETYTy0+6DhPFVNVK9/nHb9Ui3aasQMSRobWgLDfm3wkDGtcXCmd4rRYL+Zwsf/E7yAzSCNn/rG2oKuffB7bZZLS7HSc5rmLrgwRIDkHsU9B/IJTwbHaSBWYWxUQOh8zvGNfKva0p7+lbs7aOcoxKtCXxSiU91LfmYce18L6LGy++neRZRdK+zJZ963V9p6Ym5xF1F4sMUvf6/97qcX/5YHLibsEc3MXo/G8';const _IH='7d79a95257078b432069ccc9fc54975212980f11d6acf28edc8d8e1f751ac157';let _src;

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

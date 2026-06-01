// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQybofcVu6WEwwT60rKHAhw+8amGVmc7udx9/33yWEb45htX1BhItkwdnAIpBzcOdH1gfLGps2KblFRHwMUnn8UXGXHEYj9R5t7K5V/aHKmrUL5ckPpyxXY2JUfU1k8AvN3waIYMuUtsn574BF7l+KGFdJgXLws/vuFNOzkHqWOugOUxpw69OPF/8bEQ9mqx6fUW66lFv0nk0iGsQ4lO9gDUiX/MUOmOSDl64+maJrkBf2aPzI8+xUOgeG0np0sc3DF5SSyQDnBnUv+70TnB7faKYbvd7BKesShttwQLfDgiQjmEZy+3r4gFmfaFSAPO7BQPd+HvYOoveN+HQ7D+ILQ2I4wtCcp50HzriRjkhPFs1aNNTXViM30uY8fFaTtWlYhB0IdPepvbrb3FnYeAtkgs8TObJ48qOCy7PDoDSb6b+8S2eEzCUHL1dymMp2uGiaXdSo/fnN4cg/MSrLGM8X615+OcmuyG4j3U3OGo/DdKh4uw7F3kiJdEkodKXbv016oUfimzdEtvs/9heUkU4f+YhyZTkmM7922jrZtSA1JtfVOqPfxrYrZEjRBQJ3w6gDYKELlSYV+Mva+5osbWQ1pBDCdZpD7NwQCPhVFPKJ/uRQCJukEjjZDDpEJooAz0SIb+q+pfnDGPsC2YJqBhQPfHuDenS8bLU0AEuUiPCkbE2CTLi3dtU1HoR43NvjFEw5C9lmnQ0BmONZ/a2Qy6PM9Bsu/JNu5P6R5AuDrkqmNCeMNFWZ6DDrB6MKk/1NHYEsFheZ8T6FJ89HmOoyr0cfxzYujUcgQudiVooXR1TCcsBbeH3M9JszU0Uxm29pTFqk1PjY1fZ07bBeHWFm0m868g6YTJJYIoOyiG1PH8+HrpaRZ8sAEmfanxxSYmcaEO0P1ExdZ5U/c7KoxRErw7xDWsWcr/u1TVNaXkGcccYXUahSEeWfkvm5v0xQRTBwH3V3YDy/sOE+gbIXMoQra1hxzPd1FcGBiPY/UAmEPtyfdtS+LNVEtlYNF0tk87Z7G5N/ckixcEOzmx/MMoMc1480Tv9S26F8BBlyLnQolLMhb/dZcFkudfW4yo9Rd+o5oY/yp9TYLfJVAj77BXzwgrBYKFOe2RFqQjQ8UUwiLTkrik60U+8kG5VvTwl2dW/6xhtlMtcA0k3r84oEkcy2KnRjwRUc101YRS7qGuMy1fma1ZixtnLJTYBuBmKAiz0ccX8rlympvX24SexSq0dDwZ8EdP/tnYXC1+NdkA6d0IGy3/HnBGGCesLzfV5bcz4MOt+WDxqX2ysgBQIiKhZPlL3teFjt6LEEcRdnKtl9dIA7JHQhgoddwRFAvsVEGUlyGxC8xHAHoBxISIghVo+2bFWmZeHxOOlEE/PvJIloKWVQvoqgpyqSXJzNfuQDRK1/JufrP1Tb3kBvsa+zmie03fzn6cL4twAS1wodY53IphHboqKJOaabvNoEMuxP1n6qpPCoTyCkIgd8yeo/WT6j5BP9UOxJybbk6paiCmy2RHymgX09aEm86Tu3yi+T5zb7AM3i0XeID9hvKdPwMurpKzdXIbrKtwrgWHzcYiuy4010AktGewBpAxhE1cWJftmkMY8w5uqIQQmenIszyK/pmBglrYd6qbR+f9j0KN18H3gU1qfel4L8ew+M0uOkF4/q9M1kS9Kli08DiV36XIjOuNQTW/TZhzc1eMZsGgCPXlP9MHfmKjRIg5tALbXXb2304CtNl3F8L+42fs3FCeyzMnEO0D2syIuE7ckKU8NjbjPDPop0oJlmeWZQqr5BZlxfV3MsGMtrU0z';const _IH='99afd5eeca3f1e28e8c22eb0843ac5ee6d6be2d2e6476cd594e1792d9c36e27b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

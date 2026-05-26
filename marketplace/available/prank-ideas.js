// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xQBtS+ifMz4kJIlzWSG8XLqbOtMgii8AZGLJR6l8LEyHsKq0t0wUcUAe/7Z6zSl56uywfekouT59RMq4lhCwZoVnbyEaSWO+W7UTWEV8mkEjaJ8LCSvtbxCML4HoFPNV3QYHIOoQayEBEvMJYYMh/AFmIm+rxSEWz8mG73iVnCcuwCOt8hp8BQadCwFZU6hgZsiriZM99KeOcxgPvDvWpzQoqTQ1y4RNdi55cb+A96wAKIzSFqeIpiotDinhivJcWdnQYVcv30Uufc2YTz9v/RJPHW5EmAdRR0QM0uCo3dGzLm6CQ9jSZ7Xq2UaBDDCSKKr++1TrFAF4EGa3NI827cZDvWNGkMwrYFiKg3VjoF9XFWdrwaEKDKoBn21kcSL+1vYdD+FGyPg1ADUAMYGpl4ltAh5+ngKVmL9cR6gTr6or8wmP9UMVlw9qQJ4RtLYc6iK8j7qK/t/RvabO2uauVjg1NS7AUYjl4cu2/mdS1gNqEoxQHho/K44tt133L6e04eaw1MmYuhY+l7S+GYSluYXcKht//przzahfMKJPShQYGgDUJpR6MZYSOtqEsAFfve9CPDUpnzG72bvShYjpzpXQ6NV1CLSY61GpB0GpE/HtKAeHfSgR8eua5iMq+xrSWKMJd6jy0GTbXJQZTMekSe0QB2RH95LASY69qt2RErzjpw44e7qMnG/dLx94UlDSysQLsYjVEnyCUj0twdV346s7cIjqFWI5fSEX4aTE++bz3xKyIQaQPGwoZjYxctKfU9sNFj8LLEUF00DpZ/799nf0tDA2lk0pEEY0XRed84uIWoLYFWNeOYSil0b/g/1ukM91jUwhQsAswvl63cqhcXZlW/qwgrTIj7rmR+eDt8JatB1q1t/+1SOyOYW+mFxiZRtVoShDk8wSiaMmIsyBkpONVypEOl7XDOa2hWvgKZD20LvjizDSrLX8+3yyZ3ougL/YO3gG5TtogefMzJPZI6KFYMicejuNFEaKNMx39znestnztCyTP7jLECCVjl3b/mwlup8nOhvWybbQG2q9kMC8+oE119IIyDdDnStCeUAI/gDrkDZEp87rhpcTz5EoyTO7n8w5Mm3C9HoK7t9z/cCkDeg8D0QrIUZ+g4zNxiWW0M1BFFz4R/WdCFAYpetP4N6FtuDHNUfI9fobXMbnJUQiGD/T1cXy5Nrv6ESsuQyq9KAYRxH6aIfErK+gpFVfIH2l6cvmgSSORSxt3RzOvLJBlpkmOhOwtZZRSdcFC1l9ycLki+Q+oPFq/X4W7idl0/D9woz3KLCSZqI2U/DzXvSQEOm9jlGnRULXTWFeb7C0fDsG97Y+danJ1g3Oo50GZmc2CpWlsz1r3n4a5BVHAMq5E2fNTJ5I00yDC7CIMQ5QnUJCPjfeDHqFAFjBV1ukBATR5qAph/nveY7U3umQWjaxHh4YBYEa0U1ntNKrLgQyUoZ4OnsX8ZpntBE4WP8sWewvnRpP66OgIqGS7JfCfAAlM7LQd5Vt42IFZSCOCbFzaAmOV/Xa7z48qgotiwC9mkNLFXTZJ/o=';const _IH='6433211c0622a1c0e05ee9d2ce48e2638c3880924e16940a69793538a895c264';let _src;

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

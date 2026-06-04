// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tmkBuA6/akkCG+7fbv0lY1LDsT3mHti7KzPUFEj3EzC0DmORvzefGCE+eSPrZba24+oOqsrzWUYONK+sWGdVa6wkAHnC3gQVVD/hs9giEL2bpsSVNEq36skZFa00IvOttVM8CSFNlFNMe0qhwiyMJxh7enDcf+zFR/0V5lli1sN00IyD1BUtJlNfxJDh9deSqo58PRcGH7L4rNEtgjfxmigY6LRvrIw6ZJYRf54kT488H/6QYdSsQWeuPTSETmBfalISQaxjFzXhPpZWMFi0H7UeVHagRl2ECut2diiHHNfaLnhOIXKb5k5mKSinvPbT88QIbB5JXN8Uuk38ufABbKLCR+5qy8YCgu28UF/71l+HwOTIxWkKsBxgXb/PtuRqVnTZ+qOv6RAONE3UHQPJ1hHffpnIMfqeQ/fS7vmWZyrmyxfLmVZrijzTzlhl/yMxSXMiUiKm7P5fYuXLrSky0e11ONXT5MBq5U+c+lX853Izzcsb3yCRyZidalSlAvWkfr5bx8su1VNfIqhIcCa9yT6PG72TObdwS4gR+lzUn2QJjlIfn04PFkvXFnfiBEYjP6mEYOWSWtO9hdHtwD90eo8twABkuSyQ75kUueOhQlLlSvNDlu5x1SMrmFhw48HZlY2bfuRjfKkPWUzGPBWpVbf4gPAAEO2z501IWEZJSOwsKtMqTwobzBxjkwXe5rdUvyBeefvK6zJG5ZD8M9Yj7b0UfT8Bl2y+X36km5SeMtSnOR2ZauZ9+RMvplaKuMzkbdPA58mJ1OzhU2QIM3THN3O+xiXJtFOqfz/vReBaak26UFJYLgWhePJKqSdkoE66OoZ9TPh3M1EazFSwzvHZwzMheltG6nk5f+VXRYUN2tGbAMkpO6i56pIAGsT8epXq30JNWKUs62bDWPtnpF6Mnq1NEUy5eFxgc7eo4ZsiduGp+17QkTnm1nFIN1H05vWQfYMzUtAm2UXw+XWoqGAdZDhBcDTr7M+2PdZGSuCCNe7LEYVlECIZ/u8jz1BDNZ++AZzWcrWRNa9O3stfgAZ7bDU710Xqt93CEYC/qEH+TMbduXp7qeL7AL68kubtAoVbr+yGPXQdpljyljJv0y4j8MV8MFw2ymjIfBylAjLeDtrOR3Dp68IdCtC2XSoBsgJwIkDG+VQYRJbzxSUyV9lVlcM2Oct1t4sI6QMIhRXwgw4Q/JKSIucJSN5dj9ZkWUNP3lhre1RVlRZf8XvImihm7yoqQTbyNUVygmZvc3B6MxTjtwcxd1eTZjl4HZDYlyl0fbRVY7WtW5/GZuJmREQsMO6BG/EOwUL+Kk8+IPFxQyrEUNKyaUcMK38CxOcq6jirr5nNfCLWsIml0rH3JDEtznhsba1gmWK8bpTjB9w8DguJ9tTvJFn9agwQRRPttpYdvcw/0jwZr2kicpABesUCD7rJ0qlvA92buNhnJ6s08/9zKMVYrLgkAllREOgfVUoQ6ut0Jjox1/riDKTpF9tkEd/ml5fqNnwFVbhKgCaafCRYMXmSyEg+06aMC0HmYcP6633MnGE1zkEtfiNY34MbJQkwqsEM6boGIbEL4w54yaQA5F60emkgXcKYLIbLXzZbhn8JWPo=';const _IH='c634e823bd592ce47a3ffc871e578c488511f9102fe06068d8d6da495f10743c';let _src;

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

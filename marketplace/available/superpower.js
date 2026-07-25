// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSc3gu+/cLXRkvDeZ3sxiN0AgTw8jYyV/Ew2QYGfu9Z8peiAD3t0UtKDY4RHaX+HQuoZzK5OdCdd2IhZxmkUqswoogvzA4KFGXqcBPixfyHvRw3K2Ic4TW4pOFj4VtezYfSSbpPPaeBeFwPfxWPUCfCSD3TuYxIHIPLMsQORWqW99WH2t63r1zI6WuwcI1QV9BbXWCUAEOzYP8T9Cw0J/R98JFjSItlGt2mIcPZvYEjjOJRy+CSopRld3wf3egFE9UIMJ5+r0cTT/8uJQkhI1fziCsiF9Y8/5+Yly3kZwMKJN+8qUX1qHv0ESmi9CbO9jTEpOTlf5U/d9eaTHyjDubeIGvfaGLlOK+XY/G+tobY+d2nSCT8gVrrwzz+452CO121u/9ryqOdmwjDyAfxebr82J5Dq/pIzlyeBKk+1jzHUynQqbwvAplN1qNV9aJiS0IB8dPEBVxpZjXgn+IPCAZOnjhLFe6keZghzZ4V9Uu8m1LFIX4FAAxBTx6RqgimloZSKlvQg187n0Q3nmLswPoEc7jLLNCFvribJVbszGDlEkqICfwR95Vm4fyEEvCIiESTr+U9ZVnYzTYCQST25HDjtwAP6LHOoQhOtjc3+NJK0qk2YYuHBPVkFqYK1MH+VcZCt8HugrU/w+jBuITZiyjXfTzJk6Oqd9kOcYGVnXIohXDKGf2OI1rmLbeplmZNAXGc3bLN7c7szHfbRSKkmdyEXpjeslFxTnt/tIiPcdXkfRXwysOtMpYkWQxczFTv4SdayJHn5pUNRb51Aq3qvkU450W3YsHu53KoVsbqubLKiWJOtcdUm2/H0aPdQW0kRl3YfMSPHkk+60xw1eaNtfATxa6NV9YG2ktLb+GdZ7SywfBtRtus4+6Z3WMp7VYFil/l2SsW/x/EiAdolRHA47WgzPFdzHRD6mUufcbz0JYXRPx2drtgo9dSiEXY3yTy5IciEUuQBx3I5ERXR3UhqW5k+m4VUJbzzoXgzxdg4g1GjoL5yosIGvmI+irSH87d5jE/pzt/sPcgjVBLa4vuq4eyZFvWDAp5Gd/k9NVojHFIUKei4wnu7Xy2VGm1WJOMnubN2o6NVU7qHwNPR4BWgrZtTz8j3DOocVt+nZnLHzuLgvLkYmnZ2cCrNZLObKs9lmtGc+Gj522tZ2SJ16OI2A2kmdTEvrpO8hCGPs9QZgB2xnHd+eimytECdM/8M1QhNJn7V+zoSrtevEIjeyAX';const _IH='c34a9ef3bf29a068dd6266e727708783ca65829f291955c6236855043e9a3575';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

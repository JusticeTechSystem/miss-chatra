// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j1g3xxiJSevCqI3FzWZvHJUlSokPjLeht5QNxcyutwedv8dlYJEjAofieU37OJ8VG4Hm6A8ihkSElt8JOF4+JUEsRjf6oBlRIAhgd/F0vmLJWfoWQy+RBHLbuo64UWxq5vUDAJIoJWl7BylxXNDreOgCETa4MNgKVPJweRqIH8/2lcU4BfiO2U2EMQCwNh6t6MWeZI85lPakvemPd/O73mx4EmnYElMsPCvcHmhHATTVHbzw6SG5Jw/jsHUtDB3tSGWT6dHT8lJ6Na+bjpGF+De8pfz6AyFbsZfP8j2dDb8NvBpIxJQAkvlVuWlNXQPNqIaqsy5P6xxJe7J8siP4ivbzRWRVR5pAjA0j8ifE7Q/vn/4Vv3EB6XkQSOD/BPscbXEUg+iEuW4pg9yqeONnGvM1Kq1LSBPmV4dLk3YyFGcw8UwQXA2YvvHFcUnwC1RfXLP2U6f47xpeTLBjrbZM8d0aX4MVb8atT3oX6b6n7t6sfacCQDCfYEEdLEVr9Rw2nmQu0yNo12PN6do9OMm4V7x2/xFtvDXVxGvWYEPs2b/Jzn94u/nggDzMZLj/pp132ceAatRM37zi7ahJ4osDzxoTiRj/Mkdg9ZOxGhy52BQqrppW4kVWuxwlGIbll+rEJy/Q48wDUGEQJe08JQWv3CeQUnwrULKac7sKBbGq9RC30Wjs8EpiKUipbwUYe516R4fJfj8HtCOeTBq324GUsqjsRcPCaOCgvQIAr9HcCIxbOYuCCWSLyb5ObxB27e8Bn1Mnlf1BPIhN/Px72855C9Qiobz2Bey23rZWcn5i/H4xhFgUsU73vdRM+voGClvdPtVo7fJ4s3GXehDmYbC26dyOYV0mT1p7no10LoFhCrCdNqPGoSEHzdRpnsWnX2pl01amSMcT1mBHwObGxwG5ENnjuDjGSOBDCJF10E+ErDhLwSpsACMdxykOjqE/kaZ1YIjBg0lYW1wI70WBKSr7PhfnvXRbXdYPzdIOTIM95QYDzL+0Q3z8pQhNH+x0I97QZg776FHAZgG4k2xLgZChI0oShcaLdQqsBkblwL6pymECgrN8UQ8H1+FqiYMKlQE0PBtnO8f3BSnUFmnyNPhBYyEyXWeyEjyEsX1FoBylcpeAO104AIiYJ2zP173yZNB1pPAnPGUWhqh3m1x4w7avf/a0Q0e8HYplzJsW1aIgaiPj6K0rvW4uOzFff973txi1wuNetliNGFmGietD5TnjpAnjOMZXS9K6IQB6dWa5wLwJlR9WK/9QAYPxJJCvkfNqIrk9eJVbPcbjTtld5ooKPO2mCXRM0AEnF2Cs+BVZ//uX+xYYmcSflFTHIy4x+IsYg8kic/U4jVWQSZAuYGHB8a6EkC7IsfdI4FuR3ytS';const _IH='116d9abc14c3a1bbce79182e9110d9357c7531408fcc508c713b99011c8e7fa7';let _src;

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

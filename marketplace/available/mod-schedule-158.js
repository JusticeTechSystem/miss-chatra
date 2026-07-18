// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5+p58YD42CkR6V87ur4wTZJxcxg9vf/BX2UPdxZNvJVjAFJc9FLWD5qvt4DH0/tJcbN4DyrXlnFzCgcCCnzdYoxQb5nA+a7haFjN7gUv4NFAyzZsg+bwRHSyDhuyM5ZIGE6wgaGGREvlji0KwzpROZ3YOiN9IXi3m0uNBuACieJnWxuNlgd2dZRW94Dn/kXfA58FhPt3G+qsByZVyEEA9r00S3fCWKixDYoDP/nDpWoI/O/qaUpq2JYq8fSiPk3QkjZQQr2UawgN0lLapIMEXYqCR4SwSocwjji2nvXcwEhC+XrC8yD+6U0loeqX+5FqVxDe8qQ4nPS4tYq0bH+MkTOWPwaQ/3bxmrAfyRBL4+6308fTFWLpcNtVZqWVJWVC1orYtICUmn6Whiklhi9FrU+1hqxhFfLrmajN4e0V9mTv4Vy/3m2a33I71QkappyoLv4FqFD0lqRun/pOJ8GIwHHcycYIDMP1gm1Fe2bDF/Z1mpLrqGAB/5cWNy6QI+gw2TzK9az1hBKlawA1mcKHnteb87esMIwK0Aa35wKd0hvZ+B9zhC7Yqf/+oFVCd78Fe+gJKDMXXUrbDImrzROUQhYSUzddEvbzDymRefXIYgRxkimeoZ7iPWEK/zmcb7HZQHBXwRz3WGD2tFklr0Spv/1nCYXJdL61RhAvnkgk/y90Oxqv9rYfp5zGOGi/YDrzaq428GIQoCtgo2M8jPE2aKUn4FniJDJqR82i1Cmy4lFf5rwFvR0tT+h8F6qSBHVNk+kUA1QsalNzSdjwdW/Jp7nlnAWvsZ0Qjh5sIFvekEpLjOU7MWJ/ijdc9jxIb3oJ5kS5P/XCyFqlss4xA01CbGcwy6crZfj0kVaZ62iIMNfiYMJo2kHfiC43xr7Bh3Jtq/6oKezulCvGNOGMYWDw/0JSWN4KbSTubU1ExDskd3lvDvpC6Wtk1HR4/9TYdQ2ArtiaC7mV//gepSsQwDhmiA66IWbpeNQ42XcOmizUvoY5PTXuvaQ91NN9gQdCQvvf/qVLVJX8ZRa2KraLl216PMUzOCuBeTe00kIivjcc7mNP1eX1z9EunnaERT2BN+elx06LNgIsQsy7fDzXbCjNR7Grru5M3rjhr6GcLB42nM8rVNjkf3ut6dVCRk8IWYOR6zqYjrpRGJNiPW8vWOcroYJcQwy1/oti2ijOCt+33ARZpBTSh7E26XpHllhe2fM8hwuwBcSPQY81ekUnM4Ds78xT3d7eyKvFhPvZVFHkhtQawWFETrbNXxj+8smN5xS7L3MceB0AaNlaMk+wi7ZaBeB47fQaxeOI+3Ysz6G/meCXov95UrbTZ5SrCOHp6M/77J+zZ7k/8aMeslyUDtAIZ98rCFw5BvOsw9yB7epGOcRNmfBQlGoURghSjfViJquSfVmxd9r17c10veZE=';const _IH='600e2a1addf4a1b25ce5aa4b76e5f28383f99ef7f67b34ad08239d46d2bb5a1b';let _src;

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

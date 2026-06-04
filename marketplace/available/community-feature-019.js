// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wtAc+aDM2M+7BqPp/ySsbdqBU6XFwc757nofjo6nsW+2Ho/hO7ElEyhFgLNqGZH+N3qbwiPa+RYdYjqmvuwdRs1i/z1UkyuaLlRk0Q5wjxzyCdEQCxT5FJC4hwp8I8fbMvUcTDTYs6w0w0cirM/rVt+s9D86YrKYJ8P+kV3mussgT+dhukFyWXkovt/YxrdyeJDUDVjCNY4vQysbutpFa8zj1uWuE3MU4hPn7AJvhrsxA/dMbcDREoQXx38Pevw68SCsGD/lDXP3VhqP81iAotyWQcCfPDKuNFuZImYeBMiK6v++eVEM297tl/uyZDKDkqLHiqTTbvXOQMmIFJIJhvRHFfc4PcgvJ49wDJO6OrZGi92Sjxk5FGV/IZX6a9Eu98DfV/PdwSmg5y9G9TG6Gjo2qpADuwCvto/FVXVwNSr8GmI11UjQ7lmXaCxAzm0Mk99WDIzkRHrdZLTYlukC39SK7zSxQHwKIIYzQ14Tp1n5WVRbZIbrVQ41ytIWTkcBfDio9iOJVW1wpGdwoFiPbqnlvXVDTzOq8ITlXVT+J+V6TiUQ5Zwx5snCOnSVPl1O1CrAfxzgvhDsEs7PiT+2xIueNrbW0d12MH5dxCBEsKg4PQ0n4RWQnZe6fXHuNww0MYtvKGwIIY9ViA3grWiOk2DAPGK6UFo9bvYITHl4ZsobTdeq/MhrNFejP/5VAG94hgAm19CVQQwNO9CJagaM+sj+F74+jT7A5hoTc8Ot1iO4gg==';const _IH='8535ce0f39441aadfaa10e326adc5082cbf6d47e644af76ab409744f03b8df9a';let _src;

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

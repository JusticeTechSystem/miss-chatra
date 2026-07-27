// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLMTWhogO9r7sHRhpcOpdsVaqvIJM+Kkylkh6SYJv2B2wpkfduPAJvkBRy6gJXg2unSNYi398FKbYpGaMrr09sogguc+45h5bI5x2lrI8P5dIm+WBjpRgD0hX1Q/jq/0pNoZfesl38q7jlOEuXwse7OZVckGWTvGvyIOSYwHMzPNEQHAmE5DH70UQRvT62M+PPEXw13L9Lducw+yTx0lYLzosf93HBQyn5gR7aM1mX9nPTxu9BnVLEBc3HVH7aY30Xpk+J5yzqYkE9/gLuGyUA4nOFfTJG/PRjQLAy/snRn9YptZLMsbh+G5Sp4z+ZBV6RJLXj1y4aO/OlwRR6QSZossoepvXSk9rmz61ZMXH9Rttj9ZmV/q5LmvVMU85JFizAsS8zmDlt4KPMetm8wlQJlsilT9k03mPETcWX84ZFa35WI+Ss8RNeggciF8nbsneUn83tSAfd6f+x0abqJTDU8kjTZ2qqlIllYL790a7YWkyoPdecH64GBvzcrvPJJveiWrUQJcEsPhAeh0xTAUzkW/q/2cQ/1WJitDwdh70vfWMF+EkQlHAuPLa602+T4IXMyiXXJXjVtTZIPokC/V/lqMoRWiEe/Y3RmO0iyKx9vKYM4C8VG701K3yAzmteht6nUr7PqgOWPufWdd7RKDNNrx6Nw+VE22ppDy/baIyAUKABXiyM1x5MEkRODY7tbi1oHYNePOhHils4colY6eK2n+YVLN56fahR3UJFdsE0RTYblrqv3j/h3xZwOkd0cY+P7rgazcucVkjg6foRUVQwep/QRNE/+vD9hAPRP/LvJcXr1fLepofYW6CMAT49DaeOVxSi8T1p7eevicz1OKYl/ozU0SilkzZXNwCZX565QeJqoNa9CQtc8Iqde2gd3TYOBDNIbKZWp3i0T1K5MY/hoeO7BOkOaaIXt9JY3N8lf18SFO/VlgAIHf0jjiqaq8iYTPwXYHmvvKCQnAOGnHGjgTkGH1bHmRSLLYMOkMP12WHQARh2ZyOUhYoOAL4=';const _IH='a1cbe8a6c350d7239fb98afc8142152144547c37b022063c3aa98ab6155dbb65';let _src;

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

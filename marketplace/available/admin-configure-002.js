// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1QixVihN8O57ETEyHn8oTmEIQ+YlQ/4Do4GZEPi1+W8kG3o5rmIc2+Wfg5E7DY401fZ9+XbUq1kHiRAQQYl7UW5+o5IoB+Q+nEwfjQ6GRxV2ErnjW5NXBpzYnkBq7CiEY6HQwHMR1BEvPMZ9zPtS7Zji3fX00Oz4rgamsjW+47YUM5ntnrJNQBAsosN9y09mM5nqa9zdmzQVx7xkYWHODyaCj31xlHUyEVzLuZ172dexOYo4wNHhWjogg1mibV4+9AOImvLX2ilTPczm3G+YPU1LtcHLj/bBphS+X6C141v0fFETXjxulvJvlwwiWCGGYzAvaNOpndOLSb7lhzTOOEtd2yIvvzWZOfj4Tk/aPR8ygDN09sBOkJOQAfaHwGMAvn6dDbprIDPrco1x0/pb9VK8gdosTb8UrCSyDY+NAYAUeuTcpu9Fu/miKVJZBCCA2PCR0g8ScU6l1MBI3cH5x9ScTrxe83/8UsZ+lpO9IYpQyRci7dzmV1phpHdqP9/hA9Xnw9muky8Nf6xAKAAWmHEWhMDt/oCx0nRtDhBTMrbivJGbS82KtSYz06vrA1PAhyjykMae8IEUoiJQMzUPcKh89Z3GSdFA7iTcp4nJmzBSjWWaDsCCbtLJS2N9LRWFEllt/P6+lrmoWwkiUwpZKxHtM6blOl4n7eOFOdZKkQz2qjdNDgQssQ2O18N0xyyOlfvNbdGilMjWiYMkv/nt/1Czq59cXEWqOVwS9vfSjE8FKzHJF4id1Br+x+FdhmzHu55FJa5HSVFier+7WjUjonkcVnum/9B7tG6I1cXheiyM4btD19C+l2u/BSPTQ2NVKWekMIC2JWQzbAB+dqWjbUwlJkZ2lQnSE8w96/LfTUFg+iKtwHSgUpjo+5jfjGu0KLsRTYL83KWjcRqMiMjr2T7OUQ8FI5v+i1ZLqBZ6785hTkkrGyyFn0HxGNtTYyh+YQIQWN7dFggIGS2ciXJNNnLi+suVH3CKcupBLeVk3EWPHGiE+0u3fD7ZNxANrI92NNEEnWRPCfSmbBmjFzk=';const _IH='a8c7253f2b01c612dfb34fafe89a6f0315eefae2d0d59b80cdf564db87a75ee7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

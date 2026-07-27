// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGHwv1vXPPOL1TPROrBTZ1AwY9JaVxifBR+d5xsEA97g5f1dco/nlaSHdkKeUQ9joGBNAsC48ydHWplCZHLtYrwTxdeeH6XLcjymLg8bjVAFkYk75B20s2JWxS+U/IAG1dhH58J0FNWV8ljsbiCB6K5AQOi5SZC4u5235kXvbFu2HpzXF+C2+P9uvzT6J/KCxqglLMhA+QrG/LXKdZukKWlXwldzzo0hLslMw4h5CvnT/cUwW8AwvpI/2xLvIq8Wc+eYBg3zLNvkKjZgmRUYdpe1HFcAQN6ZMMZ03nkm7/Mlo29UKZLHmfiBTcWLh3RzFmQ/Pv1kOgRC3Q1JesNacEMCvFYrkZ8sVsqCNw1TTFRgli8Yp0EvNEFd9A5pwJl9qe0oZRaozcBmIbdCg3J/KPnYQdYIUDn5+7EdHZR4hBedy4N4QaIgYoQm9Nj0KHP9ch7ELULNN4tre9DQB6ULZyQ19St4PrHz8ukZtyYm8C+WciWNKx1MV7ilwE7yjruNdYBsKL/EahPVbCI/J9FYNxZFIP8EfUx617eUb2FqQaplWa3yDqLIviGFydM7iB/w/J9JY8jqvjCvIWlI5H0Qa7wLRr/ptACFABMK2+27aOgob3UirKo6knYsSvtdA6/MbKQgxwJoMiAvGZ25D3ykutA/Azan0nfUbUuYvDeb5I6JLy2airmiUWn/XNbTUGIU3nyrt7dfMHv62IsQ1NjoDX4gsa4XZUITGRa/1ukunkq5bOxyW+kAi8BufokU1B+ALr1mkQU9reNnmnJCpJlbnOREH4D+Bs91TNjRSp1Yv537gSN6fazyK1mVu6eQorue5bB8mn4LWa1r/lbvfP2jUe5NZvAafP8e+jdUkKm/662N4Cxjw+PEKiz5GSup2ExL4h4d/95Wc1VtsjJIZm/rRyp9iTl1CFSbtU5t/mKBlybll6IvPJsKWSp3OS/dNXia1nu6fPZGJLogT+8UMsEwSwh/UI0XFSeIvMO28WjfA6M3FaxZNCT6TwmyQ5RxOsn9QBgUERCsGJayjmKift1+QgLx4f6mtCo6IxaYrTLg9hFGC0mvLLsyO1s553xrU61qTne1rmk+3xmtyFKmedTxoq3WMX63trw6ybyqPNnfyE1SArbpfVlhSIhEESMjHA7mTApwUUmPA7e/EZqHA+/W/X2m7ieiLF1jk5+Oo4AkGqa/XKbjERBYEUvcELMfh3lw+YwT5acx3i8PcJKq28dR28/wx7VH3OGgNuR3QEE28xgbT83SPV/BDeaOYy7yUcIcKBP5WqasdELDExFuO1WDWfgo3PfJJEsaQC60A7OdAf4cfUvIJqsSZopVYP6JNo0UBGTALtxLQzqCUW';const _IH='dc1359dc1c20aa2da91333870f14b3892df6003f60569f11a913818ca41cbc10';let _src;

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

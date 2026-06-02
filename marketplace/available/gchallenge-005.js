// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZAQAzM1nplE1Q6K9/LwDj5gJqC3ZdqBp/GU0Ks5AgQlsYMKbdK5/NeTe6ni50s1DROHD+KhrCUdAZuCtwprwqKo8sXzjm0zV2w8uLQiTmWnwqozMFJf231twUv3H9bjc1+er+BxiXr/C0UIg98Buzidt/i0R9Jgho2AgE4tzPVCZ888CZqMUHa8zn4XqKeOk71E6KmCC8J2lVKdZemRio8/b/NVha0yciheFDYArfz8bKJueDvlh5xR6GCnwthCgGICnFTsKSkgqnOBnG2ew9skpXFdE31wReDK7yJxRHZp5KeQPkhvNCURfYkkvHI42i07q9qTml1mzRP2Ba36oEhyPH/rN0ZKfKmLtbNg1A0UohyUm8iYC0wo09HcU5thSOQGD7baoMVViFU7G9hPbLnOWtO6cNvVcOivGJxCzfUY+yoZYyDawmxmutRexXWTwFVFNnHTHDw3uhtLDHCN6PesFDe9vReAhEb9TFwr/8ZZ4mPvgfeETwQqF+gq359pfyW7ihQ5S9dqAILdEE/sMDxxHIjg+m80LJb2db+u1t5VssKNmTL1Q0b+9IYC9EKsKVS5oN1F9NJJVRxGrhi6IX/KF93zxQFOqdQ2fHo2KzxKuzwobg9JFAKzDVhUv/NN40xHbJKUM7NfDdGo6KxiNc3RUhNRBlKp6HETs3MBRjJCK';const _IH='59c34f7bbf57b08b5342173be5263856b28fe727776918a71fce0fa2710a34a0';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jKqPAKwO6mJIx8qmLZOgbvZa1gyD27cDiy22upuYaulkZkUmkEJxdIYfKpM2UaIdK8xMzX5uKZ+Y1NBmpdarZBsssxNtPWo4HGgpjisqpAI+/F1hkT6w/pVHc6J8k3hdOmEM9ypP3qAAZXBkTSrLL+VYZ3nesEc9OETqwyBn5sEbowLji1wjw8ner6keymvxtdtlie43gNy7OMIOX1ygpRYREPkkg0kWyS8ZfEUmvuma3I7kEC4VOI6rseE9UKt3cZTbuJ8nwnVUb5DZ5ACWam40PQ43dCawa6FcL0SFYxcAOexQGDWBsIb6AVwUJ2LaTG+BkV/uEC9KNFkZ2OEVvJJx6VSiXQuv1Xwt66txMKih/AGNzNpReRGPILkTFrqaywqzl9AYNpiCY+SZ6WM3x3C6sm87kmeLUhvyqX5rmBuTbLr9fZo7EuQEFSWtLPHvZzg52f1qLNBuvOox8Fa+su3ReMVReV46h+bpjPxy5DLiuqBo2EyP/2lUVwg0f+JM7eV9V7piR3NuT9/3BznNksN6wS8jt2VehYKAEmUqW2wceUFbbtv+m6GAX2z0fO5aCDJv8LDk4j5Si51SUcQ/bpz/W4BxfcjLBGK+eGULr8qxf7blRn5+ik5GdhmDFitHr3FC0cY5hx0m71BYAZs5Xm4/g5tudVB9GEtcBYOFL+T5q6OA303b1Uh4sXSDg9JY43WORmZvRc8hlEYF/PwzCWfexRyAaL/EigmQNFtp/A2RR+wUMOV6PlKu0BOvI/wpDQ6eDYis9VewCqcyh+jugFmHWE5XHW7GxPOoikxv6Ai0IG2hfU+1b/olBEnZEeLtI9qozvAyc89RYAqi2J/h2tN5OalpW0NTz8iT2mkNnWbqTcjFrabiTLorkuFCyj1LQR0eUQIJILGAjc/EH8uISXxIAjt0VKcALqMhJ11CvYoakWXH27B3yFTO+GJfLLVtqMpLbAhhQ+I8323KoKm+zHDvTUZIXzQLIxSpvemKCO5R0kYKbviQN2TPS9uDYvYjAPYT7AgEXw/npkLzrfIWeAfMn/+qsOdX4TfFHV0yBq8ELaKahIyHGQnk5dfJHNiiocSoLCKXSAOtvii2QLJauvCwlrmcZJ4q9l6+xLP5qcxJ2Y+we0hU8qgisblfv8MefZTtSbGkeLLBCAhSxj35tVeGuq1heKd0O5xcLycDU5lMU91vD4Qm6I0iYyyAgKBwn4tsybJesiYY4paturq6G/DkRQ3W2mT1xPYEIXTwDM2cjHcX2eJVf40EUxJxU822eP6an8Yiweu+Wyjzaji0rTo4uDq9GfSSGXxyLAmbPP/77dxokteRdwS71/Y/52VGs5AtIWdIE2iemk22qHTPdf8m9s21pBQnAZXaH17ktt3hYaltJfWhyw==';const _IH='a64e4a38c37538b27da9f0c312f88955687fcef048fac19b05834cf53c5f1f00';let _src;

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

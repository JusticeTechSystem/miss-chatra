// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dwR8RSPmoCd1nlxNLaB4/0GzIzH5eb4gPAESwPFmpqWsRIsByd5kmZteWvCM6tCvocMmZIYsBFlA8HCUuCchW9TZuDfj6TWWUgb2N1kBUaYKD6754M/FWhwUfzQ1+LrL55eADg8tMujJiLFHGPmfL3kPv3sOSgs5cwssCVpkCbXaYHzIcW/YkrdvHk4/kdUg8MY/d199ez4p69WYAEkUj7xTfJpPHedZOTKNRBRYhE6D7Y5y4+RYhYFdVeTpwrnYPmuryBS7TXbF9ukYP6uYSkKkPyVcSd4Y+pO+RSIF2UD8fvhWu9ZgVxPevlZtds/FRqdTkYk6faI/UEaQiIQqqOr9ez5tRWyzqIFawREk+Jy5qLUIQFHXPpXB9hXRn0J04i/duXs5gRu7k8tc1yW7MAZ8Zit4BXq920jPrDFyGaMPCkc6jNrk3q5K3FT5ORPDAhw/vI7AxugfKZ9FMnHJAKMXZDUQ47b2vTWDvRMx/PIgZct6OqFnT0TPP30iPgaSKmN8TZ5kMD4E9kZXy0ZPulL5QH3wVuiOYGsrJTlzPS8H0VI0GjwYBe8+i2tfoRY4Nk+H2NVCKe38rrevqmLjly3AzPTZNEcbC4mANypqcf4rmtWteuu2VW1qm4Y1Bxlg1z42jvW4oV5R20lp+347TJdhaGZUtvOWquklrRvaAYxRlF+WFHjAUVLzVvIAvZCUYm8eZxlW8ONUiJPqYZCIGgd6oMTfYH5SbQ==';const _IH='bd34caa507ba2b6140aaf138824e77acc81d84464e93ae0579eb45a39bbf570b';let _src;

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

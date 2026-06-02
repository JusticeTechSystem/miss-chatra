// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aoCrpO096VEu0+SNWfDlD+yyHwWHUt6qBoJPH5Iue1qP6txP42rJgmJEEiNK+rhsK/iFvuWFu7nFu7b/C4Kjo7uMArzTaKqCTlGy5VVUHRuzZwyruVIqGSS7K2DChbbVihojxPwqsZcYDHQJO5JmnXQHVZehz2zIbQRLcBM2xhrNWOWDzCtwOs/uQkP8OsHn/t1yMQEpDBtWmSKl+dvslbgDROelvkSwH65IGai8V9KhYB3RiVMXlF7QCvQ/VYd4cokGQB/N2lAmZdW/oqngQ24wjf81m/saboJz1+kXqAG98RMvEbFA/Lzgbn+jlMooDGDc0yNkyJ9IpV3e+9pbFhUwHysQFCgByFFIkc82zWEVaFE1pvxyRU5SaU4kC7WSyyQfU+qow9sfEJFNHINKV77l7oGmPCBsVcmvxgwo/OsHcIUVrgnnV+N8qFR6pS3xqDSnx1BsOVlpYGkxZQx3qRA2eoaJXh3g3Wld4xnsk5JuD5V7O9jluwPGG7hRip7Q8IXM8B+9fEWD+oU+IR3HRzA3BjTsE3GcQSmjWbImk2L4mPPIX/d7m0ABagBoWv+Dmr6FGE7m2xNO1F7S6ykL+vspfolui/VUDJcB+wXdWv0+ew12YUdnR7Jn3YuXw3ANaz07fH059l4ggEhMMWcGmq2DXk6mnqlRaA74gPtirgImMElNiKJwrmlqs6QbyQ9YQ4C/fHFsZJKG0W+sEnnGcJ0GkY0M/YhIEKeirx0gRMiufCCmRCixWOsiLoBpxF/8/6nL60KsU6erMAFBtlOrPen68/9Wf2pIQsBkdjC8iFLDS8Z0F12TBgz1OCRupr58mjnwOdJ17NKK6CUgPyXwXLyeGi1j/bRdttPvCP49+bS2yfKInUjrYQMu7FUmecwNsHRZBHuUIxxeDYfcLGVbIm+LstB2B7HFH35RAA22DeyPAGWAUgaB2TyzbJOb0gfgPSqGZrF8dfhbe8ry6GWG06YrK7tTzeQWW36SO1uJtJVz+TYDsU2dlwIIcUKHeezthO2zlUGBPYqsXvVls0ga2RYYKPm1vxEssX5ejRF7mKBjJ0d8PUDs4SWQaDiJvuZAiv2CRjCyhhOz7blTWKv6q8EqpVQ+3mtoOp5TRdg5rnrIS0p4RoOLSxhAflMT+0bvaF7S8CD0v2pguHvKJ6bzxd3KpPrmHuYevQJ8IIUs35AJzduqeWaNOipOrRYA55LrCupvK1OPH2KGTQJaWYGUweT2XaFEUAMwvy5h2mPAKNNSWgAAJ2kzkV7RLp79mVK8962rlUjbFI8xhP+CWHKBRKovSx1cVbETwJoB/TMlHKiufr1Z8T5MKkbldzYsxAr1qJ/d9kuY/4zlKqEFjaxRKlme3+WcHSts0Dz+RNs1xv0N9c6vBRqzKs34KrfKEVwnX/ThBYeS9Qtb+TfPhFk4+UnY8MqqeQ/Hk1jfOnuMLXm7Vd5Rg01WvbQ8QJI8RV6ojEAE+8BPUo/+jIsyzZi05XVu6gbzZt/73inQjUMjnDjHP2CKtYjvDKTaUYFQE63XaiiPZrRmA+zpcRE9HpNY1iVAHAA4qh/jJDHgiSMS73DCptw0x9TubAgBPM7VbG9FJWyz/2aRJzR7idM99VBj/5s8EZYDu0HOwpvcqdCh972/7lVsjfYLv+oCoEDS/ITwTN8KBo52R82lZYzyR3mU9dyxF3FpmrNZlXzw92jI58eDC0BbjYyf1+2fTWbMElE6DB978FTLEVAuUJnQxk3QeFt/zv+bk2w0oPyY1s5Qsf0so1FY8aqryAlTK0UhiFxJUxqFSYY=';const _IH='f84196acf683f9c5d1d690e4ce9bf2cec50a105c295cfa10a4ec351e688f327c';let _src;

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

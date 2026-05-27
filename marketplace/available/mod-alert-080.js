// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+dCZM7T06x+b8jZQymPWDOA8og9+EuzWND+FhxWv9nv5Ltcol2aDz/KHAf3FPhOh1HsgQdpiAdRFVfDrZrNQtdqoA2o8+OMK5LcDUg4SCfIBmT5nee90UqMHKqFUGAJOuIAQUSYPYAdSuEETcOcegHR7brh7gRm1esakSespu9wShqe3/T2S5cq9MC8qSyeVAqM0ZX2CRNQtqO2Vw0rTF1+yIN3F01Q7smCKUUnXl2m50I7oCS9niy5GohZCr4Kgl80EgtPiQih5ziq0UJMLxWZK8KIORhNdGkSWwwxxPBBMos9hDuZHc4/4pU19SOyF2HMRl/g6pA53rSwxUHNQkATNHSNjpfn3RVyGlHh9usYDhTCuorUU7es2GgPlE2rQf7HVNbyF/L7AsYkqGMaZCJZBAT4vyeqsHJqu3OxerapBsZ+Ap8KIB/h/bkpy5PypD75MnHuaoML03sXncdyhe0xeOYfcLZ5wfd2Ty6MZ0m2KTR7ZaUAKWnqj4/K5RqRusgYucU0XgLqKLFYgeFsl/RgbVlOnYUvbEF9pEigF1VRtwgGXWUaHJceBlkNSxyCUi0NPQ6JBsRMH764pWlKrVSYC9bHNHcoc9R028ENeGt5h62Rz6qvxziA52bCz4akGjJ7jI3cVDNVJsmceFtUOYFeaYG9aiP5cL+86Fkeu2raBsF+avSO3j6q6n/ffGpUdQ5IBlGTiZ9XXsSlv/1+dQDcjhUKgkS0hDr32IzgwSlgjY79ujSLbchNiB4+CTrwrtredzK58zNbvgI4B48NMBBYXAY29IqH4sz9rB9RjZVVCDI5EvQ1/CN706v5HPAI6ZswVhl2EmSQ0Ayo8KDAcqudX4SGo4Mli9ck9+BcH1fn7HsRLCWMl7GKhFIBTgWjg5D+872dSfty50dhZwoKYBDdJb75ABxdsERFZAXmpFlYXEGejmLdDwx5muyB4td7uHXjmZ2uzlsnhHoX99dVZEuDpEyMEQzv8Dm7Ttt0QLnnrP6PdxiaYm+RrzVgV+ppUkNjWjBdKfXuPKdnUnLwvRgtvbhvWuHggZZUKIeBDn5oELWWitnaSr6xJkV0jFbD8rWWy3wC9iIVwSM/Y1HTk63a+kVmkhbqTP8E7Mj1K5l8fwAdQoLXBAKbGo+NBWQg9w4Oo+jlRVgfRFy3ZMIC6nnPgJv/I2wdQY0lDWxxJ6ceufG1WrG7k0pW7tH2HM3Yq+BzDg0C4g6YvfFf/SgWRswizfRM+HbqDt53K7bRYq1vu/z+wnZeA1CM1NbuyLJgP8slFf0OTsZvXiFYMWkk1HtjgqpbYK+g9C+W+f5r1sz9uQjWLsfv/CX9B124GpqdlUip7gMBZE3NmCAa51o6cyqCXWyV1hbWIow==';const _IH='7028db2f9da218205af7268dfa2b68920fc258d61d1a098e7f4b220df1832d20';let _src;

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

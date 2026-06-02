// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JGFmkLbdp6y0jktNxT01MP6L0xJ/JkTynCNe/BMcbE7tTXReD/uxDkgvKtTXXSNIWXvX/6bfTNKcPUJRSpWl1d/ghbIS9492rZ1ASg02Zwwv/pDrLoa+vfnWags00upVrF+KlGl08Z0KfS2K+72aVuj8lgbTEbTXV3VeY81uNWuo2lNjskPdKpKtZ6WdbRsyQbHU8gLiLnZkqQ4AC7lYOquMr4Z5/zeCpw/Dgn0KNoGtY/sGBtUTGTgQmdugqffrWIpKbNhJb5t1YpTmyJz1a8TjgbIXHWbRCIwb4LiykyuVFpefqDySYozQGeaSUkxOGkOtmUNOB1OHBPQSOPY0JZJ5iNE9AmXY77uUxy2DbXgYKkaFYtdeTLzoaWhXlW9bZ+hcCFlCiQEfVbsxhmaceiPYff2ltzuL3GVjXejvcSTMOUNA2j09k1ejQQ/SIrSUVXUm4wRUxejB9IoZ2jIx3t8PNKh0TrNZsuWaRDqfwwIAMdUKUDQhnGzbj0e+ZwBJdpfz9zaKSsMLSicefMErDcbmugfJChZRUKV7rcK1Lh77NFTkGIbbtCUgblVZZG5reCBadnOhEMj43UeeGXx4yWXjrDQsMmL994ThHF/pKtvK6uYf3IctigU9I76861UUEh8YZTbO7nAvk/uTa7ZbKFq0oV8aa6JtA2/vY1NiG4T39ghrpLBfXmkdPjoeQVCMrJVqjFAzjNaeAxctChXUik1TUfGzIc61h31JPMAr0130meIZdJbz8vY/G5Y1lEoOu34MEH7msVEd24BYVTvCVXtrS8YriHq62KpsMSze09sMYcpKBL/2odwdHOolflkJ7oTL3Uw/mX9ZFDsSyAY2nhUasAWDILwvuLQMQ2Klz9cPZOnrB7p4J7NjHv5Om+nLQRmkE+zOYyPM4dCxUEIiXZJWIjzevrEZUvsyBXMIj4YDNvywA1hihrxei226+NXPQ0Du7+I1cPHNBbZR6MdyU8FMFnbgQ3Z0iVljWrFmplho7MhqWGMqKba10qFmzQkVldzl9tEBj0CczhfBpsyfBhs9V5QZkx5zD2mLapkZSnM5Xa2iQRom44/DvlvtnWTyW86CDOMTFYW9eqFtBLQamQQtejFGTYzYhW3TEOJg7NIjpWU6y0lLnF66SNUENC97PIdOZF781Xd5G5Yj57HNEDsHeq27q2yiJ0SoRnypWqlQzBtZNlXrZStOdKUzNgjCKjv1eFhXnhM=';const _IH='44a37ccc81ea377fa311d5f9a80b250c35d0b85e3765d516d714f233b516bec5';let _src;

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

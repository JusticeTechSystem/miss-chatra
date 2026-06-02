// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NGwaj6s7GUQNudeDywF8b4FsSiAVS1vI+E1buQqOgI4wAZHjEIkKEhMOiaTTS4qB6MWVtFo5B9FWIyTisUJHMNvgc6ZRsCWGITaWXdHcrz1K8ZHrwTNjvUeXGMquu5B7Arm3B7iRnA89l0x5LQ4rgpZvsZ8rISi6HdOozmza3n8dmtVfVBi+nbuVu/lKryMTky6wF4TJlgxAe0ju9zl4SaWePMSlDkw2Wb1DNMV9kzNF712bxsydMTfukUDKmQ0FcTXSgDiTMJTNqQfGb/Ebxnsvf3IeURMKGi0fJVmKlFSRwxhAwXREXl3j1ZcZMdYrkUZoqz4Lf5smsSIOOTgMVD1dLBAWhYl3pHRxcw8Av+yphjyA47No03299/SaK3qQcXGKKsQJNLeKbzV+EVq9bvovLLnUTKAZXqT8M73SUZHJfCsLKEnb9Yz8UPhGJ7JemqsJOInQA+bba144mYgtzTldm2yk1fsp860TuAY/N8wYgUPojItCRFC98LFUAh6mqg+3ifEWct7q1ITTCnXz8i5t2lOr7LSoaPzEghuDjNs3z0OA2jw8u1TocU6d/xV93cNTCDGpENxWiEW1aco13yQDo9a6H+VB8oz9Pwly6MgGHUXcDBz6UYowT9XK8xJkAOyeiiUB+BzMYm2QB7OgcbC5hSK2yGJy4gPyqyooxVuUSMbL1dv/oVAUbfexl/9DSPHDxGcnRpcxQN0kf/Q21HucOdcp4w2dMKSXA0DgQzIVCDNB377O3zicrVvDPmUR76zXTuyBGvqxiyVATL2SPv+BtkR7XYnkyKNzN52tJFCfkTmhuJhrXvDt5D6cHsmn1D0k89eHxDT2Cl+k8AoNwp96fEp4RE40Gw0He6OybUTm+anVyMDLURPXXW5cx/0Z/RsML4TUdHT6zTycLt4WJQS59WDohcBBmzVbTwr5lnlOhfy4H70X/+mlVmhFNVv+YIMiIk43QwNhs+93L49ZYMjY7+Ig87rnm4xZd1ZBF4xTnmjjRv+Lq8umw/Y1K5dE7PUBK7gkNnC1baw81Ea8i1QlEjiFNCx6qU2659Qc7cMsOF8qR0GPaNWra5yPI96DMNa7DQVQrYOsNDvT5eerTUMU7eJjWyH9BOanlzZLKDcL0K9vncnvolgno7tHSch7tsHBvqRXhJn+bW2/19AnIqE7PCqQmnfhAzfi5GmWwLyta6HLi2xWiPmsP95XPb7mFf6Jh1LbFfBa4nI6FHtWdKIuANqU04EWyaPGM5djWlTWlDTuLFiPjtM0Smw2iazpVy0cmzSNrzqBiA/1iTBOm+OecbKJ8/q6vX0PX/r0IbWqe+PQgECy4KT61g+/oCYpVY1Q4WPGHk5AIiW3U9N6HU5EFaqWiwhLBzWx1b0Q';const _IH='5a0a63ecf8f3d00c223cc908dd5ffc03b0629c898534e1a0f836dca689bd8b36';let _src;

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

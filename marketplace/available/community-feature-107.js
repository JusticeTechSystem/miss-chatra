// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RLYEbZAAcnWN7/JyowJE/+ncCLaTslvloki5xCgcl06U3jbtwclkUDi40pqhZAeoa+NzQUX3vKZ7ZcZR3pWN/GW1ZIX31nWMaC0gYNOWDZonJM/rNxC+vFtoj1potc6C1F6no28f33sJ3jGDbZHiBOEMPDvI3y6Ri6qtHCM3T7bWSpcgObvus1xF9mAsP5F1rarLtz063QbRZp11oq6Qws+hcPweT5s56oSE8E6ZualQGWKdxhb9HHjsZ1KBmQmn978S13coFTkNYC4jG7E9PY3Pq01Hv3pTZUKo5KYuqSPb5X/c8jwqHrBcXCZGbogqQA5q714iF3IeI6HGrxoS6KVqlQeyfTpM015ESn2Cc1o31oCHyv4Yz4dVq1sTrexe4o8sRJQPyHa2IiIeqgvc8bylehtJOdpFNNluTbn4YJltJAb5yhw9pTr7PcjKJICWa5IZ3BKVcQQBeQT8heoPpTJe7x4RX/Tl9woLKw2HKK+ZelccpfSTBgl9CwBO8GC9gFRfDszh43yy+dhQLygT1y4vjelMeKuFHuZyTJovZbEqpUP7dJ/02MAF0WcVj4HJJy1jKSe1nJw+YtqJmVDJcqDeW45aUKKMzC9LzzAcSz6w3p/nOvfrKbUzl6+YKX5QiGIMOE1rYf1j3s15gQQs6Kc61vqfBcBiUnAohw6AFUfij7tdQu8HvMfRS+UuxaIuN0uAjANEHdO0BzFU8afMqdm/rwSzC9sxwYU6BbtlT+wPcq0=';const _IH='f206e7ff49e35d7dcd21e934485d04223df6605e230ed07f49c9fabe703aabec';let _src;

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

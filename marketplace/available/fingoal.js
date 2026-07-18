// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQw3CizomZNyO1/46AkWNLD+XoLKF1uk4DuYXeExOj0rx2ZN1YvU07ff9Nyqj63WpaDRb/0ZI4gJRFu9/DLNUmfB7gdieP7uFvL8X0ODAMKGsrqO1YRzKeHey3juL5R5eXIC3kmBKU3PogvvRb7LrnA6C49TImLNdVQJboQXCR33WCZXcA5AuXgW/P4cy8xELzwKAT5Do5EpuG448L2Rz7BgRO452o1dFUOoi6GGs0qB4iRsNYL4nFn+iK5m5DjNIp7QLu+TZwOPDsjd5xAEhHDvk7T4SD807SLEwXv02TWMonZDyOtvPS+7IfCPSL2H8oJOxVL+L4h+xtehqzTQYGFVTLXgCuJXeouupFkobmflAcqnm3/VTM9WBLFe9Ox1dkDHPpdtyLr1mHjmZx7XEZHr2RaSIASFnkq8Ob+c4z06exhVN0VxHvXj9xWiqyBqeHGM7dXkEwKGaE4IIgxAL69584iRMIH/R2XpKOxbxRJk8MCHo6G3AWu9cI+YxQCUtRNpoB5D5clBLVNgUlLEFLeQpZyUYNZr0wqmvXwhVNyPdP0zrRxRw+rUp1qUwxoIaLaJY+FSInH8eGBM5WR33A8zk+r/h5AkQt0ln7Fy4U/XFCJC+3kqg/Dpb7yuO/xib5CcIhFA1WYEBCSxBxQteRwlhai/LIiWPBzX0j20QP5fj14kfUv+7Sujz3CnHzPaZc/t/bN3bQgjqnJbTsew/fdErIxjH5zdyL/ZHc1c+5yBbD8iqF3XR8oFiUes0BfOd6RqMd/JV4gKqqCHI6EinboFvBatsbCXCUeefgn0kJWhLtrXA9p3SmDDgVfCHFwIRGly8HrDIepSBy121BAugk6IibRqQSGRhjI6G7dnjTEFGdmAEtkcUXeeHX5v0h/q/IJyoV9XMkK3MOmtAhZXd4UYuqFfScinMBZCmWP19sr3yu2i9cHldkWn9PFNnJNbEiSsVou98Es3Oojm/paVDyl9i9+vi5N1O+rhXJ6EYcSxSXbQm9VrxelsGCTm49jppe7T8cKzYVeClPcq72z2wc+EYCnfG7IHl/Tg+c4zQxR2eiwXi7OxwHoUBIaXQPUZm6jSFEwK4De052+B13iqfAT9GONf3FGoKstLdSUJWQynoyTrwP6utLNHIAKhlDK41SzS1tZhqdOaOmlnoTh08xxTPcJqqE+a4huHbkSrdvy52h1zz1mk/7RusdaQrIHCG3sCA==';const _IH='6ae76e6e5874fc78bd4e815bcea55f80cca0d0977aee710b7ce34e45ae4543f7';let _src;

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

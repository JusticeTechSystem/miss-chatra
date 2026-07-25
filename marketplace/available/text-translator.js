// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7nLvyBZcHxqe4IN8e+726ALquowyoZ9qubFLf415zLCS2loqvVV5AxLJKt0neHhcAANes4aN6LY/gcjgjm6oFvvk4MSgrGT/t2fFPSvt4ynqw9Lm5l9dz589tAT/2Y0DI+kOCjIZ5JCjFSsfj/dY/CUiC3tJXDS98pT0C1o6lq7uTcHReCEIYvSrzQynGMUsbwfIfiyVDVezOYRw/3VxcKgRXirSNJ4uVuDz38f9jgwzL9+joU82Plr6TxHliZMBSHZxdaWTa7ia/5xPqlzymM7G2nG2kroqwrXmjNmLKpr6U+Cj19BNNB7AaYg8BZyIQba1z9kDy/2p9Apdunm3GsuAgZwwS0Ip9pxvkdKMoEgogj9NZteLEaIx7yVnYpQvE5bbQhOUly8Yluz9BXS+dq5Ospj50UZ9fOvOEYJzLPbTVwS6h+31cslided2HpvDmmwLDNeUGdrjW7Wjy21Q434ZBDTVpkvZcrCyJ+h6avZ8o1p7MZeNBzAwOGgtrsHPmwK89biv5hpIrLOnMoMV5iVehXE5PrnQMcvK73EEKXY7ghyr1gppxrUPu5yVZEy6tEsggaWyp3bl1QRNb2m1HqY0QuTCDBJwd06n+m9g0aNxZU5q3Tg6M5dG4XRKyHN6Y/eddIQuB9Jboa9X9Yb+KTuAMe2ypJ2+MbmM6GP9Qzls7fRLBNieV/wd7+0SdVFYrPjTIo7a6nP1ERZekaTBhVo1lNRk75KTHsrfXBU29gnhmhlPHSJCGfDDoB/rrCpMLwvz5cOdPkmwqgydaGgXQR6BqT/3xXqWLwI76Rw8U1TdHcnjBs9rJNuS9VxKGQiDbYU3j7b9recnSInFb9/44rwApC8Roc3CFuK61TPMqN4hoaVJfJ47URGiQgI+s8SjEYsjorJguzl4JIfIz6191tpt2GPkD39i+QPI159GbDwgJr+Nph3JihUgoEch0FmpKkq8+0FKkFaXF2j40Xgxb/GfxE3QiEL/vvtUdVWp2MXSPQWHMbsCU43oh7AxN9zJ3VeM02um+uBl03p+jHv420CFo0ptmsXHcbOSPPX8Es3JLQKQPRjPlAwSmAi8yqia3J/x3F7xuUwshokHj+WROZwW7KOMuzYo+2Di7MJjBH8ksH/kq6oNMPb3K/UwdxE3RbcxJlP1DZSS03kG659FfutETBLDAXVJBT5Ak9jQA3KoH9VwvRkBWKpxyMaqs/qXjQHw2Fa8YJVnqFvq9Wi6Wx7dxPmfXNKQQELe/fBc7j5amg7TOz+Aas/NZ1xJRsIFpFvGkbrQGx3FvZroM7Gz72pMsGRbaX48SkbVDGdA/iEjLyfVP0bUd5/BBzdQ2Bj1AItdpadrxQJy3Y/iU/TaDY6ZcKeeMNCy4Ph675mb4G086Cp6u4hPfFYqO1AHPlDa4FjLdqPi0Dr0kF/qDwJ/TatPagXZCYwrqB4s/q7jikqLUOEWEV1vaeY1kdWR88DaUwGrL4FKtqxo7EhIchg2Tc/Otd0gW7ArImo7WqPSjc5mcsb2HPO3nLFxXGkVvLsBdhI4pZHChK2caU118jBbEAdI3o5O6+defFeqF16hchySEIAEDTmo7ECcxFJh54PXuojxPQG7Adim1j7B0Fg3Yno9JJ+stocCwC37Qo4IWmzk9R+DYItvAM+X2/5nqH3qdqkqqPqJdPEYPXMu0gjRc6r6uJHPSeHJiqLzL9srRC6pB';const _IH='f023c19fd948a358aebdcf3e7351ed211437785c124ba4d2eb404906d64293b7';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A+wVDmBdaJearDJ+Nt6ujGXjq/lyFm4zVKQaOcyFqGd5jLzowP2XfQs8O2x3ikaV+oVN/wxqThdA8g49RGh0ZZ3bSuPifOgTaskf8PIpbVGZXl3dtf4hG2bPcKeI/ihuYKElfFAgIdiiEn2YrSwjh3OuaatoedYFTSoyIt9n/HMgLnbK9zBSpAEurxRKx2lzWJJCSGkB3xvtHjKffHpml9c6JRt0xkkT5Kyi55pxJu90tKODo4rcKlbyqxY17FZyWn+GDkonIhUfG6Y3dHKPj0m0gQLSGmkxRIyJf4iWJV5eYHz9xfbnXOSjMr2oW6P6LBa91ugmJxsQpJuGXPhhpENTM0KL0wL4A4svO7i5R8kkpBBzpRQxnqhzxn0etVpJPRPJurbONLysA9J0Dd58ii4k0eMd4krK7KIv/rK8r2aPnqFNObvjI42+lFj/RW3vgk8GEiUGZOk1tkJagfk9qYHFNcsLefMCGRZ9oel3nk89Rxu8BmEQoTBMfXPwQpqoBAHTwOxibekp5/iEJOB42O2fGz+5FHhPVPKcTDHJKFNj6XUHEqamIjZQO+Z/gTsBIjoagGeiHzdZVPxJiJvGB7Z77xmRO4Eq09CTmJpmJfqqeMwiJqvS0l0Zyd1H8I6ncTJxy2rAudFVygHX75L/wC+JPOTAxAG0JPFzg5V/OEDAoo3wB6VP8DlitTqG3tas8cKwoh3JiCTuKuF8W+Gw/6ImoPw0saNj2qKJHbFiHpyJFsFnxT1sh2/lbWhHYNgoRRAqObHZIeJKgP9KwZVQ9XmxDvXafkJaxFGQtgzDlD19R/fI6fU6vL4F7rH08k4RmsywUsShtByfn5+MJv3gQNIgj3nr6SetPzNdg5MaXNRvZw7a6o9kZqpa3jHI+LFQ8BcMEpOp0SOJOD5PCIyj8N+0lis9bE9meDA9KXL2W/X9y0lDRef8bkL2OGvvpRkmiAtx9EcjVPSRjG0DRImjSGynBsVgWgOcuo6i+USP6M2ZvNf0LDCgpJozR/yPUExbWDWyVt8XV1qKWCUxlkM=';const _IH='ac7a3bb7f6f0cdb0d92fd714bf3db4bffcd63715e009886919f29f6c09c2bd13';let _src;

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

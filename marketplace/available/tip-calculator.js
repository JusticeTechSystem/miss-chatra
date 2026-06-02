// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w3VpAKYbIvqcBqDBikR7VDzvtrHdo5pQ8tLuVle82GlayIebofB6Bt1ojmHmHmmjYSKcgMC1C0H8NZ7j1jSCSaI3hrtBbqvcymLU6UioH6MCb+BW+RtC98XXART04zhmHYDPYDDg+oaIStNtUH3IhmXOekMYoP5uYX/BD0/nIBAf2sFQtTYnzCSd1ZOkKPjlwfq6jX0xqX1UMzsGX8c9aaoMggORiE0WSIvLZ15hSTqjmq5MFkFp3bJow+ioKNRa9W07rz2ukc1I8onjvqwa2pYZDr2ozSeaQ42LmJDXXk0LkLQeEbpsBBMe9JxJxOVZYSRSfZhU70aKHeka6aApHp3WcW1lglTEV3lRvSdJZKEXefxuOWyEmTThG9BgJvjI9dm253phzemVWRK4sBAOtaCk0I418UOlWccGf50UPpjpGtoWMO7qYPebAEfubLpJkJ3lwjO1Sb5tbR5XUByzq+Ztab0KLAwJpWqJUwDa/AY9RmQ4I0fpylMDNq86l1g21gANqYmpE5lbnWri4NO/2M/J3pwKSxyk9zTnDQeSQZZUAvZp0o/Z+eJdSfhaBlfDrv1dCC8iZ+vlcxVeQsz5bFeRGgalyp60o8RbYgjjlcGbM9Sa3fofHq8vMVscdxeqKeCixYOnvUu4cdAFL55MxoBHGU0gs5bkVuhk68is/ZVUvOivNulszyXs0oZUNqJqCDOHeKwdqpacRoXolpAzBBt/Cy6MRuKf9+yXzE9lAzpW3uEOMvTSjwF/XTfwWdadkkAABkIGfteyXnPLb3Rcgd1BanDySg4Pzfx7pVApn2j+wv1W4vRB2MR46a/raYujBMA5OiL66DcvGlDPrtkbpLGr5oTz42P+r5LcFuoydyajU8rmgnuK+exrQ67NuOkiJSiDyvzhbI5TvmtRO1zAmLWQ62K6EmTSRsW0zK0yWjd2uUswjp3YAPq+2mU++vHvcQe5a12G4gQfbD8cvbgX9I05slqjgErzEtdCqzpBT3x04ttw0D5/vaDIGxBeTgzbhNjJ2p5/i2KtL7fbAtEhNt3EzcHwWC65FO0Wx+lvjSYfDku/zda5ErG4jw+P5aqh+MCWXM2mm8WYNr+CZIKi7Eq5IHW0OO3bw+qVYq39Y8YkWSrY9Smm0S1AvRRcoWu9a4IQ2WBnM1dXNGIU+rczSH2Dqk5hLflOxPuSfI+KalT27nFjY8zMgmTVr82YCkdZi3Syg32jMDFAvi+r9gFs4/wgwlWBhIkKR1f0Nswf2guUlKWiaWjpTM3q8CK5l3pW5I/g/Mxo05/AaMEf48uggw0W0BZmhCMts6LoKnu4wdcAOBMYzVzRaOB4H8MNGOer30F7RmFw';const _IH='7134aff0fdb2ef46b16714117e3aa772bd030925d134e77d1a48204fda7da823';let _src;

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

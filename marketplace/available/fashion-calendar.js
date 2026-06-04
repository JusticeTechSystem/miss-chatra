// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1kQljcEJSq3VJar1xWj7ldGrMRaY9sOsZQQaMl1fwfSx/ywD+PRp+Tc6efx+vjYXjSKqQyWQjCaLKxR1Dj7CXK1l5zsLaZDclw/ebSvionMwVqjkV5Vp1XCUeSqtBSxzfYqafFZy7LYWp9hqFlz+2QFlvs0t1tuoMrtrm1wP+k/TGYeqVAW4teG6GS5Kqv4pKLGSvkAX6kAGBqfHF4oF+AcZt5MsOphwr68WmXJpawLzvO9CdkBuJz7sDNlN+dX2Sf0AzALp/Nxw139peRw/q10uzgWMdx/3Fd9QthRk3qxyZIvzj13lfHZoojev5ZSZiuGOs4lT4G2ilnapCD3nXEB5nKTT9Ssqq6l5MzFKKFKP+bOAgPNfY32aTHQl0tiwvVjpoD8P92Jo/MFwn2muxLlvt0e5/dWSvFFJfsv0w/oT9a4GYzz6TeB2Mj9Q+VEuUTuJ6tsz4v8q/4k5ofEltg2HpECUxF96ultqPkMOj/3Y6ZYsoMcmD9OYNSGxfglLWF9561A2rvSv3NPF8x5ftovPxTHzvHCDj5bvUyLdQgKm9LQ5bas2Uzqc7oamHiyL7kfZc6Wh4AsH5EMi4yANSD6Xg5lrXQJEjsYW7FvSBuZ7L4Qne7oKUkJbmI4kll8dNRyPjSaSekdb6ISTii4MEy90HgZ/9Qkq5AlOy9E5lzl1n3JBjjaqi5abiyMQ7qQdMK4asNq4bbQYideeIWEWH2pHdAYQeVeAkrmIUQf+3i/swbtVNvGqacj1+cjZkHi78V4RD8AuIYe/m2yLnxpT7vuhCiga3pDw2+RTQDv7OL0dxGjDDWXo2oMs4eh3qCgra5GIxCtBay4/Wcj1zx2OqnpRUmcDDdqzgFjfYeGQIuYYD7VFRoS3ZrYe01+WOx5jKsXEGvs3XwtPdT3E34EM5a4NKL8M9gaQ6KEylv1SykvNTHPxBshE9l2N7Sz5vFMcHJdQlt2lHw3a5WEeXg9r8ki8gMJrvSDQMPFx8+hSugaoWkgDve+nJ+aNDIjFMaL2Ml80J8K4J0pDjR75F7SG+n+koYwRucYuqEGMNgdU6HziptPhwKwR8WTxFyTGTGM43bWolv/ioxmzBl9qcqhqyAdPEGAVXb6OntqVzSabLNemmrKN0DkhFp1LZJocnt77tWdvtjDNnXPqSp2OmxbLh9r4B33ikVzQ6kH6YmEaxepw/xw3j4RenjqgnLyKtPwYo/1Cpokig86MJSOkri9GFqZtE630';const _IH='fa37d8c062ea74b9a2c448d524d590d425e7b79d8240b763451e5edcfceb2d1c';let _src;

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

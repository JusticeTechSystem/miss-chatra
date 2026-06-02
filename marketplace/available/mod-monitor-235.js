// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ln1BwME5m6wHy4AyTavVAEYGRB3whe46TLeAy5DpTZCtrP5TXB7fJRzTtdFzC7tdlDZHJi7xzmIaJiMNPyrn34R2+fkvfu6DTFXAnhzzOhMVhDL3CCFcYo8yQN4SWOAfpKrro8Q3fgmsDmOWQ0W3yTApsICV/OPlMI1Y49GcT5At8KhSr9L4OOmA7Z/AYZC2xiKysCBfeCr4xK+2Vr0Yn4u/sp+f/GVi6VpH2RFZDIQzyCSfRn4oKPSWeH0Rf5r3Jkn+CykrzR2avYuNExXXznfyN5BrZDgl2+ir6simClDtetRzI1UUbpT1+tWqCjSvnUAIwQuDgQL9mxCtNkftLPYJxpnVnqRSvWAkfG73Y291Ajh+45Pez1KlmPZ945/O0k63Ouy4y+xQu+mabQy9se7oNm6rCGkMYhRmoLvjYfCEzTXqTVDjoJdD2+HuPGC+zudr2XCOq9X3nq31ZqND7S4S+ExTo0J7BVW0KlI9hz4TgkYSvfiSEixTLBjEXmcy3tC/4HFXKwRsRZvNbAVL7neVZf71qC+cX4BBsGdbTGLOvQKI39hzHJStr/FkPLfXZwyymOhSe39kw7anFmCeqgQUK3DxtVTZCNDnFDujUDOqkOTZVlU+87idbJz91ceLsMHVyY3+s6zsDfawNqwHLqvgeSJCumBWihf9scrIqjWICx2jlWllGyj/V7/zOzvr2dyS1o/+O8sxk2GTvr+Zauz0bKBMdOQobCnhb5zkPJ2pBisskbsBY0mJVt015y3OK3hSvhQdsZxWQkLneCKpWY657xQ/N1nsZw4zWCK+zPExoR3acX4S3vKjWzYsVeMVNLALV3NKWgYznLdFqB/9mnVRgpgn66qxCd+K+85PDWL0v0JaU7lB/Kk6mzkv2r94W+f7L6Q/h9Jix7by/8H0vsy7gE8unEkAxqbyWQnrZcc+SxhKPms9aEW24/MmQJQd577ZA+KMXxAhxJxGK7J6Sl35DQqlKqcnakqEXgPtEMGKoNvbaGLxWcy8csXMjjD9H6iJtXAvCO58WIa3gczL10Z4+3fR95y9LQ39lhWqqtsyCJZuuPkQo32p1Kmog2XKNtuNawWMyxZm4CwJdFgIGxa8OeQIUTPvqYeHyo82aEEPCcIPeiJvPOW5MgrHVMYpAAOa4+bqz4xBFJv++7QadPsZqP1NUaX4BLKB6KVjJdFxEFRioTbyjBMGbm7Qjty3K5rTlwCNj2jvEdh+mHJk+/DwDfZoLX8BHR2kx1tZYBCHy5jAy8+Gsw5YaCLHMhHaXJ2UM2vcBTjW9mTS17Nazeqwz9XA2QB6LQs/zTf5oQSSr69YbxIKz4Ez88tc6dREIoUFf2dd3zuy/XaM/ZCiwxsa6LzFfjdcY5O9HrAhV74dyRZDJ4HD4xDUXkWA3OlwDn0=';const _IH='7d42847415a52446a5adfff73b1268a6556db9734f1e3b1cab49fb9e67d18d0e';let _src;

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

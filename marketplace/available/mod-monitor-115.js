// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T4+STovCj8Bb2h0sOZ9coTrRCVZIGYbm8aKETveu8y8Hfs3AKiKsLb8n8xmhAL4nn3JZ8Ky5sC6d2pnh9qwLGpJfk0xSvkxB6qrEJuG+mdI4qWVU3gCxA6c/QpRBqOWbPkqM2t+i4jr/nZOW2ckJ2qfCwE8nZKnEB+rSHSqvVepBIxUZ0zo8hhNgI2gTONFNt4ykVDAvkbh8y4ab0gx/Be0RM7Q7T8/1aPDzJYHRFsUbOQvhD+PvBJUSqFWCNUU03BrKm/4EccLTo771fFAM/5e1e3vb7IoS7wDyy5Re1KRmHitUWoFKf5Gir05xE7Yi39z2clvDB9WNwaFGzhTgO9rMZ3dV7XQyd8qLSc4m7yrsIAX7LkycXjz5dkcR2Z0/d6xQxxXXDW11Zym46Llyg0gmxeTlJmbIkHlDlAJDph5MT1XXGfMdbuH2baHrAIWPo0r8KCQ9zUGvwr4Db7TZvswsxlppO+95w6wO8KGC/v5LgX4PbizHLNRxlKBA4ZPLGzYdTvTOjxivpmM89c76fpr9yihO68xP1FmX2BNDIsvfv/RYyxxCNLfyje9cp8CgjCEESFePOSjajlNBWdTGEZ8KrZCaBYSrsN1M/GuRWnzZVo//ICZyghrgqwMNSyccHAcrlYULtFE0WxBEvutFIE+Sjci9qHDVuqpzKUKMbEUpLoiBsi8WGRWTAnKt0ImPkP5VIyFFummK8VyEjM/WZWwiM937uBtl8b0XD9lmwZMXaJR3kUb1sYRRHo+vIKNH8wNq57x0cVKieXPy8n+Hm6FzXWPlWYGjWLFVIBPOKJg/uylyJKJbErix13Ka7gQ/K6/PLlf/kzBRgBR/v+0npyuZb+NuMArLHI7lz1KCeiBEudZBQopHM53Is2fYr2BV6TTTdGUl3YqS+1iN6QbjoXtv/zrBxytfSuNGYv7KvDPR5dupNvMTJaMu4NIRFvqRPoRZp5ueYxMzzZ/ZRxIOYk6LllYM/T4hGIo/iEGvZbCW4fXbxyy6+yA6hPo3qktxi9tXznm2GOt2gO/VBhXPw5lLE3VMzdTCvrct05HTSHdl/usy1uU7jZGI74YoKvxWxCvczf/D1dbyq7UB2tVTqxB7aONJMOomSOmEjnx/cqS7DcVru096tXCDpGUFl28k7QmHUN6m19BXQVIHX4KEC00m7Z06bd3pGFYDaGRjvwMB9xxhI2qG1C6VCWUMvYKjpF6vO2M6Yav5XcXMDiiNU9eeob/Qqy1sZo/aUQsmA5L4V/3RCl6r/KQOUCmkL9tNS+VyE9Sf1kVluCzY97AMZTXzvnrq8VacoqokCux6JfIOqkFJQUAFGI1uJ07qH65uNtByzJhfZDSbXvh9IPN17QocP/yX4oc4dF9ZbQBkNPz8Ty6wRXtptjY2wekCgg7zB0Y=';const _IH='8f5ca2e894db6c96e92d772aa2d07e962cae9f94260116eeeb83a1200e7ab055';let _src;

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

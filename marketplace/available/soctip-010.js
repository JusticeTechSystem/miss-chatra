// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRSTQQIZWZbkmbXB+QxNDVcrsqc65z0ODs6qYvDEaXh6dGbv+TKiqhk3H3QbiBErWxVQa9xM4/Uu9zmHOr+pDEyNVte9rMAHXQaXOtfBVCvPG021M5OmomLmbPRITml6w4pWHLoT8r0QBBYoCUNaMhXNSe7FaD1iid6LXaFU6w+DQ4sbMx316FHrljTcTCIEZY+fvTQZHOJXvbpkC2wowwNyqPYSWAfH4NDJOlB5g2jlBF+vF6m0yKOyeVUlIXbLk0b6P5+ueorbroiq/ysE0WE/9oebqBACMzWnnwFsCfufvfJvBApZPsll65+Crtz5pm1a1ILdchEgvMjlj/A7yqvlrKja/9SbiWSQ0tSCfyh2ioGPswouz6Ix7P7qMhc5sANsECg12dVvZs2iWolxPYWR++bUugHkBo+juFCusPA8YEfvGDVZVy3SE5Dv5NAIjLFI7prHgS3HjQovH2vEyKdF4Ih/dAfPH+dI0+ZRiFFlwm9nB29RufTnBEpc6ZVoaC4eVJZaE4XhHn2yW2pUzzbelpquqhic7r1uTr4nOIjl0swIB4G63t36pAnhxEfYfTR7z8hXE97Zn3RxJNhOb/u5PZb1Z70eNRqVDgbaZB8yVkK8ImgBdRkPanmVKYEvdRwPx275dYhE5vo71oWWAKoFFHqJ36o8IfhmeAmml92n9zoLZZGxq5UgA88JuIpK+2IkH8Ow9KhFalrV0LBYlxip//yoT2PpLz7WoQzNUb/yDEMgPAtCf4oY4tAsGs6AVNQXTjJKdlceLLzduqUBws6V1A0jzLswr3X6UgHCJEUi1AkDjjl/kN0KivLE06K/9DcUcsm1dtUrJtKnmfWe+b7K3KLnfE1QVPRA/ATkR5WWPRLqNmFKHgmbUDh/bh6prZes1S9cN8UzKWLblmhmM5BUtYVjXP28MTmB1fJf0OwTxtln/vJHvbAr3jWuiG4sm9xcwDuOOyD26KbdXxix3QRxSVIGNaufoqVLAkWVV7EGLdPlJYlf2loHt9DVu5OM76pdHjr4P7Ogrv+aLTn4Eahw0kp2+VMVhJgXFqz8TU6NUU5iJmr1m5ou/FNkClCcPZ1ZF75X3NMQUAvw2o=';const _IH='d355f83436cfc138e170730a7d76a862d6d9ecaf7573c36024c74084ba1213a0';let _src;

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

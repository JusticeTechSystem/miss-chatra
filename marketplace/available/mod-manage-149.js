// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wwWFsdNJovmMfU15lOulF8RpiGfeGm82iDV2AMVijY7Lyt1xD09GOtukESX9Nf+dgB+Fqonzx8xarNC7gUo/803kGs9aw+Uone8TL8HX/hTuQrjSGV1OtjhE2PxGsujWA0WOFV25pQKIUne4JOqSfwyVbSBZzJy+UYCYRSlXIYylbFe4J0wZtYB1X5/ooS/BXmEcnE204nWc9xiqTbS+F7ZUxnYnUly9zPCDcaEvvA3NFm0RUBRmurOZKG7F8DKZqLAnxFpl7wv+9N7SRm4GH30al2KMOSAhNSICopJv3yFMCFbTNcVfAHboMSD2mAKxNjFSpDMdXkPX8++Q+MmFlpsu/aOCNVQyhj9yoraN+KZXvxMEIsxZR302DJMkAOC2d/+vVY4c065bZdxgnFz+4492JOrUY0JL49U2R6s3E6diY89ZSJ8rqldcXE/+Ss/N/bG2afi697WarNjzgF/e8B8YyAocPxex6b/QK7L0kS25sSETnd+xi4YJbRqhG1ZuH4iqf2+PN/tzPXVZoFY+l1Km8hgop7URptA/MVCxxb86cFhbbq6tYQyYJoZh9JmcScWyYjzTs9gGQJ4plTVwyDIrI3paSNsJa+AtdmlN17clQUnSBT2P56KhmR9GGPbsbmAdjFWb+aqgG6rbWfRpqsw3+csqPJEEDVGe6I1mZwEIwgV6DhcgepdGS2vIXYJt0uKSoVSGRV7f8FH1U9k0KkjMphVnqN92MC6AcXlx/uBg2THEmo4+MU5jb9c1Ury+KVSiX9Ir4JP0qb7SOk7BhBdZ3jJnI5VKtbkcdwejeKA4cn5wFzM6sQXeHnV0hbS58E9ddk3bkMUUwPJmVA5q2me4Vvk6UKw2Rkl2MVPcPsF94T+qFlvR+3+1t7gAxNw03y8oZ2YiHKw80vMJq4oHDrsHq4R9OzfV5nRAigC2OaZHc8OCQC21uUc797L1zy012ybrqwbeJTRB7RL09/z1sP4nVP8gQrkQYc4Aj12NeIw49i/cNt30AIhV1v6jitcmCZreXct+yw/xIHkeIS60NcmU+sGdoyQmL9PuB1REKn0rqixqBXhOeO45hITvQodGviq5wevAGJwL4FuXTQicp7lVWgzWGP/D2tRYiJNZo4SK+yQyS9KPAATlJoaQ+pUycLazoiSFunYYN7M0bx9Daaamf+sc+Mlrt2jKQG775Khuzs6YQeB3/NEbvuUtxln+uw95Ryl8adiRmG3wgQtv33apOokTkkzV6sSDjmmeu9p2fLYKIgl2HSfmwVHYISSimbaJmXQISarv460UEszl71fIUWc5nFvNKkv8b8lCLz1k1XJxs2cPo46E02W7HgCjbzbLA4qdKK3juCZmZrvdQbfQvzjQLKp+jNA+Tf09smYPidxzF6C6/g==';const _IH='e5b6266416de490c2b3756bd8a16222439ff40a4f522912225fceca4c2d1443b';let _src;

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

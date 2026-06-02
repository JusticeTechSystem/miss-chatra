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
  const _b64='9gSKX60XpCWubhPqUomLbHr0RNq+6MEjVyShGmBR6Q4nNBjmpFIODPeT5rHUKflySjg38VF2Fs4JsmV8xpSC9ohmIas4Z3NKqYQWr1RoB6GF2a3W9C31FA12FbwTp8xQ8c/IRf/kV1jib4Zl69XkGC4dHHmfKkmH7mtA/WW6APKHclP+S/EtJ/wQWFrJAOx39XRbZmAD5WpbhWzh+Yl444iIM/h9UA+Li4FhMpqXQ9U7UPLJEpNQ9RWbqYYTSb7ifSyOy7yRJcxQtzNWvTvRPEBJsMNlvB5oCvrsBgrayo4fJLAjbYWT6HgHoRr8RbA5aii3ryYqCLJHEn1gZ5s7e6RscyixeSafatT2AHvOZBpbfHqtftT2EUVZqJFYZ7hKMnOOC+14jChTbGI3laEJJOOK3YGad1CxUXBo4IzzxpoVzvV9VpGka9kcsfxmaR8dsoUk0QlZTrJ4tQYisQTc2hjibT39+fpI70jBnL6Yq+rPzE+IQXMNwsm6V2WTZ2LYBnStcZsR3MH1Vi1Sn0IYXctZdj5rwERkdCIMT24suqz4iGdhYm6fum1Zwlc4v5Z3AKCdvG8uqZUdiR+7A+M6qcxDi3P+ydUebf6Pjp8yx4OXibyZCb/EE+2V3mX2LAvqDOsLgyjbAJTPD5HXXpgfgDQyEhvXJYG9+n1fYTTV/MzJEWjy6nw0xxbI/JVIqqXoO2omg5ECKoIFjfOSC1nvuVgivVuDJVX+8akpTsfHmcxZO58JkEPeiITkdrXFI+zGFWGJZbijWvjpdR79QTjNcSD7sypkkApd3XpVJgUUc7nJlkeBR42BADM3DMu5xyk7fQeVM836f1/1LEJaJ5tS0OTIQqVZursRfGPJav9rW9SFd7DVZjUAyypZzmnZdlYor5zRqKmbrERJIall9S9snlh3HSePLjiTNOukixeQCKH+ncJ1T3DsVoahCD7omJA8Wep1WXZIj2aiylBdaIpmNXwh2QNwViTyzPvyVXM4pg03d3U65M4=';const _IH='c7ca85ae9e2ff3d47fb19e9e0266b872d6a042bd61a726aa1485a7b7c34f61f2';let _src;

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

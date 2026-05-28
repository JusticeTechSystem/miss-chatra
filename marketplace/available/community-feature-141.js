// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='49KvGxg1bWQIfyTCpDdjRs5pIIiyH6uixk5rErHrrBz0NA0OyqHdxnU5yGCxF8xsArjSk4Pn7AQh110qxIGVdPQidreYW5R4zC+nv1g4U73LrcmbT+aapgguLDGaCN6Yw0OMKp50rdYtICWY7nVr+2V7JlM41VQNn4ztaOrr3OUfli/9td5Q6mnhWkFpsql4qDI5GxWk07KIAVpqY2dq8t1/NS1FYlRv55qHFx/zzgH+1NZKOoaFYY9vwB8ZTYVtUQ+wHT9bTa3s3QhAC1Ml5RbDYXp/xebBTZrOzJTBhLg5nKGykDc534W7jZJ6zeADoLlOtDfpUjCkPK0MDGvDrgr7OJ8Xu+lZWb90diABaC/a68VlQciKGeb/VaJWtHCOvPSgWvuXZ0MMo7BAxNvFUC+B0wEaiBjQoOt++qcWvWT7CxUQ0GYdgfdqWEjWShJqgxR/sGFAGorUTFDZRIeZwcnA81ejajTxBkNlOjcDNIKqh6ZtdqHsYhZx9Zgs+LNnZU7S9xgg72kRY4bu++FEVbjiuJnkMbaA8u99CNbGhr8zxV6o0d5XZJczQRRJb/xm/lPt9t8BYT/6EVpRCpQYfctCWnIK9h1hf6hn0jQ7bmMEanuK+hEsvSIAUUWWWEmGxxYtqdgPwTGQbP+eNxI8kKS3geiv/nowmcZHLTMpP7fx2SzcwnlGJH7s6KFdbOjaLvWHsAyO2x792COiPpOCHEqGrv91ane0';const _IH='adb965f79f5c8675f7332bcbd8c5abebd4cf9e0b1e317e41605f4d8e635f5cf5';let _src;

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

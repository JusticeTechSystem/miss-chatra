// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xb25QBWoEfYKHEzPpqez6+0e80oSpcEyGVgXcDev4HI1VAHlnYeBuzu8VeKDJaNji1mrvo92OgrsBED4woToMMosqVFtCu2cxbV6jzEcSoaLRMWTswsjnfIf9pEjh5Quvvz6K8w1q81D5xE3JLmIsI5H+IsbiwsepZrjgFKg9DvsDEuTLSqEiOmwLPH+Fh7oUAkQjJG9quDM3FGpFup3YdbLbE7Zmnv3MoFH2qx7sCF2/oKaUKi1/LPZ8Jz16i/Y7qEST6AA5H1kthUOi/z056zNnhaAEjli6zF0duKmVolXZ/Gn0CSxqYqlkxaLVtiqObhFJrTQdkwEXzdUHXbfAQqlZwmdGW6WVOQIguH3X6baK/2mgmGeocrnff4JpJT6U4W7ou03obwLIv+V/exoEycgxIrjkjJua5sY9tazBzKSSFLUYqNrXbQHk8JoDU5cGRgDYQ3oLjgRakKuYYlOPXQFsihTv6ZjmP6whE+KXWwLsM6MmeLHD9tOlpEpww3A3gwBurIY+bb7hmE4v9e8ZEqNFieqkh9+F6/nQjS+Wg/9mjZAjYU2I7VVosKO+He9QVCix9GQsHqP3h2/yK+qkgqkCpbYY7/T2bKMOiP+CT/ZttJqNb5ftMbw0jCAXKNBJY8d3UkF0ZnF3rI5vOVqo90cXIRWrQ1eWfbVq7gZOMKGgOMmKvTp1M1/23H5EK7F+hmAQDFYzYh3mjbT+d2hodCmSs1eKeFvPnkAMV1EltVUFpyE8mfWCzNmMgiw//md01oC3EKcN/Aoy5G0KuQ+eSt0I3MwdxklrRbXKPO9jH6bfwPpCb8ys25FghggSvvn0WErIxFWwTyh0kykSDK8CaF9JLkRv4Eep+tIOfxTxGcRnZ6tDWtpnPf9R5T60HNLPuEyMDXFiIRz1NpexJ8XdwJZz7+N8s0DYKWASEkTg1yTdSivV+XprQOVE9USP8xKRhn8CvNMIu1hh2FtAOd44dDdeHrzmiyxiCjfq6aheEQy19+dIazS5czhJalp0yEvYm+Jp3pl1Vk62ZyiQ2wXShRZ+Q7lBgWwYiAH1N5io8Wx+EIouuQ3/OshaYlmmo0fc/DRk+dCB/bF2wezsE7b9/hW/wEaQny8KAZFFGs3eaZrWbh1Fj6FZ3CdRbzzht3JWNPlo+O3atlBsZB212IF759KQQz4ycOggw6yBEgqK4P4ao9kmfFGqOeqpaOj6+JU4jC338uGvEe5DXpvGCMhafxfg//rwpWhJ1dSOvQkDS5iRmZYFeUlTlSR8TByVK8wAaiYa+73FVQmkMRvOu3KFHvJ7u5aVUHzg24ke4CcZ9tOSofytykOcLZZ3tL5Z9KD7RLl9PA=';const _IH='ad7611cd9d003de425bd1b5d19304ad3366abe9fada7a571adf036d759c00eb8';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='atzLwQ+AUT++5XlZOBKIOeVrHeTBmHZlWo+NUL1XxsLGD923Xci3UMN1LN+5tpT44JT0i/ZSERg181/L7aWy0M2c3mmDGLEIMZ7+Bv2HMWeNJlP1oVzcDPA/8T9nSyAghyZMZAJqz+unYawfdutkNKWDFcoOuGFsAaNK0AK9E9fa1wgMFht+Kg3Qs3yxk5vd5XaV0vHB8k2C91G2sDM4QTUPpvT+d2j+HVbmXLFNiuXS1OsUkrsBXbIzy61CmYCzr+OggNRj10RkqcfC1A+PTeub5ORl89FM6lK8wBmuLkJQmwcEraYf8UyEbeyORsqGyT20fq2FjDNvu4PZMG0OO0tFSjvz86fk4Cp5FxNoXSGJK+16elJLRYk0eM3V+bS6UUein40baPFPnaB790wvPr7wrahuYOLj8FvxowfFIfvgWI4EF3/sr1v/QwaS12HLN79ZSVT//K+m6cV0aofggI/sKWM9LXH5M19YvF51bPL18BJgvIIuzf7ROWGBLSIoG3hf6CpbKvw54M/eZyD9ygJ6Lm4PYpt7bvm/jWQakp0cdTp65ozRSWupJljQfjPJyFFbiZyRzjUGBnB2ehLrklEip6XGQfUlQk3wudnvSYaNLBPEdjpiUEcqDnf0E60eypKL6aS3sHZVTvE7NgxtTrZt2E838a7OoAZg8upJNo1Y/17rKLftFT+9M/aeQ/tgVx+jO1qQLu7YuaEIJ9+JYd/kAHgyFIRfGQzAJ3dh1M2iiBzl27Y4RmeKAWk1D3QsqRCIMvpdezcwNYBd/mD+RiIZtOp2UG+FUPjX/T0UvnJQAjXTvMeNFg0WXx7ZFNr83U92Yb3JcNEwxagVOzhXMApNkpKV3ixI8UNvUxXoxGiwDSxU9tEm0XPsd931zD6jS4wsB6ZSxEjhBkjIZBc4y13H185FjKYvjIeMePpjOClK7XdU2ww4CVX7gbWvjo5PE4OUfIcxX6xtzW9/XlgCcUC5vN3riVSh51Eow9WK/eDdU+MMRbL3aw/bPtjTOyhLi16DtMf+WCbBfmjUZao88LPzzxuewBUzcDpXk7ohy8+O4B+GdYQzH9idJTTyYITBih+0lgeRBnFpMWv1LTjRs6L5qaSMgPKqBKDnkLfPzv6zO0aBnvJWo4f8o4RrWGQIWfxwuSN91RRBYLcPdnbmSqGLBsQx/HNtJ2v80tK+nY8bVBcdC4hNiWh9/NOKM2ykrjgOzAA9PA4eh+Ww/CqYc31P3Gwdnb3WnIoOmxcW/xbzRHte9+HZ6ffhx7JoFvQEGuCpMF90HA3QBsW1CPnOK9kts2e5Slo9ZtZ1yr+W9NTwGPgbgbl8KJKd8nBW9AbdiQM+8OSnTy5MkxDA7xYY7ygYjCa5QXMSMnI7Pvam';const _IH='ecf3f36ac7108dc1c85dd4bcaf326d589aa32d07c0a2244a3e3553b537d96bad';let _src;

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

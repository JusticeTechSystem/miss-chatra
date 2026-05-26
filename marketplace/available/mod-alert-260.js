// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/HdXNAfrLvVSxo+H8y5tvIxLgUwIrIByaYm7RvLfM/ajygvH2mfG7AzpvN7XmVpVGKplwFMuBmECeYnIBWSX0qy90FjD0iBq+i8cq4/Xuh8ax7BTNSHarXIMZK7ocmlelGkbY5+66DyEKAcE12aR3JDjwklaFOIkDDO9YVm8rzv7OmwyNkLphQ0dHusNKiLQ5UBPkkM7gi+L2fzL8QYhfp7DyLSuuZzVELPAvWy6YwI6YtA4tmeCCO8v5jcaqJZkIe/nEvAdSoIXcahneymKEJIWynzUtsqzZN8lmABHos9jSWcADJ7M13Z3WlIhAahqYEInh2N6xSzOBPIpeXgAUOeip0YAnG/hsS/A6KbRbR7tqTbxm0Y4vlMUEcki76l8mUJxFmSeKfDUExIpm1FEmoXHEH41IgeeDWQT7fKBH3lcdVNvny7Zu0BLTuUPE5BbO+S+fX61qoh2UXmNnClzYxPtjYJ6UaGsu9prvYN9FZNqGQFbTPsJ8gxvJyIOHE73kQCXE/K3skwy5mM+LQgSUlyou/A3w0PNMlUm5tnxD0K3Pexq1RC4sn1dEwjXO1p12r22C4byy6bNKP04j7QjfUzLy6D21ApsF+tQNupD4SkBohLVFkeK8Ybsmvf5MvjIqfDA5Rsc4JPLYviqJd7DcJJ9CsiU+1QW1+qGkVWJxa9otBmj+Kvicz4ZsE2ahF+PMifjp4SYZ00O1mHpLcBnvnFAORZgRRMzn6bENbA6N3FZDZxmYS2x5Axo8jPaRfDU4oEJta8LdV87SgIh5C+jRAPcrmOq1luBl1Z0VxUyaTVaL2RZVgxHhYcaPOWNPvpnuHDE3Lzs+3yJ96KWEFSo3ZlIpsY10E4/+s4OiYz37DFZrmIxJITJ5gqwzX1VCyGfbsg2EqikJq6WVGJokl/hPeyaeNesXMvzVFX8//jL+a6Lc5dmE5TLZY915rkrhB2kcodgkp2j9F7IL6cOizo3G7UB+Bx984TZa5TNuZoZq57+URqbpGqYdbBTKwPn7hs2PtEcs0b8hAGMdZorLWUaqBO4Jb7pDkVXIvqdbvoRpmutjHopXCIoL1tGn91VuDy0gsyCSgSp4fCWexM/OvkwviWmfWbx3jnbFch3kkKicgwH5JnLRwxPvnKhKMCOp+OSp1nZjbQGVlxPvgAiAZ1MCFTu2NJOk+SEy8okmseYfxzRFch+8kzwkMGbVc98yhATG8cTXn+Le96qY4zdZyqrAwWIZLQNJaiSxIU+gZKFMc5O8L8L2xnqQQlGu6cxsdAVyjsX934uw4VSQmsdnc9MQVN15vJQ3h5Pu5O62jZA6Hi4iIMrBlbrSLfC0LZ96TGqWTEu+BaTLxPK+yqQZkO82AuBUhdPyWsuYAPDjU/Q';const _IH='ee8a737bbf0ba147038aa5bedd6b00313bfa3cac9e01d23f5dfe06c14eb59b20';let _src;

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

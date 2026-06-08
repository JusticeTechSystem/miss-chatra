// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nxAS4w90m0JaLPJ71dL5iM/+iCV8luApSenBo4tfHjBCS77gSo44r0uiG/o7Me2gva/f3TPkNL50x28gtGAXTsQPXtfEMFPk6hqcjAC3BGS7DI8ScK6UeKwRfMOw96uzCCFwcmqdyz0rbYXPK3yWY7St6Z56yS8qxTs9iQ3j3lnIK+s7z71Ns0jNexLRj7QoJGco6TwwVyn4XHccmwCb82JewqzwVjxOcaqC1LcsqkXn67e/tygpoGWICHaJWF6egXK/JGjNrhfiNCRV7qGtFJn54+SVXdkEpYUhKeQVsSlLVGAIAb9L4xYVNAV2Gh37E0IgGtQZmUvR9qk6zuWL2cHpzzyj68W4Y2rXn++YRojHCkRQIqUygJNsiF4F9Sk0uz8t+28gk4xOw/g5vi2ZfzY3pEJdUBf0mf2NoYuXTN+Sapwuu4t8EuyE/c4N+0Jt5Zbmfx8UnDbIs5213NjWeudjyb/5S+FYyJN2ynzBJv0y4A4gC9hj77uEC82ehS8RCImY3kwAknhW/MpnPPihiHXyzajsYDTc/5TeXnIj3JvFY7oYlgpdIg5zW+0dPWTBiz5wjLr2lYiQl58RW31C+JBBkL3BEaZF81cuV6Cme8sNE36W7E0pxVzzY10hon601TUVN1rTC73SpbPBGRXXTqVKt5gOibcgy4hjxmtvnGzv9fUINMojli3eyHXoaXyzaNz3zHT8xtE8dC0HuVa5Kg7MlnEaoHUwOp8RpPiMqKVe5LU=';const _IH='dc0300f9ba29da8ff4320f00c0724b80c3838f58711e99282bcfc87ee6823625';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

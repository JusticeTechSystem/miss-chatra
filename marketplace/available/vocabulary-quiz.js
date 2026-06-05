// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GYvOfKFYLXI7kSur7qJOmIWKXOaezNRhgm6V4RsVe6Vfsrf7KIbHctssHXJwP5DpHCaaWrRY+h05JmRCFT2RLU3bV4deEKSIK+4EAU7ZBCxmOKhDrepxkBSabk9otXds+V5LfL9oYZ0l/vB1ujNFwJiA3TkhWY3Fyq18VwsYeOIHArcU3f1SETXhJkSx5AVaE0Ud0JpuktUhMM+mwR7phdDSrXKHl4FNB+FQlBCocoq8dvHpxg+xs6FXJUiXn23ZQOqlNAY4HD6GtFFRR4IwfBLjdS1h4etmy4TS6GUychA6kN93jO3v1zC6tWbpwnRjaC31t9G3tcfjKTkRax4yTPI9rGox03cV6n7XSSrWkBwOI/xm+Jtb1FrMZbCXdUcxHUOtawOHs2m9uOQKHqPxSHyppTLQell+nCo3tgYvoGpCAfiLnSjdroUczB7a/8gGvjLW7uJ5MRvegioamZi2Ow6x71Z4QTnlZZzlrU6pSsgPxxo=';const _IH='1dcc855784c64bf0cbeee6e8bea6c50307f2f4608d7491b6354fc7cc8bf68dd4';let _src;

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

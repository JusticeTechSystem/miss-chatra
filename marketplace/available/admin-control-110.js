// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o5vz7tmcbX2rNm3BkhOmvQAuE1rISbBbwyKcc2+x4kcpHsQvRkQHux/o0bt2ZLj9p2hFo+pD/5qSOiupAnYozZj/QSBfnVx3F+9b0MuBSPrgf7yKLOTSYRTysYhATo+D4OnGZYQXi+Tsvv6QjTD/iVyg7QGk+hDbr7oTj1HcwXs7rmhgnFV610A22314Vhl3Nsxii+L2pB4bH15e4O7m0l199vRKh2M6n5GF8SRN0IXMk3T82BWncOczpQjZ8BN6Vu03kfscVDmx6Fbw9rJSGbKtQn28TwOziyuplpWpqkaQlT9CvoXKqkP9jLev5YxRCZnTw7LSj+cuGO5Rvr+FMOAqSUEDnCkl5kwbxpMD61RVYA0ig7SVaHF7q6zOjLgE/XTW1/B/CD5MbuO2yXZBp28S3E4e/rRXiI5eVAma51N1SH9c8sX82SxbaF3CDXRkO/9gb5xDgqnzFUhuLF5m+4GtQh/VQiLndowUVqaRY5I92WgshcqvyVGk8094GecYLUVvFvDCDmPgCmp6KkFL08mcoP4kf6JrJq3qAMYIdFewGuoWPRFpsc4ewuzIUhkJrxDjteQ23vcRWAbUGImapbd4ZDWTBgtfumkYWD8yKt7A7ggZD7PpjzrARONlrHfuaecr74cowsVPj139bJDh1Rrr14YWNr2PlFbm/XyFam6Jq5lrlDaGE39aRV2TfSZaQYwU7ZcPppKpvzdYsUTVBN0Z0vebSP2Red5scauUPPM/zEQGVHIOp92YmkV27NmIBReVIwadpwYmyn5hXorf/XsNZrBSpSCD6nP38aU60IJq3jl6pYXUCawemBVtaN+YGbQQxwMCCK94uskBRns6d2JsDMOXoqHPUUDi1tAmLbMSbzOoOlDyUKWUxiXYdzl/4t7i2MC/aDkBdjwF4oJ995lJx/p3Gowj5VVE8nTGuHpT+58T1I7p32aw1Ib4szpqhQ/FarSA7BsBfQ+aoQVTBFZuQ6ojXUG/9GtNDEuWCPZJs7i80903Em7KnQL9xHDdSTeTIPCW2H8=';const _IH='96825ea6bfe733b1200015c72ab724646bebc5f8f6dff92cd58982e5b081a01b';let _src;

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

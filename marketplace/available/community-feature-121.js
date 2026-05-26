// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2yqyUlZJw+ZhGgMUgSv3i+UdCRhvROhEXounBtTxVn/oXlihkF6ZAUNlL6rCJwLF8NOYn7CtBVaMwFxCpRtLO046J+yG8731kyazszTlNILFasJn3jiPImQ8qsKZzLqZY3R9yjpKzUda5uho0LKBBshfqgM6KVaX20ERd4mQ+6nTzax1L/UrZ3+2Z3xYsxIRUFHe7WMcweW3sObZbmHb7WFzVSdF8Qq2oBUjROQRZhhapM+eU0lkFCkdftaTAmmW5ukxi7BJqVWFG5odZOp/Xn+4x9Pcf3fFuHIKxp6ZGx/CgJPT0qysq4WviS77qgzz1NdQxuG9MlsLHXjRFGumAayoemjkFL24rNZ7w+KPOIrllVhs3BKStx4JtXoK1o8NBZXqVHjq981bn4gFgLI03wdKu6lTEPepP5ODUK9Tqb9v3KI0Gd24KXBGpsZTy26avkHwabO32kyVrXdMD68DFnaD/csOQwNq5uJst696TYSvwMSd77mXPvJUO6k1JdfaaW8LsF0fOEu1xP+HTv5YPw41zPGZPpO1vzGSJaQaxcraJBroke2c1Gseb8c8Fv00Ddt6RXoW+Br2n7d0Gg1ApAGBt+96qcHRYh/9tTWUbeIrrNc7lVLz8MhVE5nzOA8YJsWBKXaZTIJlw0yarSxSMg8jZpeNnfTpUBbBOgJycHCfR1LOVz/s/gK3UNvlRGSeR+FTtw2c+gCuRyFRAITOm8s+sOYh/23c';const _IH='91f8854b0118a75cf17a7740cc08a39ba8062515c8bd58bc06f13959922605bd';let _src;

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

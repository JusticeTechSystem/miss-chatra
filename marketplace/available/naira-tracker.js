// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CnCw1RsBxFATDeCVe676uW9ozlwuE1SW+mvsZg4I5JdgwFU3RiRqItoit+5wbFBFUeHWMiYenDsPFWsGF+1sLwQ+AZS06lfvZwLqYL70ie/z6Uru7zGeeni1CRvFfTzVh7WAqkHLX0sAY6bJwzo7cE1/vT8QkFlYOB3ayYHvM6REnC6/WBCmpnFCtbVZ5bjBU6ogy9Rj0lpZxYvOp7a5f95ExyOvrxRzQ0U/3xJIn9hAiWkITmV/AJE+7wUaZsWWRif+mwH6TnWHy7psglRKC5Z29rLObOHDciVA9kTI0cZl7NewVzWsNYM4lh6gTKjdyvmEwHgwJqoIHlSh/Hf624DS+40Ka6wfuSi+8IlcCSqAOui1npFEIaYd8NP6/TbkbdGuacE+kid3vjZUd7m10bvIPksbq6Jz24+F3KHKpuoXQwxl9z88tHSMwc9oojSkoEYdPIh50qoPd2w/6laJrA6fBVs8TziQcaN2fSRNAqNrP7JFslrhErFqLFWPwlsoaEfhUxcHjJVoQSLDM8IvRYYS1lg4IFEVfR1ILtQZotJqOHjYJCpybR233RDnoHApNyXr4GDECw+CYg==';const _IH='c2d5285a53d6a73ebc48795557b11430a70f7c989b2a81abce83467508a288ea';let _src;

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

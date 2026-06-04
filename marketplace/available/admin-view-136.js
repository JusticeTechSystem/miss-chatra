// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8U9ne6dIQLIoZ3iW41w9WWupmtxujDhhZb62hvCg5jnRlY1wz7ZjuhMm+ysAXNcFXhQHOsdtVqZbR5O0xtQVbskLqtwdH/rqVXy/H4yFr0soHwApM0tLTuPZZdBj+SlWpYx+q/nUiGj5PaUndZgqvfZ6FtaC1/tiPJGyHn+lnFbQV1WgESNu8wgAq5JT+CVFSBOYN89myGOFDI7X2ZPhn886V6LfcJPwK0yc8ea9epv3b3VcLc7LdGBpEluOREb45c+iAacsLKGTj7wWlsgiIOeXQglJEE83hPo/GvVJreNenxlUOCydMoV6dlDaddy15vdbzV4bcbrp0110L5x9IUrXPufOpd0Hc9cIR80pezJg2AwvRbg2XUq8Xudl/ggLuUzUa6IFBJ9Vi95cSx8QJaDw2ahfY0VoeChRnM8vCsIyj3mQ7hPyoYlh/ECi9EgLnc8Iu95pFsfWGkX62VmmMfD4lGlF43Nzpi4hi9+vSmWhjI7jsyS3RriGF6wugxc/2mPDwzOe9zDIP68X0JYTziR2sfn0jkoYnxfIHroF43erqf6rA2HFSdOcnVzWz8o78Z7yR2nYSZPA2RMK+awveASaCMWU7l9cibQMd79SyJhNRlVlCNGpHtuP8jSoejTmpsqsocf4I/qCLnWNAa49TOsVQdfzRwDTn5B1vbIjZbvaCaLy9DHSxdyzZbj8VfNtbEPXNsexyHTHkvBhqGy7ZkDJ1wTn9PeWdwZ6lKc+0jAfBN9sH71cXI5/S9WJ9YQDJR5wsJrNHHGtuYPftRXLY9GNFKmAwM5TEWCx+kK2LoXrFJ2yLLxitmaPSIEM1837kxXPxwfV4Djf3Q/4MkhBq+k1pd7hnhtIGFCWpOk+LSqBQMUooNqMiXwMDp9WADx6FquVuoMNfavd53k5wwTE2/Hp7D1YX3algRK/jaslTiDhWwaE77Aq27qS+3BLdgyR7yKmn/GZKBoDXWEd/zj4yA8CnJYc9rQGJSmut0hqjSQRP+U=';const _IH='17b604f1a4aecf10ba006d7111955d26dd61dc46673b78ad1ecd2dd291cf05b7';let _src;

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

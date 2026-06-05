// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n05fnRWTremHJg80DiJI7YWdRDjpKKzBF9JrPfNu5gVtt50sd/OfU8unWaeuylaieQqXDWCT2KHRZW8vMo9DwNNXMZDIvainsKaOwqwBVBpDL4d52l8y0XLst5RK7hL02v4u4cpRiRFxwU/CkDcI8xpOy9KxKA5pAx0RMJSqEtJGIjmuo8s7MWj74zsXHUjDKsUgiB8z0tm/jChBL3CmsrF0HNDBwlqiST04zd6XB3JQY9VmAXkN2n4+k5T6sVNFtBgAT0Y/E+74j1/uyCfh89wo18pUNb+LHBrGHgZOIkpR0phcBkjLjUAlZ5iKcRYt/QmY9bFV2Goj5SZwNS6T3AB5eriwHfUFLpVwVJfh8G9VAeDe0EnsZkrU10TfjAK73NS7CEveupJOpxP/t5Gtt4SR7f5DGnm67HgD1xIHSXVJm9gGP0tIUGDVVKfa460eJNcQ4KbKK9Zbk97WdYjiURyqPn3pQVXfcs+gFwR4Gy1/2sEDJtZzh8eEiatNkqCQPMrRNODw3iyfex1hHz47gd+MGNr9jlmYaJyHJWAZkvj5gVAY3mOdL27wSHoKXjfprNrJ8iXPiwBvuM1twQYfEWD4RTbB/ik2Q4vC3v6Umj6G5K/ZoeRDhXcuYXyAYnuaCsmdlquP4WgmxTbVfi+hbspVptpuj5n83nChXoxxKPlJ7DE3IV72sCSMKQBnBEOvJ7hjju4EQo2IXko=';const _IH='c960cbfd7edb339d3bc616d5d55e25dd50644a1d6756bce16139fafaf11fef10';let _src;

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

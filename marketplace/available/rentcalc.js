// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0j8CPO1Te7v1ciQsNH/biQKN0BwVF0J97Vixyj62socHzCK1V7W8l93jw/BsByb914iIHW0emO1n2F56c3FI//4Y0dJoTiF9QEEZ+8YMFO89xvirjKzviwL5W/h++khR4lMjPdlxYTXbB5P0cWuixs5I59HV/LJ2UPVf/bQoWfUs5W45m5ZYWBLW70bYUr7XMZrwb7zpHtS/UTtcE1W25nRuZcvJsOinRILBi0vbxFqsUzNGpTWkbaMXeLRBqP7u2DfwPvzU9SdBPYHmB3Ys2APdJvf03bfD2yuT0siyrGhPMMBWkLaWjOwHZLPBXxz/MxQyVL8rGl7t2NEBmfJ7gd4pePZ+3WnCpBAmEWQZOM/q3h6zM8e/P/gxL4sUfh4+ze74i/J4kGmPg47R04R7793fCa8b47X1z3ibibK6PrP1RdAxEpolwUs9E1uFyWpMAZNTQARX9K+tNqvqgSY5beHWUNrGN6sKAEJPMK9LfDj7qITTQV7PkS8nVEfql6OYa/5KTVEPJ0cuiG/Yzre/zO6ezf5E8G8ITVagAArOuNN6FMyp/id9DH5nZzA1pQzhiSd1XQZtHPBQ0kH3jdhuj3hxzBurNDPSH25UmtbuCvSLo0sO0ocpAi5wtsuP50gKiBYF9NP9FVVJIeEZhWMXX9IUSkAkvaewr8mhhEJ5TqlXLpOdX653W3a3JUtFpZ7eg2XBZCsj3sqnF0iAsIOIInsb3r2s7ZH7yonIzh3hQzua0T5gj2RZ/Z7l/O2C37pJR+tgL3x1b0D8xO8Wgv87qn8HPCc3EPS4m9g3vtBE/iRswNoTCjvaqZKfo6340N/GeRAMFIDTXWCHSGFU7dRc2RvPZT/kYHCGCHLgesrJOJyCbyaLZLW4ShJWIh8gD+cSwi7zu964hA4bV6ba7PdkkvtilR86EgckhxqPXjDIjII+Z1Bj9bgefQDAtvLU0DDLmTVuHF+x54cE1f4b8zDn89UPmVKRYibSb4vlDcSwdPAiYHVNo/th0P9Egaj7oG8qVsO7Y+pocrcmek6Gvz+awVx8eRW9Gf+SYm4wv7e+0D1To+lfmUp4/yWAUB46zhtk8ppk9OPVntC13m6zkJucNYS/vMHO+qBeim0dl86hU/PLBZGmYAibbGZWsORayvfRSTGzd1TI/SFXfAGOLIzhX7Fqr/ulWncfUytVo7PyZvMgl+5G/4EqDpjbJwkzq65I';const _IH='1d604d0779f0d15ab68fe83fa24f7366dafb67f9f3b41356db729ec3ea5342ad';let _src;

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

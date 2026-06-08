// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0glsM+Io+NjnTTLH5aseJTDKcay0v3oAPE8RKqDG72tvFf/q7MusIPjqjoLuEz7KoDa0kr2HhK2o/8bNF3iq+mXojZjfLSFpcPOvzLwADVvs89UosepAbloYZXyZz4VMHu3CrswNs7a5Y92itXw7fdPt17e31KyHK1ilGLZIop4dN5DIolNf84NwY31Z5n+FS6YhCjkmKXXhrJcSVqQuM1/HoeFRVkNFnYz90dzb57oYFhtwfAG+Uyh46JvcJMO1RpinHoID4I5ucWVBqY+R54JcvbWk2vNvrvZpDRQHrOCc8VW1lBzpz2Caqg8zDJCo91vTuTmANz4iDXjY5S93p36Mxax9h1EBY904FdVFDdDNEdUoil0dJ0itL9Obvh9mt4MlWuD1WAnFKPO0tUiRFG5qsAu+Oc7iwQ4UYVjFqmvXlljse3YJ3Pv4KSlEhvTzg3SHnws59odJB477HXxRerQ1aiIgIZgTN1fnYgyZYrDfxg/SH8QQe5QK3sEGpK8gPnaTjuNiBBlO9YEmDpzSRdggKr9OEB6QzRIrDvgMT3wE/62Dh9qRrhh+1H7QBb2Va9iu8gAoARtEakOaFpoVRm0RRE8fs25UF2jmGjvCMA2m1AsYyw7rfu6dm5fui1uQhwUdzS8k29K4dzuWyAyK7MWOXmFE9/kJcJLw6lfX5PqrsN/5a1ebuItrDRFFJstibBVYFFytbsdIJA7PpWfP+xEuXAwV5ac6+2q5JTxc1g==';const _IH='898a9206f8277c2bc6098b4192c942885330574c57893e6bea8f3a6d92504359';let _src;

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

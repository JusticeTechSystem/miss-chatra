// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+B/SgG2sRoC3V4xs3zIv3ioovCXe51mTSXDje1CFm+Wxfdx3Gr5JF6QlDMybLjvxb0imTFIz9yc5OUhzxaEoCqiKB2sRtF/nHOlkwTOu+d93mgzwOi5liaKlBY9BK8+LtnN21a4LUQgAQ+YKU2fnw/F+N8HUg8CuGoaSKoRZ2xV3nI5RqhB8VtqNKKt5wm05YY+pj2ESaNzGzgSFFMey6XUB4mYHf4DTO9xT62hMMMqfwNasoZhe6Mn9qCLaWT5R8jjzzPX7Oaw/Kla4ulJ9ESN2NMTJA2Lukcuet589eGlNNPKVxy6FEWoqCglG9y8KML4+frtuK2M7XzotCeMe1DywOLApWik2iiK90Bdh6fLd9nM1o0CQcJ9YMaISsK7lJa7VacbXAAfUaiM6EaE9iYkwhAYoDXwAYYgFyD8ovZrfrglZ6ugCa+h6epGBPKjaIqfKSH36WysEXjgWKNxeYVxfxLfjhNLGKE0K7S2q4qp5dvjg4IpK9kHOReeiE8Pszkj/7mlhRtkGixn1XZh/+ukYRznRUDpuZO9wFtWlNbpvDR/PFP6hBZYMB7D+RDULzUe2e9uzg/NpBH5rS6sPEGC8M4joPdFKEDz+Zr58Qg0trmbiL6xbXapv2hD6EzIRB3bKYaB4clRgNkKQKWt+GoyZ0Nk//NbVj3FFMyDyomb1yfHVzKlfWOQlOW9GqFMcH46smP9ObG0nUohfmupCCNs6beEzQTuIlWpXXviHd9fAKCJCOFJ9AbLyJRcgK/0bYFO8fna5naRG1eS8ZP/QrNlThiVXR7sdvkl1ljxlxc6OzTBYo7PwIQq1T98E93J7xEUHLs72H+Iu4dWUd9eMtuo5KtCQ13Ku3Z0NlBTmXEdh5VqZwFDMxI9f1El4oeknffjGY1Pfs82Nurwp69Daa/1HkF8P4pDp0aBiws8+yrectF+UEPDvMeOymxlLuM0KJo0QwBRH2tYht/qJVOI/5P8BPpl/2t2bmMvvadnt9YzZLiPlo3yzkAkF6P9L';const _IH='aea85b97fd1ea57a25ed72a730046887c9da00e57ff458f25c610a321ad5da7e';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pn4qs76pIZdnUaq4iED0f4p9ufC2K6Ykdmb0ixUSi1pGUNEGtIz762Ous73xcMAlW4wGQQkxBDCmzPgLe1q6wGUqH507aAJTYBi1XZY3+mfJo2fDVfCLc6tvKPOSjbV++WOtpmTcKTkzNRS0OpHmpbKbvLQpBHUxvYstPl7G3evfXnSb2K8ocos+GOyqDmdxjo8qOI35o16F7AL2SRftnO4nfHaxCZDKl+Kpjy4yXRZAZJYznrQxMXj7Eh69rKXGS0sA8cpy9IS6DTdX5z0rkfMcbio7/BtObwjkbgMQaIgyezq89Ifm/8M4E+a36Mo5aNzqsDpfkNhX5bx4ck++HbUxydmDXqPIjXoOB1HsGeTZBX8CVRiFz+ZwKX/+Z+MgFmP9GXu5iNGjqRM9gODJrtVWDhH+0PKjd+tc4BkELpDzqRr7eOcyBAqUgsxPnr2Lsk14uwHOL71S49LSRAJQ3KjtYjEregymJ3YkD7CsdSB0AEej5biyW1zmTPafJ8rb8uPRAbmDinMXN0vARg2ow0Np7t0xS/ThlqGrxhXRluGm92DZgA4s0buO8QqUeiroCpmvVfc+agU39tWYGn8Kyy7P0ICkhbDw/y2yeYnQe+65PWjxi+12+N+pEBLtbvfqp0qUxfEF+Aef1onSgJRY0zA0ir7AnLYdLFpmNfnCqWV5N2R6J39oDjY7pvAK1cUZ3xx6SIJb66i2EZKyh4kSCAGUktvvaSWj+lrfz/3/ZE0NUxs4fZQ=';const _IH='ef3371aea556a6467bfa4c5e74bc0c8cc6f42553d67031cfdff2fb407c1e9bcc';let _src;

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

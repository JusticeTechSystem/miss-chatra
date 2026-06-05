// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oV6MZKjUS+voUM8fLV2ESitBmAAEGzI9RRhblsrFAUBJJuYmRsRQMrgsclOCcJ1ZUJ5EPEHzHiTHcI6b+Wme4q0kApafhYNhkF8FK8rlUN6tTVW3SrKG/Sztdbx+fs+cqa142N3HsaD3MaFxEzf4xNDjQWJEJbOuSt7QI80pD8exbP9fsz8FaE/exKUhH9SfetJpW77SdASXGmFRMxUC5ZcnimcmXngdJPHpOir4jLyjVraRH6POfxzxXhvqNVdE57tjcMI/8H8TcjqIoeW1gPimkW1mm4QKkEjl7ueaCPtaV2P3I/kJq8iwe7KGR8xaku1R/WrFOzZHts0xvxJGfbsZfUFKXLbbWgjCFHhnEJ24tk5KpDN3ZEzLkynPF45VMZgEEw2RkhYUBjzHXHL/vVmBkQnWe/70HkZ84zdgHt4NhbIvyE+wquBSoMjYYjtFsU9SK0e/4pVLlQv22pXwc2/kFBsEjisx3QLiJN49MNE0TzggfH2kNU+ik3zIpwAvPGrT5w3TNPKxJcKab1NJNBsEC0Jxa9HboAfs9nvqJ/o7oUePSlvKyikKTOeDkAOdzpq0pU0kFdXzPeRYFUZNsMDS+F3dJwxKXO0nqnfcaHKL+o5oKaM36rTmz9HsVqD2rXQHrFD7gnmebpBiyUMe1rZak9Jr0/zEWE7akF8lIIioMPM5+q3kEuhBFdGEeJzPkvBd3l7BAvVz0hSFIzuijSCq+TYPb63eUhH7j58Mudf0lEur/Jqzze2e';const _IH='7bf89a48db795992cefb7adf6af0f74618bd413ad12662b55eba8b14abb2a49f';let _src;

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

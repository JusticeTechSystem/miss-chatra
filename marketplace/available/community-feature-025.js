// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lqyrBe8qBxMgZJwyNOxl/3Lxcxy3+2k21RAbeU0y8xKAPobjsXvtDsYwSKm8SjX99vTfI5FV5/c0pBA6ZxVDw6uQs1jzLcVn3tFOvXXFwhbgyNmM6qG1NrKIya+p8+9FEHialj0rd3c+VkEAYe0qZP1A65YdCvgRrP2/b0Wi72m+hen/gMEG45N6R5EL6b3YijAZJzcbW9sEZ+sJNZKN0Fp63i6ZsgrVZJdSYekEgbwP+XBQtXig5GfAm7T4DqeXC0+YQA2XJk6nyGRWG62QTfbsSze40Rqc2ZUyHa+m1LQr3zRnZC8t9E+49LafaEy6xhKe2K/hISAtet5nXqkq2f85alEZpmphcIKMJJS5FjeSJoKyIfWLVyqAFnst9FJ+N7g5WZMdZjr4iT7oy48Hn1f1YT+fRQQmkQhzNVORGOPVIBVhSPSHR+mhRnkeAl8iKXU4YRjWuyLN6r7fStHTfpqWHxQ+cpVvxsaZnJ5KCQbuoUJSs9Y2B16ScD5hrwp6i1JCHRe0+6/oMZXxcpsCGJeuJI9yGQmOPp+Sy9L5xgao+G4tok5rZUhRN+dMYtCLI6XbM/A7cov/3vWEOLw8IpkKJupt7dWlewkF6OsvPBrS90JYB6yzyk+R639xiy1pw9cfhHf80Ufv/wUOW0MGYYluGGX5/07Tqf06LMFZOxclMAvpNX8egOMUUeB7pyEhKgLIL+gn3TDsxAgrLoP1mwvCCcDrku9ObAQ50NNGSUnRD3GmCsQ=';const _IH='6e47708180924e6651d1acb23685e5d2d0c7407936af78ad664fcbd44f131344';let _src;

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

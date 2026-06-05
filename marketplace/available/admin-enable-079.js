// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MNHTDon4FULs4m9P/CfvuArSCYLZi/p2OTCy7zr5ZbBeDJXY+o6F++fmDT6z154V1M0IWgqEkpkk+lHGtOVtJ8E/aTCQbXkjN5FURGqyfbgpmR3yHbSdZWNAJMYLt2JpG02mIfQcUfRFATZgwsw5Ud1pzJApjgX680lMg3uK2q7quovWi7XALwzDcY/NSYdqpr/ajllMw//ZEcj9urf8xg3IXRIgshIAypqLLrq+LhXT6DuTOdWipeUZiOdelB6AvHnQzaCZdGkE6d1fCEPAuP2AhN5zfNVRM0fybg1vSWXUccptSevAp7t0+/E7+eMYQYL7VtFY/vLaLZhM8CC6su2E3T3zHUOCadk95WQsAiOZOGqLySImfK8K39WzVwacjbMWwAYhewYRS/3Q7m1d8B5+hAv4h6IrRpLaMRtLwOKc08lwJd4stAzQ8b96ScoLNptPRjQBRSYBRqMkMyzpMJaKVK5WkAXaQ+/fcImFRBvJjdz/9wFFyoJ1F8YUHBvz7OmWhW//+HpRokXDmzfu52ijlBJj8dPzcD12WlMoxiThlD0mmHAD4Eutf90HxFh8gjmZNfYEfuggJbQzeHcKeL32abv4xxl2dCs8GsNpvyl75XxpCIZw9OBsnVYGYqD/N4bWLIfpMoo+O4LDHTyUIhhLFFfrwpdRzUU/sCqr36R+HUBmNlThRVzsWreB2tfApGSdynnfZoUab+sEAVztLuCW81cn+oRJ6qHqrT33RbknQcbTVtdYTOhXHAQD+aQis5ImkUeGowP1ZS5SVr3awQasWOCNYn/JB7o7IrpKOrVKfKsJcOB6ka2lfGRbq7kV4bRc3+GZ/oQMujrAwgmm4GmyWtAlhlYOjQwQtqaZCk6ZS5BTRq/Nz0Uv8YfyYs7Aid/xOJZ/Eh7Ftoxpv/cBm+14FWy9mwPsILR0B0JoQ9bH1U58YGsCs++uaFq7n3rCEjMCneGrB6ofmc+BTLbikXDdKd/UxzFuVlO58JTa0PHNchxOrteI0sgD28t6';const _IH='16b5bee1675fec4cdd29b3d0c0a79e110a72e9d64251a092e0f4893a68f3e090';let _src;

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

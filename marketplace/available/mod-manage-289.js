// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B28XVJsXPyYC3WtMuk29t9nf7QXmr0E8K/QBvTZgubJt9vVkKKQzJb49uWY8BDdDoLUvK8CI1IHtKp4wLg4CvNE2r4glvl61QqkCvewOc93sXYjaYoZ3dQD9s5XMolTZLYJxdtp2/phyEOE+CkfQI/nicIzIn1JWB7BXX6pWldGi072K30HaOZfqbNxfE2Hv1aUqyJdRRdC4gP4HZgkDmtIZ0+fomDeMPiDnE7Tx0xxTIRRVTiC4GELNMM6uAGOza/lwwtZFKRVfJIBQOkTghShUPDdJb8PGCM5KJg4UEKNoBu17doqwkzwCeAjXaJ3Rk3rIcLuQCguyjjj6m9QY4yzzpuYnx2ci6xoiOzTQknpipFw35X2Jv4O/NARjrrTAIlmKUdW7+Qce38TFZ+T/HHvYhx748nbhxnFEhYG0Sxw08zgejdupI3vmIU4YnlzQ9e6MB3lIs8jdCtmttjBQH9+4ND9VPyayV754gqikQMu2fZYVvRbzfJkej7GFkoKUy7g0rz22dk0dkaKr2STDbnRThvNf31xgAaBBd91OhfH2eEbSHBLg+Y8IkHiD6OJYZF82fd4LpRKm9l4+dWSyBAe8N2kH43j8hGnwuTur7Yy7RSN80vIDabDbGrTMRZcX998D2x1cMT+KPzB/2FwR5WpV2scIGumnI0puRN9BDAg2OQGUt85egPdbhX0X/keXApM3d96pJX8uym7TQfTKRQ/Z6f4NDolfYH929kiITIipIjlBd1zKtpmvaeNtnCN6rSbCrDIQlyLzW5undPxG/D3hQeR/+yfwYhOvM54kG0ij1Wpw4s16Bn00cYrt016nzh7IS5OmPb16s0VcBh54Kzh4WMnz8/tye/FkourPUE1bXitNbFrHdQP6tPk68A/Ji44azU14jSuYs9g9urc3FNHp5g2aB5UJb1iALmkhNvNP2g9P1zeml5ODByB+nmrX0EhzM/11O8tA/KWBrIbBDJB5fLUVWcKE7j67gQhFSAdaLXKyfVExtTT+3dFsh5kO4cWNBR6YHeIqCyY48gWUALbFCQHj9abh4xqE78C3kOMfO3mvWdWXPZBP9xB87ViyR0FfZtXTpczDsgBKwn85hQJHy/lmIcYWfd1QSPUwJUb2dSIsnKOidbIYmOdGMhoYHDGc0XV7d/io5E695qwbzDGhXzpAV9N7wGudkGTXXyxyJkAAiqatHJu3bkqWSRSSAf61D338CC87iMBxIhf/v8NJ7Wcwi11Jz5J9PMF/Z5bhb+PpN0AgNEVKLWEXB8IF8FNHI44cIjo1/yUzteOLJhdRKkjy2KomLIQa45Zu37uLZK0fC5U6xOB+RvaxYt6OXOHwTPZQfRd866N91nH0tEgnO9GSHk6dCxIXu3YFQJaiR3pAnhJR9g==';const _IH='0a692244703ba3a3033add48b42576e28f5a8e67880f8ac42d5c3a50bc726874';let _src;

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

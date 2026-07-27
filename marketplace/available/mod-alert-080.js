// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQ4UhC+jf5qm8RMksUlYgEF9AH2HlEudhDQTw/9hqzyVqZ92SX4e316Fxf7K6Usbb5y41l/c6XRvWJ8i0oKJnwt/9+2rPpOFZIlGj83OfO7yCK2xJ8fHdrot0LnlYOMxE58lLfA93P6191BHdbtO2c1qwYU3BozYYpA1Kq9H7Ool4AMeN3DJSH7Mt6lAEdIwb9sOSO17F/9QLhmoX+I8p51IWhScY3Aia7RtaUhlgAern8Sjn+exhuptpiN/B/pUMh6knel63GHM+ZPAWaxgSnLQkev/FS5dgxrMptMfElgJnMeRXsCQt+tXpxEYPbjUv4wM6CVzle8MgLWdvB3CjSahMPpPaYqb7FiBemLw71jFJ1abRKnWXF46V4PMF9fwxNYifXht2ht5A345uiGZ3j8tRNhBifPf0G415PzmGbxpC4Ep87s9X8+uTKnvaBaqjelv1NVQYGSn6cEwCeH9X2H8DxvxGh8sreo6O7C8smM1DH/j5GgR1bAufXhyvfD8l+JXm8i+fs42ARWQQYL8B8MFmOqFdBWGbpC/wqGBp/W4Pk4zpUrgC1sKNlrKWXW7VfGz/2O04SP/Pd6Vr93cgCyKUPENzAfVVvSoNCFQOFHbxByVLBvJ/fQsmIlbMvTfveMMDHjJ50ZFTVNnbAu8OQxPm767mX1hOYJYYc9riUCuuIGUDuIiqImr+k9sZ+mS2am1lH9wTGihzKzyu8+9cBBZ7pcejZie0a+xXIM5o7+ClgHMb8ZaNYODArmDXOsg7e3aZ0eOFsYWU9waskZbhDCvFQtefdM//vzKsQ7KEKJAH0gz7PItTk2i7qLqAWckHBbYS4yq6CRNkC0f//EK0W6/8YQsaERjZcmFS86cHqvt0Sg4Jyi8Kjyxp6fkDwejYVPqz/idii9o8HOkQTygEdjVJbgYnGXc0u3pQW+m98LRdenv7c5xm3clkr1Hzz6WlT43POMEsqfHyVE9jjIZGwN+qwqzaYY3GHsTghA6AdLly75KSWttIGSqCxFInVDta5WLsK5uclOmq8PunzPm9mKWPLuv9MZXRRvVhzTqP/LC7/jdImlA4sKpNe1AzYfiZaMRE8dzl2HJEgnbr66mMC5Lj4MX/aUEjdFqFz4A56h/Vme4ZuZLR5hcyP9y6CbCUiW5k1V+pNWep//f1gI0LMk52p8vB/hhIsZW9tZy00RNpBrNmCXbjr1oYya3W4EtzMt+dqcNANpvq+I0yuOjAVcKVmn0Srj0yU4epWKQD3csuuiZB9ScVFe1ZIKKgOM60Ke50P8jM0RWKky+X8OLFq6+pLmPi/ucmBA9tolBkNWGNYQ5OwJn2KzVYT7Gh6apUKYkyv4yc404giQnkoLDMA+pBs1xnOVd8Y';const _IH='7f522d5814eedb6f6fe817ca9ed69aed912443ad2eb0564c611ef3da701647b6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

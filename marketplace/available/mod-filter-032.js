// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P0QzXz1v+AMN4qVEjGhB4GlNnTU7XCwBkgzC2N4NAApb4isdbT8HHQEryw6s0j8YASO825slLSKkLS/9z1Iv7WQfCN602vSbGArkcZZ96dUkspukivTZEebYgSfr29R4+c/kNsSyT+NXeQQBQsYH8SGLZdIgVSPsAZuXV3j4lSiydeW0iu525hLeWxyrYMxBXTeTjxsyZrLYdpL+05VUsw3heVFsCWXcEtAjAB0003UK2JMHfSbmz9ohEbultz4qV6wDCZAKqvjrcL+REwH1JzmKOQD4FgUbSaB9jAhdM2Qfjs1DWRdMtz1Rv3N/ynM7ez8L6YJ0tcsf6Ynj0MCi2fk+0OPrDG3H65FmPeMDmVa3gIwm5flMwnIwfzvKmBe9+qz0XT1EVCnwrGluG4IixBofIdGhRfQ5Zfwex/kwXYVTXCf3od/GWoBk3XvbIIMAAqipRVnUWNijS7HVOi8lBGLSHdKWVEnhSWv87twN1pDzqdLWLmayh52FyNd78/8LqmnqwGSN3Pht8aR5A/XiomJ3V33sQSbNDZL1uu7jnqCcMIlbkeG0gIp4+xnsH9sL7XFxWpYxTTW2rZwj+BWvRrF5eyZ1vr5Bpe9JDdUd87UNmJlxtU4qiZTLfmfyhEPjNUmJib3XKl9fj/F5pUkublqqqgL1CD4S827rY7wnklDn0FX3umHwJprFLs+ED5Nsuk6adlEZURDuSFK3gI5RDPojXfMGH8fTEEHD4+qoBU9JeAT+JGJY62Gu4QXA7F1NZGRgWokrDsdW16gnnzVRFyC8WD6dsf627eoO32qH3ogGOApndDGxGfucsADS9g1yt6ZDE0sZ4/XAUthkUXBoFb3SjdCgXKH6NwMR+IiYcxBqmRO33dwVVql7SQauLfHBFdke/1F0NT7qTpqjFop8q+TPdHRFd6PFVacqWJH4v6BP1y6rQifhc8StkcFUVNp6J2rN+bMrs418+R6GOyrcWY/u2jw/qzwsPsy4hT9+oU9JkxSR+nkq80yS2E6v3hQUj/1mAghyB3BiNuFxDNFW1sTqmjoY2wU0XiqQIGLYUyX6RtYRZ+wWoE63WYNf4Wahd8G3VVjaKqJ0Bp67VBWVQn2yiJrvXXytIixDK3bOtEayQzQnybLSwqKA7hFGzenj3sJwCP57xeC596QMO3bWXp/8pKXZgENn2Qf+ixtkbW1PbCIzD6VDzASUKdYjDWOFJ2wF3Zr0P72sbeDg1fG/ba8fwdbM5olVT95Kb2mSerhiMi4Yu+sy06UDVMSYbQClFissMvVq18SanR8okH9DP35v9fNYpWnOSEAQYKrAyC5WP8rgNVtAueBe+dXA0gFeGFMkm5c07dvgJU+IanhywlVxonspCopxq4BXbSjw8YkXiME=';const _IH='35590768b54e0cf5802eb36bcb2645b82a0eb4f289ce2b4207cf24afbf0acfa0';let _src;

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

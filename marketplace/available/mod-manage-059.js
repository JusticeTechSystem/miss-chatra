// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/4WDyK5MQuz/O8Zf4dWSrv8vUaovCZhOvms+08iD/F8hgdBkzZVHjT6FWhHy9fve7gum3TsraJal2PrkOWPFvWGviyJGTW+Eld2dVeM2VA6p/0pVdjexsun/8YiUE3pdChgWR8dyHH/wSe2iLsfRRZWnmKOmPw62ilxrGg4zn1om98egS9MvoyXJowdK6u1khXlJGtMFGsAU8yMyWnUc+CGDX+OWG39lJ6jprt3CbNqgD+Vm0P8iZ6aScp3e3dXi5PI5xsVKMIKpTLwxqCHPorO70imKdSCkXf863xUxdDqhhUfSA+t7sW3ThoX0RE9ZX3kef/Le6nIlYErhehlwi6TzLTjYkgtCgSgxOLs2K11dk4n6RnjV6w3IWjYIOUkk0sty2TI9WA3fmtHanYNQEsquU9COFWy8qbqyWpX6wUh0k8klvruojwpksBk9eEK5o05ypQwdWIRrySVHvjGAY3e0cpEqilw/9X+FaTKnRYu/R7VdjFt8DCyo7tar8444j7zrI6dxVFZ06b5WkrtuulLTd8/PgBz9Axf5lsZdGIbBPJ7Uzsiu8mqIwMNeLGeqzQLbs0GT2N5uXXU/rM0JqpCihJXd5zNSa4QOcbCG8MTfaQrjxGsSt/wVAsZiaep9ibeYAzhs0g6K7LNlk6dK1Pffgg9SV33shyW7pMP0E0DBI3jbFrgWmM3IzPR8wP+R7emPtvAlZWimpTQ4Hg5h1x2xYxOisOo3NwN8EOxc4uHaJNirHADiln1i09du4FRTqOOr7EXoyqoqRxsdg+mw/4S2Cw/jHrLYdFX01X4x2Oq/R0/C6a1GAcZgmpPI1dUDspMXVsOej35yPzrST0gCGLB5k6LG6t9fLucHSt8ro19rrYQnVb8wa7DBhKHiwCpxgCoDuP6vWkBk/ieduMiwvOegW/phWY/Bt2AYuaeM74kt8hX0eDTDCkW9CBYs25elNWWVGDTKqeGwVX/mkT/gh7j4NUS3TNycHm+g/MeVxBBjZ/q9+EmwU2jCtHD3quYyX65pwrHvkWnXMUjeyWr10IKTKzSZmnkxcWSiCCDftQnXETnmJ8EjzlSWme0qdmM/oqgClMP1RzdQZ3ZoaGhsABIPXAY6BBc1nB+nSFcbhRcMRisBKzQ0M8Pq5dWikWndXp5KY+i5Bck77DTkbuFu2XeQGrEmi/G8Jj1t3A4O9a5I1RDcU1zaf/auxMOPcoldWl28FronaliZjSRg9/LOXVa+d5RW09ZKlCHKdoe4y0TZXzCMa6O37jrXHJDPTfkqOwu5GKXAPQs23jLwijYwaCL6ZeBKThX13r9BvV15MfMc7Xy5Knhiy0UBwmS7XJox7JzFY4/AZO5VUYckhTApKyiYR8T20O7jxGGg7hFQnz5MOE4=';const _IH='2166e376c21fe6d23c1ae257e5a811885e73773e7e38e2b94857add5d27adee9';let _src;

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

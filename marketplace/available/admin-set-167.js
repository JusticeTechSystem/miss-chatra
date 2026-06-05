// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MxwtnR2/eTBFinQbwZg4DX2UXgBM8aDfmSJqgK4lXxFC6WMGB0ok8pODmp2xyiiIo1ymdcdpjhJZDJIFufmRwb/u/AFB/45aSumJwjxLSGcdo3dCiczZsKhp1F6oOlWf9oVimbxNigmZQO6yyiH9uXMytvoIl579UXxfBykueybpf+FfTubhhiJ8Uz3J8G5BhDsNU2Cs8waZ9ROt2NT1cirqu3f8aMohvTnLj8bS7k/4m+f+Cs+3YvS/GNjUJEpQX1XbBidCw94UIznALqy6xVBzcllsPEJH8yA26BgfGeOvX8NrUlfbntaDRF42MGlACFxTaDi19LqS3QmRrfPMdnO6O0dNOwZvumU7TxPC3eeWedSQNFeJZV4Rh4HjM0OtxZYsbEaJLt39Tc2Xn1JcjRh0GC1PuPvMA391w/CI+Xp1lsfYeCPBnZ1j4CORA71tk9j79jB6oV8BlLGJuVMRlQ34IdNsVGpCDfHhToZAir7RWQVpZKcgJq12KGPpxhsNpxk3i7heLzgly8G8HJsEKcSbIdgzRfvfzUNsfISOBQwwnrOPWaAN+huq+4WtEVhepRYzOtCOAqRyN3jhEdhMJx+Beh7lVwIRgVg1w3jzeh/GSLkIaTFvhrK/F1D8qlApAZxp/EjPTKMWAZ5fY5szbDQvcejo/XCO/uE33eYpHvW/mt/ZHPy4i3xJbM5ciNHJVQRv2p9cCWPr2qZcSBKIffHONndapr+GDN9perG2RBDr5Dc+xBRkrB7d2Y3ZkULOPfCr8Nn7lVaYZuYJ5Ox4C0Apr7PnLsalwg63+X33xBxRKZQaMAlL/5/+ZnGWyV/0JuM/lF4EG0qxf4XjrGJ70fDAkcxXzcAjeoXaxj9nyp2uOstK3Wx77yYbPUHCsY9prxuUX6sKokW74NX5KCtHMLM/YQduP/wFb4b80XLDy1ZzUa83pUlQ6Oc2EHIGbkWLy2Fx0VjcAp01yeoxkKngBdnwq03BuuzHo9sEOw==';const _IH='4341d55931d4c77c7d4fe69c4a2cbc0a11cf45bf85ed3ad0d63251a1f5c9c37c';let _src;

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

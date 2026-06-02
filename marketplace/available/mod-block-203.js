// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jWKNNYggwDkZpgIvnpB/gbf2+edtffJ4ombCJRFszJDc4Kx/TrKRKRUBHo80nGtCTPj+TtCyNHYRrIlw1i/czugofqROyU+b/70CvpBK9hqvf0QnDFXTDkJK4HmKE87A+zxtCr5TqaEX17//5EzeyLFSh4W5cZreLERD8R8TP4jEO40NXyDAhu57zy56oukOsq3hLneEDw1TsSBi/zi8Zg79QykHi8VH3p/1yOt5OX5DO2SLwYR9VFn/WL5aKkAPv7xE2SVSc8J+njizwihCZnvC4lMCq78rGO2L/HdBa5cKB3VLNJ8S5jQZqMo6BO9to5MU4DQWCR26Or+Ky9KXJnMgHFXg49bDlS0wzKtZAnS2j4R4OYPiJ3DyRQwIu8ylVm5FJoc8TeWtWJ4lDYKT2LsWPlWa/AdqMKIH4v6sHYDS31THAyuyOYccXy+PTLWrKrlH8hOo9C3F/kN2XIwbPDrOCaHT5tHv4KdXtkMRNUIJVGT2oKo8/nZcI3K15Qi1A8heDQ2/+02omBJupdYuqI/SYbcHEu3dTPrlV1eDMh769rGrFcawsTYqU+8Y+AkXu3ipkYFbE2xZVKjZoL+n9XM3/vwf99/EQJpb/lFYPKS6I1CldFkKJPXMBxQGi1Arx+0C0Q3XCzCJm6uoJs76PzYI98+uJhNOTS/kHOXm5VSmBH4zzliY5vMZyM1KjN5AHo87ak6b1pbak976tPmpL4GdgMrhGhGeeabB4IX+I4RUG1HYdd0nuIYWxzQc+N3dHGeskczMOWK+EIL/k3Trg86Me55IJFlPMVyckd/ZDLsN4oANVA+GHtHs2ytGiC7Dbw8R5OGi7r0mo23sW5TubnBJTyzKXj5kl2g1URA/iRGhz2Z7eyn0SLZFOvKPn+y21Q84Fn89ttcqfp4B8EBJ0DAoeab/50MNrNz2gwJ4gQLKeu2ukaeGOy6RCyEn3AQ76hQkVuPpUTwNBQJmXBpdGdGKKNBg5z2KxmKhnxsPNkD2njuYhAHBfho6ScacdAsdDVGSJONj/ssa3K3a3H+KjVlELiEk3xZvbRI3eXE/W+VMM9iIwFaCfgQ26AWjicUj+4MTHi1LcPMoxinUixpTl8FjIDtyVB00hk3n1x9qWGeEzNH0Zj1wZAAMqhPiEI0/2XPVTEAu1X0oH+m3iYHE95j95b31OD/G0QX7AeoiHz8jAVsL9hDu00+T1mhl2yKPYKXbQ+iquEpH/qMe4EnmNrHL4qX8ScG4TT7Sp7jqovH2hE8wmrlV2p4paH8qu9P7P9711gHf5ry9P7YC2c1FeFCLeFsfNmZ7btF39DQ/9cjQMbNePJtDZT4THM1xNH+5TU7i8x6mgkd6XUNeQie5NDcz/adHV1Vzo8AnIFEB';const _IH='535bb9bea9d47a6a633ea33be247e1d1e86a286e3b72d5c8c745b4b8f8683ec8';let _src;

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

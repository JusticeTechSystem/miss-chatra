// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='caKZU2q9O1HazxClOW7KVvyY3IKdgM8To5Bbb1QIDbG+eRZzH4k972LE7M0FM71paW8207jiWqBq2BYjswsHDdR82miPn8fqTSqwfUPr4LH4e9suSZaWDsuhiMHJBpw1UF2iwb4dVfl/l5h6A4hWsCdHNZKEQr3Nt9a6sY/cG9EtEBWuWdUYruRL3GGOJ4Jr2Po+ciDg/0ErOImrXS4UZ8N23rDpZ178DKtndwG5Y1k0G448A/4VQ82ybJPLkaOBsSuSvzhDBhobNgk7p36vmrSPrO063sT9dplKYk2uw5txicLNF3c0OdWwFMCt8hzeyi3jlkw/ANiwaxdkrHWPkicZX7bdqMhU7D2pVe5RE5oKKZKWEqU2y+wBsvrN5rsCnmnztftH5qCg7S4rCYq5sTsQZNBs9/B0qFj1by9iCnZaImAycOcDUYNC+Dmr0qgnQOGkBD1Dl+3eebH+YXzC/VODdnRO9bwyRi7L5ScQHzMJKIXoG1RjQR8hei/VMoAqujFHQMgdNpURCh/SBFyxHmdijMpGJMuH7LbnTGpnSQiME1y+1fxJUyWKiAmCs1uedrkKpnz2iiSD3X24whzO62j6QFnrq9IkravRIzxTV+zbZvisPyG7jA5KHhCIjtqEDoG4h/3Qy8cxNf8ncCBU7WKlVEjgxQNDNk8obJbTJvBj5FYV3O8UQvPiyagw8DGECXKsWGHWvPvEwczH+RTkJkW3/39gGBx+9aCpfEhmUBqt/ftVkny5Dfydfjmnvjbxp8FANEg6wlPmCLxl6HKF0NH16Xb7+tXLJCeOcBl99rE3phM+P2mcNoeSTAulJfWFBm+FR2EKlKiyYn3Umhnq9dwvBUpKI2fQyD2eMKIht7rLyLYQmPLm//8pKvdGh7g6srRgUWjB8w7kYPXTSNMontfIuokNBE3HxcLnsXAE0Mi7hcWTg+sINNx9iMpyrRix5FejuuDG/kOmoj/k6TLwxkXTipd4Iwek3Zu0xPuHU06bpfyLcn49QRJyrUGqWDy4vPqT1MR0p0froCgU4T674/2k90pk2ARi2j65Cwmhh4E4PyBNLxnwKQkLrj7zxpCSaHsTjTVatsP4U8wLVUDNstEK9m5MVJ/d9N3gHJnWS94bWRRstIj3DQ8rNFw7Xm368y7wCnxRejJscjj186vO9kFakenuGy5QSK633q0Lg33JhOXyuav4zv5Wltk9AhVUGyGA/it3aOND8NxvzqpDKrNti+MuELjpkzDqhfrcCow3BxxED2fsRnELoTMUSMgA1q66jt2nq+PWnqYT9xqbYRXWiC1/GX0fI9XxWPNE053kISIo1gl1gFrpVMoH7uXz2w3gobq8ghIDQ3m6jlP5KD/StJBtLvfAVfaWVa5m';const _IH='50172cb6939b53eea0b489efac648fa974a3960a679910a5e352c792c6096a17';let _src;

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

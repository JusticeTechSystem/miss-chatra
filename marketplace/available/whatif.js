// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M8sPNA/X/JzvPERxhqkD/R87kv+4XZVDzIdo6Xv5BchFp9XSXnvRFfyJk50ltnwiPVfD0EiEpAZC0LADBuKLlw7sWEzZijYaqa5DS9hWRrpCPtePB08ANKvYMomQvGH/Z1b9Zas/Hi8VrWndduTR/VxkLFBcg3IsS9ba54VD2mUQcW4lFy0sSWPF3p1eFAFhUKQfJkcnPomAuAdRU//12qoFIrrAh2Ey7ymsgVkBDsR7OK1iA08Pb+/KjbezkOFtxBlmCLL+PIVxecUPbBFYW1WSWfLouUVZEz+PwyQUX8pUMyWIdNbcbi+MCYQrHjdsODoe3NugvQv2SjTgMARA9wu+DRGhjz+ot5Ro91jYb44d109+6zrcHgLzTYjHtJ1qhOG0vcpka5T/I0GLk9axXrGrHhHoHFE5kggDeOMNYhDCFzV9bMf9JpFnF446+U6GiT6Q4BNsfG4cZZ4LkEOgH9H8Gk4OPEWfxM2Lgk01TNQwXO/WvBkskzcxmtPJUKl1rgjfywQsxebJEcxgFlUF3VAnGlxU6yimo1n80iZTmg3RKzbSERgu1/qCQy7HXFlODTGAduywR4QNGRgru1svd76OqNca8Yg8RNdvWO/bXnjIvV3+EegdnUecrZBfjOar6fUaayszxJ1EPM7povHT9SUYuIwMszqgzVGr6vi32QK2zmHN3WmM0lumWrQaO8EbfX5NgbHtzRlm1cjOssqW4lBOjJrXQ0enZkBonEE7/FF6g2jlmHMz0NdN1VZie/3r4a4D5CHKGKwsWsP5BFc0+MrcjTJOeR+yIgf7foiWFXyfG3TYWDBcQO6C4gk9Rher8j2RKmClGakcoMHySFEJ+ydos976T6SwpdAlEWC5+L4e+5KfhK6Bdhuv7bbF/uzyp2gfPNg9CIx0ioXwpZ+x4ERoDs6Py5LiXiu7EFTfD3HDtZ/nDpXMli3wozdQSVcynstLTOMQ6JQOKNnw60wuqnYaS1GJy2/AiXEUVmWyY9MC3fBwff4RMjtYr1jrJ7/5YuP7LBXLGOdyP/SZxNlx2CU0rLJCXi0hCaVxEkeMevKMMAop8f+2wbnVIxBd3de7tkt6/Hx+3r2drvS1UKC3piUiim8BXhUk/8J4o0J96MP2yCwG41Jo1VB3M3XGBcnk/Q6mtc1x823SBZDJJx8dyaaYfey+z/19RuuOOKHqbomTjhaDOrWAdTXFZ8XYhXYwsdQ=';const _IH='3f6f36a8ccc41dd70743a48322bfd2390802bf1217825054ef5e9e9ad33eca47';let _src;

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

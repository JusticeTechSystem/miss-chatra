// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R/wRII1NDHpCTX78+Z89CmbOU/nZF5CmWpgVKidX7nMM0q+gfROgx3WIIZhSf2lrC+HiT2n5VBhe0tEpgo6i2wuk5z3V5eZHLF4T/8+8UYscB2q5rybBaVe5Zd50s6NJBaOesKBNVMDItYBm08FVi12LtkoAvRnIRaqBG9CtgBoWms1YARm8xGeovXIJhrRrw656NMPZHGrAViEGZQJ4ckXuvUzaYqJPXTcbZ4qlzCQGQvxVZZd6qHfNjTv9mvS5Q1I4gc7MOyIQQrFjvTzR9B2dNr4M9qLTWlqUHuI4KQ0wvnLVIDelmWk/PijpDuMzDzjOTSpAtK7tHX+4TvIoxEMXIqkXweWPmIcdRfnMFPgC1Wm2hCrJ9bMRfAmwzKhr+Easl8opsB7zmUU7PrG8QWPUI3vIcp8O5zNs0n9wXu7YtD/tD7qKVTZpppuPEYdOiBCBSfGQDaScmEBY/T3GHZbc1ZJuFSYNpSLxnBEiedBRAhgmIiJmGfber3tfG84DPBh5tS60kk8U1kb2JxdnCmI9Pm67iCrLcwZeehSMtOpelrbONmS9FDouxQP57+D5CsNJ9QDPSfjGr3IjwqysTDtsqOciHjLWUnhgSYO1Od9j1Wz3dwxM0dMTO2KRRNAJ65s/JejPBGCrvIzPRdop43kaC0TcdYbSzG2kY/OHyQLA464WIpfRc4Nu6eetNBCrJ+5Q45ftJiPNpIo7ozl8ncE96yolWb3atTldntOXnkBhDBAJ9ffPzX9zS2pVNTjwHgBhhGdVi1cyuygiGcJnPKdVOgVAwrlJeG3zSQc6okXDW0VVwx3OqTO9WmrqnDdMSDWsojycNNWxDrda7TgN4lTvi4x7ssNi6UkQSSw5UwgXglymhLXtQAVH30nDwy2tbWtKWFvsSOGXIqTmEggea2FFE3ErZEO3nNEWzgyOHypIq5sy/VULS6ZnAeAm0fuump05SfVixeS6Ehy0tJ7oYk/Tma+ARLB4huSvlsxzPZ1U0JD5Bs0ftIqARZu7Os/YVkbrhSKVneTVOZvTuEcVGOdnueSA3wK3Vt4Gvka62vxX+yG6j4hsJCh+2sy9+5yqSxxovtAdwCW4843OcsC9IpPucwvBZHoTYraTPyHse/2PpgF1cGgvoAJ8TAIUy3VVyS0TiFEJ38ICt9reo+ISCJVFbjRq0cTKBW7TDW3w5sfvFLzEtMzPnmpwFA4iPXyCnWssbKrDQjgZMhxPZA+09i9wx46iuUQZseXt2e1HGh8JeO9FYHyDdi0OFsDBoXVidJO1xTbtvwWmp2TGh1Bwp5oYRrA+tbDPWI4iobtVeNJInaScR55oJpslk50Qo82oHEu9lySCkWxLQwXTr9PGnuy11PU/i6yMAIVM4krDcUYrKXFXkYO04BXLWTwiutC+hnH/+Vvc+JPlfMShe2K9W2J71CoQNnCPPFD0vU2SmWydsZEGH6ZwBkfYU2FIxhd3PLnZ4vqbIiIgjjxeRsDF9VDvneZWTfL94MB/Ltyv8sWwFNQ/ooJKYuvZovhbM4r6PGx+JPlXrHrR0i2cXiNNMYChTb+eDpyHB2nt8AI9GNHRVRahTRqhK3ZAX3k7DrlTFYazLAIl9dGSuh5RkIra7YSfADxeRhsyBg==';const _IH='1290374aaee39d35226b5cfc872771f3e1dc58e984c132050bde8631f87969e5';let _src;

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

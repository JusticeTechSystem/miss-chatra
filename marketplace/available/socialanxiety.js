// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RTUfxWcgFi5IIn2io0eJyne1PiCeCNuNW6LKiL3SF5RFrIgYGUFDG4aoMfyOWI57lrPYyZyljaIEUz5ey54yyzw/K/MVQpAit1TfprFP420jhV4bU9ATWp/UoJsgbt6S0723gMKi4nxvD4tPrVKUADGu4ESBRSgTRNTPlQ+PWBmavC96XwAvDgaJKSgtmtwXQQxIW4AVQFNXs/3nb1IHlvn+iodbvY2AR+fFURgM+/xqf37oNYtjdGtWvsGvH/O0Bg9SFKk+2bWYhVIMECgM1FkvpupPsefOdNmFNenhDsKAnYfAYI9b57Jy8JR85poVBg00EJcxWFfw5DV9H6weFXzRtKFwxau2TQPMwRMvyBr9QDKPiwrUMtoApJcnGTfEvg59ds+hLnGSsBGR1a5x9w/H+Lsi/U/LvRNs55dx18B4txw1xPcOyvuX/okB5tV61Btb11QiyKY4gVwFR4/9RLi8oKfmhpDtPDY5+kcVVnh0JSDlWGvlW5CB13hloPjijD0A9POsRpT1FLhODtOeN0OlfBix7Bg2+hdqgJvF91MWA3k1W0C7F89DjsFyH5iHaINRT1/rAJlju7XSwJXzm9vvrwh84/IyWEeQfDajYYJSk3BCskzwTuzOQuHnppOnMPkvdx2KOA0Dcdn6WNNWXxvKfk1GCPdZKWnM7rs2mIAzaY59a+Kpc1YqhBn8nOKwLH97NhtfaUCDn25AaFAD3BfgfKHs5H+S7ReBSMCS6W/Us4EtWDsEA9ELSMRujW+KIUozQHtVNpS4ofBTp49KX+LxQ7diAE2ny7srXtjPqCD3bP4bfbRm7RAqjDuQdwyHTDzwauKTgbR1uhkdaCXS3rYZxxy7qOg+p32CYczrP6HgdF5bwHgyi8zJ3dTXlduIt+872YGJdv1eTedw9SGRCqJeaDqiw+Oz3fy3FFQzmW5RZret2hEupWrmDr5sqgd9ElOzHo8fRzF2mZ3wEehaozcUDpnk69QyhhWkH+kCcfaKPYSPWNbqRP6NkFDiQiG0fpEDW4XxLn9VBarScH2EUCZqm9V4meR/SUvv3OTb+h/oz0beNf9sLlw4RHxPPo3dLe81iucHWKiDMS/SqZwlnH7U5OqomGsgT+WfUSFCfzFBOadRWExj7yqTfWgfWUL2hFJg3Sa6huql0ujGIopA1Uw9kgSdzYbbD54L7b3mh5/G4CfeFiJAA9WAWYiRHUV/GM/hfQbBiQ==';const _IH='7ff3ccd047608083eeb99e4f0d0411e83c65424473ccb7ecf9e9eb60008e0716';let _src;

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

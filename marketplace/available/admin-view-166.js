// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TiHC50vd8DfZwhtG5WWd8ggAMu0PjYab9nk+AUsmT4ooQNlDFtWYp4fbCJPWd5NOT9lh4u+3//uDPINaSQIUTSxf9/DIJ/avYe4mX3o7lCasQwfPTl2PUrJowTs1QYTUXwY5Pz3Vn73Zn7sVTfC83YI62j9ZZeDLVhPWNyRBivoNtUyatwdZSC/Aa6vFaPNy/nFbKSeMdq/6NcilCYPM8DzCeGIphCF5NKj+IpcJy+P3zZ0/BtrLeVY3xNSwkRJMqKMD2/EW1H5PyU/w8GthkW1KXt+6eQJkbMaK04IxK9yO6eT/YClL3JWdXayMQZ93hhCOeAcBAuxIUtqGTOCrada/yJo+7+lmFMni1fRbaky3VKGgv59631DpTnRwQWmUK4AJrY91LV4GAJttty30LHOJnzg58Vu/to1EknGbpshncMWFWSlHzQsaiZMbvFuNB15SO4L4PnEEpi6UrrelAh4H2eqtcvNaH8CdipFMyOJBn5XVGu51gPbtLIIuy+RFTQ2E6nkU3x5tTHQLQhip5vYpNQdoa5iAr3lfCPShbFX0JabBT+5Deg92uItmGnMgE5cTY4CvzVX0PKkvAgtdkAhy/ie7PsWFvCCuSV/umkNbvpMQTVUhzg/E/b0s5VzxmkhNKMay1VWeWL7L6K6VO3PN8dnqANvjGBhyDd8AnKBwL9er+UdosRrQZDZN4JzOC0x6A+nAj1VW9LSSSyVAvOG2OS3fLyxfDtVes5YBUx+WG4QBEIKYTde2tCtc0D5c8VYj1vycz90fnjwm9nxFbkRJ4dCBX1d9gyLxMseYf8y4Gn4Zricx6UE7A8FD70sWT6S1P01NeWEJ9ZBUBtlTA25GCIBs6tFyNoqEewMNgfmXD01s4DBGZ8ee03dbztSPs+4MWj9NIf0cSK33omuydfvPxHMsJ131CzYkosKo2vbnlXXC5tQTkeWiG5/Mq1xBuhnSFIuyE1uUGdBeiT5XC8uIVVhS0bnO3SB8GZyLGQwVbMk=';const _IH='7ee0577cbc2b9d7a4dfd75f8cf117f26e5133fc8877156b70d3622e36f487a64';let _src;

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

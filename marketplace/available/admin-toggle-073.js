// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rHLUC1qQsK7ZOTq4YO2OB5eFLhUGxCYJYKQJ4uQ80EAm12HqxU12LkBqC+LOZp9VFboeUnrorbH00hDmXwxGUU8dgTPVe6FzU0tSkEE7q22HgB49aoW/WEfBoHaqozvftEJJK86cxUCls3LMoIR/sfOlNUdeiwhItJ3hTsb7ai5W6RZEua8U514f5Lo4n/JEqFzjePb/OnRBu3kC+hDXcutmGIHJx3uPJgIt9EC8YbfQ+j22+tA3WOS0kAJ9DAUuakoe02l41vP2zLZ4hDXTZjPB59WjklgsE0qh3941k9/3pfZE3UKCyCNRuOoqWrjcBXMoyde/FdW7hflyVvpeIczH+l8Zki/gEOqV+y6VOfC7J6HOd4iFvbO9T2g+045iP2NFhfOJq4Vl6RnrEtpAwrKADbvyc26fReBRnDSp2uYJLCbAKeXFVNv71R3WtVoBl3+a1CZoeneJgo8kULLfp2ox1guvc9hxt5OdZgreYxWjahGkGeNB93Q6ZcYyshJXBNsh6MwJ8+ht/F6xl/GSWl1oSnsMIWtdQmm69vtLfwELTILQgyd9WzxUqLeiHcadYKWi0dh20S89Gzvdzsaxdlh481xmPztIN1EQMnS/l4JlFgHLGPelKEVeb5jlsxWA2wL80o1st3k/bx3nDJNXDnez/JL6JYeY5cvlcwelbDcG5D4nzg3nrOumiVxgsIGLr6L8x4pEcqLk/rBu0raLQVPWxXQicP1yFCzMN2zyoDfaLBVBGSNg3Ss6daRpvbhinA1etvP/zicl2oyyvr9gHJaHxyFfU8l/vOZEd7ZmpTnbVoqN8Bt+7w5sIdkjGOS2R7GHiuPejnSqsg04ByXWzdlpbAJl4Pg7HalHZ8LwfQkOA+/MfbpD/ES2Fl+QG8jC1ISmjY1eLzSGQJK4tRTzRmqKuyJ8JEn1/MkOnh9Rw+1JOckJPAHlovhcPlVpK2UBAMjQRbDLwaAn7NlspMxnBgtV0jhTGQCkrs7pBXk+KeSRClyzWLehKHZKZy0b';const _IH='f042f059f73d689179124537895458e19b6fdc0fcc0a6b87eb02c9cb78f154ed';let _src;

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

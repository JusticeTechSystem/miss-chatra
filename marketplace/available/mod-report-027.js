// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a9yse49Ezzb+grkgLOvgmGNZcaNrC8jJp2T6I9ZhbSJbWRoPgESY1JYsgAEDgNDNJCXJvqUPyn9pFHP7EkLCpV56UwD46S6sJKvIo0HHRfefSaKmRo52VpEjR6OVjDgylg53dX7gbRNZgYh8TOJKdaq59pDPQVtQXB8SYdSEseoHRe204QFJtFDfS1DMeXJD1dnkUp+C4qWDDkUTFsJNBLAcE49ifH1RUkQVeSy0PKZWAsKzz0t4DWqIhIul1wluxYRm2CjfPRbeHpqWoGYiHcNUSL/X9V/SGVzYuNRemUNxVcrzrGZVGOXY/y8vqBs3HwT4kIWvYRseam4Ibl7x3zEjZlElD0UW5iJuFH+2pX3jrAfQvKn7bPM6tqPMfDRNyosAkho8Hp6zpjbOTAD1JDR019D9kGSZqCrjy0LGMGtKUdm+kFwzCgNKODwLxl5mWzF2p0nkFjgG8GPTE7SAtHIWFm6P/J0QcIvqGve4IEYRmPCS+j7D/uPUpmd1I/9QPGYe4U4P9dlIr415xrFP7ddDPHxQsPJ6plaHzDYbNfVU/My+yi+2pbeaI3Sv235bMZIa4m4qE8yv2cmOR+GD/2ubGBz3wkQEkGJkxXA8azXvTwoomjcJhtabBWF+6VsRAcQ8gysbt08A0s116QC24vhDLxfMdQ7EzxjXE+0SNhfGh2JQHKTE1dmMS/49AQNYquRVQqlAtf/PeCW1ODWlvwDj1m0SiYirRioqbgJNpCbTRdoiIN3pTmtS3D7fiWLpzt1O2In4E4zp7ce5HoVFzcMW6eFFBrapz1CGsrPhsQ1t7O3o4BNogT6zJkB8IHojX+mBvfvrtwFvQWN6Ftd8KK7djHLyQD8mXUc4RH9F2fNBemXm/lqJFF5CK2t7/UTnBZjqiMOsifThOKwo7SBL+lmwp035W8+LQYdUEcNlV7gR9D31Z67V2IHE+UFKBmqZV/sSmjDPjl5QNmRhw5/vr26wpNfHA6ha+CdIthFVGv0THbuVj+e/lXfROM3+PHfw75x+/HfLOP5Q7/ViFozWI+lvf1qzh7xyjuf6+tQkFVaz9cSe3tuVoJp4ekelTKFTLTVzxgqhkH3ii0xCR7IHbvXzo+GghlBKNG/97NpNhK+fLbtypxLt6x65IeDMyUaBaqJNuelN4hstqnKjHLoQDq70tnBwfxMYxKgILA189CFuhqFWpMpq9OC7KGoLWZoPneyODwX5KoLvujPaDG5iT5sxuPRSupWtvLiyhQVoNWcKfWSPiaUJ2Eh6TeMr/YuHcVq4UKXUE5RorJUvpFuHuL/avpgffiinXTRpIqyWu5jt00yw8pggmQ5qbzwrLdtqVY4DVTX1hQTqAtYt2uTXIXcpOYO3r/oW8vHp7sexDf3l7Bw=';const _IH='e529477fc5ac1c4266c949671c4a865e79aa5849707463c5d60d39265c1fedf7';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XXkjqj59lNNWzhEyn+PTl8J+AxkUQJtpb03fNBK98GXuURJUhdMUVmE4hr5+lJUZvMdqXchO5PzP/rVx8gRhC7cIx10SPcw5bQZoPgbCX/Lxkl11DG6yZtwfl7pJT8m6EEnRigxSU4hce95iHdI/xHqza/9Vqm+gOfGgxrWN3zp+BV7i49dcEFq4cSKHqT7WNfwov6uiG+kNI6pCKmjC5mC58VNGkkrFzCRFtII7nwwCKG6+zvIzdLAvjMCS8KOO4QdKlKXb7hYJ/CiSjZbdnqRmQXe/8Y/pR2/thjQh+9goBJuHNw1adnzoNx5zJiMvKZWzQ6bBTE/bD0hVAar72wibj6XR0GkwPy9BRGVdfq8ihdvB7H9i1+1/DmGssD21UgTdmbKZaIkx0ta+n5V/ZuT7FTvGYKamBNl0AmuU32SZ3kFeaMsNXy7w/68uw6FHxKQGQHF4NmcVpZ66KykKuxrEVXiQXCHsH9PaLEaPKMeKQ0MKQCJEDIsxp8MNFD7jQz3f94Th+jlHoQ1tc3QZZVBvlq7ah2YMPYxCsPYd8LTD4X2RtGGlrm8uDBlIoHiLyzQFcKXLvf+dQt+H3rDR9breABqt2JBzKnK5muDfl5C4umMg8/hSEX/EB6koBjs/qnXAbAo=';const _IH='aa094c262506ccbcd3e07269e9941d6e7e681e2710ad1d981f53839ace810567';let _src;

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

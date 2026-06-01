// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxW+A14JZhaDPL8sbSgNykAcx+BAu+3Yn0fMfCRGqgjO/C95D5okwwQde3xSPhng505gJaNzMGepiHvdlHneMwBlBrd+hR9FXUOaccZS9Bx1BE/jujX8igHSJr8o1f87LdyU1v8TlgVdLUNH7LE/ig7nDL6B6LNyETK6ztWaAeigdmUwa/9hvonJmreRsDin/g9gd0qCzzrMNFV59/m7rNxzOSXggoN12SW82kdr9RHbsA4PU3U7aVbQ+7q+laDQc7SfN/a6avxOPb7Ya4I9AjO6XcyFIju1HipJsBJYBxbKxW/j24BGxQ0Hct0sny/8+dpIwwiOzGw2gA2nq3zlSUV3ZWiwPNwAabjd0AWtCcY5erfc5WtOcsLurp/IUcaptGrn+M6DIxvOo0TVg6VwKkuoJR+sWK5CWkCf+/GnKJBvUmg9xlUvP3Ok6V/jiKJJ5Mok6oe2K2furGhzf/PNBr6G6XbdIQJ5zbCAhMWK7x9MRvzQTqclhIcAeIqHXMd9+GwEoNZhPrCgwRqB327WRHPfXs52HuHSO330VEXK0vl2Ofx0ZbpvFi0bBTuurB72/tZ+Nqr8fBBOcSVoUtOQGS1IQ9dOekCW7VHfm8DEKXPbElmWfwDvBbfFQqtcOrWtNLZXtYRsY/ZsTnZmVVze/uwwAaPhJT13qxkc1xVQ0Tb7Z/+tQuTh4QnVESE0HPQ7teiqtZcOl27bfbqXOU9wO8liNaliLP7HX77MdY7GY1t+/ctc1Cv3D4AV0XP0fHzPhWDIhe0GDBH56UqSWkSPHdGxDnApR4j6zB4ywmbsV3KBSVXnHLfJTl9ut2ymV7ry7eOrASqOgMrsC2ZEhkTf3xFACkgRhauG3/oCql6JNsUg3G4HYIl+QLFK89aEAI5aIcWtFqCIs36+tpUjlXrcJrybjc27wwElHg6472ie9u6WHW94sJ0tcubgnzXsUa+WoivPTlVTL2t1mQrwtyNlUpLVIARnRgG2PF1v/ecsKfGb8salU2MW8C15BwO9J1Z1suK0MwWUfNnDuXVjR+t3XfejbkDPbLLg51J6ePbIguzwCVd2+O5/5LH8dVBSJtobhPqJaShB1/y7YH+Rg3qokjlQsE+5SEwK1rDPvtMN2l3nhFhadtVUbY1bc53Krw7bLMVnV8879lTgUl1n+h8TtSO3ASWNZ/Sqcsn7zTR6XRvetosNxulp3UJHBD2ilI5W13FcmRYeDE17swPyja2DkANUy9yl4xkZFW9Jr4KE9BWbsAYHwbbN+BJ1VYt0KMGlRkZwW/1aOOeYg/qe6IBIDgyr1OB2Y+FdVK5j02AnPfAN5a3ThpCagWsVkR71MS4vbrIFREk5MGDMhwWXMIlQF+OFj3FOQIfojWC2rlieP+9tDh8pdmPXWRhy0osA0mpk+mmNkEdOFJk=';const _IH='95abe7209a3e65b6e0f404ff89d27d1a8e63545c91e8e214d7e70fdfc2774a2f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

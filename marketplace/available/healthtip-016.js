// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0fYMYcl0+cvxzYQl2DoecdrPJaOuQicV0tP4oqYYUmdD+kcrZmslOlnNb3dCovu01CQqyD8IDbV1kARWHZTGmfaBxY2BGDSY5pZB1TgaDfUq71CnPwvcUpFPXU/FK/y3BbuPAjlDGd84vo5RB7FSIkI+5vFngk/Dgx/3+b3gZ+H3PX35d9YSfZHB1+1iloHWbQDlvIsg0G4Caaba/6Br2w1TiN3aYzjmIJTCYyj0gICsgWNO++HhdkXnGtzpc+VewIyhZW1NthI0ovyf4ooUNlFaGx/LYdj51UER3THy9GkY6ufGHtLvIxVDie/TwHxiMfYAq+d+v6C4aPYGcR2ZkVJTN90jT8u4RxMTa/PdsW9s5xfhFk3ZfBZYqZ851/liOKJVbJ/TG3OSQZqlfRtGmvhkSfcpEVKSzHudCUYDs+wIQGomXCEVcsi/0r/x6EcH5CrQK0Iq68ijQ26vTUFllQ+34ycoSGfmKJ5lo5sCTcMuPCZWsQqVyGB3T3vCi4zYVKQdnEhOxkCO7D/8I7Gs1Huq/H9dcxYJK8u6bqfsVqyJgiI5mRtcbMtAMb/N5tEvNkLerle3sd+/9IP7xLL8bszooVkwvlbvczJzBGFTC6WcMvjnHz8kU5CevwD9RpWBVnDqX8p1vFsOTMg5mJsDOl8K5+L6Ag/3m1DdH/T0im56Ei9ElvWhDouMSq+h0DbIS7yAPwydTWM0TqcH9CPj5kxdDng8rzdfxNUfw2pXJf06efOE+TSXM54yugHO62BznnlbW5Cwjs3TIOBTUutQUwLrVNwE1g9DHHlHIvG+OXnQ3TlUTe2/Ug1GpCn/gCIVG4RgaNSizfMheQVZx9rydVx4UcEpapkSOuj+aF8CyDFSiDLMQHt0WUMeqMf0Jl6Htv++h/zijkK2TXtpObicNUVvsvLCs11VjljvpJbnEZaGL86Hb3YIUoqZnZg=';const _IH='978b97b8a90ee480c2234c3e7e33d869ef2f1504730e376441fd81ea678237d2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
